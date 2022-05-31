<template>
  <v-container>
    <v-row>
      <v-col
        ><v-btn
          v-show="session.length > 0"
          outlined
          color="primary"
          @click="newSession()"
          >New session</v-btn
        ></v-col
      >
      <v-col align="right"
        ><v-btn icon large @click="configDialog = !configDialog"
          ><v-icon>mdi-cog</v-icon></v-btn
        >
      </v-col>
    </v-row>

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
                        icon
                        large
                        color="primary"
                        @click="spin(index)"
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
                      class="text-h5"
                      color="primary"
                      icon
                      x-large
                      @click="spin(session.length)"
                    >
                      <v-img
                        max-width="56"
                        src="android-chrome-512x512.png"
                      ></v-img>
                    </v-btn>
                    <span v-else>No more toys to play with</span>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
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
    <v-dialog v-model="configDialog" fullscreen
      ><ToyConfiguration
        @config:close="configDialog = false"
      ></ToyConfiguration>
    </v-dialog>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { Player } from '~/models/Player'
import { Toy } from '~/models/Toy'
import ToyConfiguration from '@/components/ToyConfiguration.vue'

/*
    @t is the current time (or position) of the tween. This can be seconds or frames, steps, seconds, ms, whatever – as long as the unit is the same as is used for the total time [3].
    @b is the beginning value of the property.
    @c is the change between the beginning and destination value of the property.
    @d is the total time of the tween.
*/
const easeOutQuad = function (
  t: number,
  b: number,
  c: number,
  d: number
): number {
  t /= d
  return -c * t * (t - 2) + b
}

const spins = 15
const minTime = 10
const maxTime = 200

export default Vue.extend({
  components: {
    ToyConfiguration,
  },
  data() {
    return {
      session: [] as { toyId: number; toy: string; player: string }[],
      rollTime: 2,
      configDialog: false,
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
      setTimeout(() => {
        this.spin(this.session.length - 1)
      }, minTime)
    },
    reroll(index: number) {
      this.session.splice(index, 1, this.createRandomPlay())
    },
    spin(index: number) {
      const position = 0
      const spinner = (position: number) => {
        setTimeout(() => {
          this.reroll(index)
          if (position < spins) spinner(++position)
        }, easeOutQuad(position, minTime, maxTime, spins))
      }
      spinner(position)
    },
    newSession() {
      this.session = []
    },
  },
})
</script>
