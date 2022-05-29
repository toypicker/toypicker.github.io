<template>
  <v-row justify="center">
    <v-col cols="12" sm="8" md="6">
      <v-card v-if="players.length > 0 && toys.length > 0">
        <v-container>
          <v-row align="center">
            <v-col
              v-for="(play, index) in session"
              :key="index"
              cols="12"
              sm="6"
              md="4"
            >
              <v-card elevation="2">
                <v-card-text align="center">
                  <span>
                    <v-btn
                      v-if="playableToys.length > 0"
                      color="primary"
                      icon
                      @click="reroll(index)"
                      ><v-icon>mdi-refresh</v-icon></v-btn
                    >
                  </span>
                  <p class="text-h4">{{ play.toy }}</p>
                  <!-- <p class="text-h5">on</p> -->
                  <v-icon x-large>mdi-arrow-down</v-icon>
                  <p class="text-h4">{{ play.player }}</p>
                </v-card-text>
              </v-card></v-col
            >
            <v-col cols="12" sm="6" md="4">
              <v-card elevation="0" height="100%"
                ><v-card-text align="center">
                  <v-btn
                    v-if="playableToys.length > 0"
                    color="primary"
                    icon
                    @click="roll()"
                  >
                    <v-icon x-large>mdi-plus-thick</v-icon></v-btn
                  >
                  <span v-else>No more toys to play with</span>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions
          ><v-btn outlined color="primary" @click="newSession()"
            >New session</v-btn
          ></v-card-actions
        >
      </v-card>
      <v-card v-else height="200">
        <v-row>
          <v-col align="center">
            <v-card-text>Add players and toys to begin</v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import { Player } from '~/models/Player'
import { Toy } from '~/models/Toy'
export default Vue.extend({
  data() {
    return {
      session: [] as { toyId: number; toy: string; player: string }[],
    }
  },

  computed: {
    toys(): Toy[] {
      return this.$store.state.toys?.toys ?? []
    },
    players(): Player[] {
      return this.$store.state.players?.players ?? []
    },

    playableToys(): { id: number; name: string; players: string[] }[] {
      return this.toys
        .filter(
          (toy) =>
            toy.active && !this.session.some((play) => play.toyId === toy.id)
        )
        .map((toy) => ({
          id: toy.id,
          name: toy.name,
          players: toy.eligblePlayers.map(
            (playerId) =>
              this.players.find((player) => player.id === playerId)?.name ??
              'Unknown'
          ),
        }))
    },
  },
  methods: {
    createRandomPlay(): { toyId: number; toy: string; player: string } {
      if (!this.playableToys.length) {
        return { toyId: -1, toy: 'N/A', player: 'N/A' }
      }

      const randomToy =
        this.playableToys[Math.floor(Math.random() * this.playableToys.length)]
      const randomPlayer =
        randomToy.players[Math.floor(Math.random() * randomToy.players.length)]

      return { toyId: randomToy.id, toy: randomToy.name, player: randomPlayer }
    },
    roll() {
      this.session.push(this.createRandomPlay())
    },
    reroll(index: number) {
      this.session.splice(index, 1, this.createRandomPlay())
    },
    newSession() {
      this.session = []
    },
  },
})
</script>
