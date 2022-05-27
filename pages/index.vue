<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline"> Play session </v-card-title>
        <v-row>
          <v-col v-for="(play, index) in session" :key="index" cols="2">
            <v-card elevation="2"
              >{{ play.toy }} on {{ play.player }}
              <v-btn v-if="playableToys.length > 0" @click="reroll(index)"
                >Reroll</v-btn
              >
            </v-card></v-col
          >
          <v-col cols="2" align="center">
            <v-card elevation="2"
              ><v-btn v-if="playableToys.length > 0" @click="roll()"
                ><v-avatar><v-icon>mdi-plus-thick</v-icon></v-avatar></v-btn
              >
              <span v-else>No more toys to play with</span>
            </v-card>
          </v-col>
        </v-row>
        <v-card-actions
          ><v-btn @click="newSession()">New session</v-btn></v-card-actions
        >
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      toys: [
        {
          id: 0,
          name: 'Toy 1',
          active: true,
          eligblePlayers: [0, 1],
        },
        {
          id: 1,
          name: 'Toy 2',
          active: true,
          eligblePlayers: [0],
        },
        {
          id: 2,
          name: 'Toy 3',
          active: true,
          eligblePlayers: [1],
        },
        {
          id: 3,
          name: 'Toy 4',
          active: false,
          eligblePlayers: [0, 1],
        },
      ],
      players: [
        {
          id: 0,
          name: 'Mikkel',
        },
        {
          id: 1,
          name: 'Linda',
        },
      ],
      session: [] as { toyId: number; toy: string; player: string }[],
    }
  },

  computed: {
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
