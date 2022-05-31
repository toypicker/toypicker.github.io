<template>
  <v-card>
    <v-card-title
      >Toy configuration <v-spacer></v-spacer
      ><v-btn outlined color="primary" @click="save">Save</v-btn></v-card-title
    >
    <v-card-text>
      <v-row class="text-h5">
        <v-col>Players</v-col>

        <v-col align="right"
          ><v-btn icon color="primary" outlined @click="addPlayer()"
            ><v-icon>mdi-plus</v-icon></v-btn
          ></v-col
        >
      </v-row>
      <v-row>
        <v-col>
          <v-list>
            <v-list-item v-for="(player, index) in players" :key="player.id">
              <v-list-item-title>
                <v-text-field v-model="player.name"></v-text-field>
              </v-list-item-title>
              <v-list-item-action
                ><v-btn icon @click="removePlayer(index)">
                  <v-icon>mdi-delete</v-icon>
                </v-btn></v-list-item-action
              >
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
      <v-row class="text-h5">
        <v-col>Toys ({{ toys.length }})</v-col>

        <v-col align="right"
          ><v-btn icon color="primary" outlined @click="addToy()"
            ><v-icon>mdi-plus</v-icon></v-btn
          ></v-col
        >
      </v-row>

      <v-row>
        <v-expansion-panels v-model="expansion" multiple>
          <draggable :list="toys" style="width: 100%" v-bind="dragOptions">
            <v-expansion-panel
              v-for="toy in toys"
              :key="toy.id"
              class="no-transition"
            >
              <v-expansion-panel-header
                ><span style="display: contents">
                  <v-icon class="drag-handle" @click.stop
                    >mdi-drag-vertical</v-icon
                  >
                  {{ toy.name }}
                  <v-spacer></v-spacer>
                  <v-btn
                    v-if="toy.active"
                    icon
                    color="yellow darken-1"
                    @click.stop="toy.active = false"
                    ><v-icon>mdi-lightbulb</v-icon></v-btn
                  >
                  <v-btn
                    v-else
                    icon
                    color="grey"
                    @click.stop="toy.active = true"
                    ><v-icon>mdi-lightbulb-off</v-icon></v-btn
                  >
                </span>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-text-field
                  v-model="toy.name"
                  outlined
                  label="Name"
                ></v-text-field>
                <span>Roll for</span>
                <v-switch
                  v-for="player in players"
                  :key="player.id"
                  v-model="toy.eligblePlayers"
                  :label="player.name"
                  :value="player.id"
                ></v-switch>

                <v-row justify="center" align="center">
                  <v-col>
                    <v-switch
                      v-model="toy.active"
                      label="Include in rolls"
                    ></v-switch>
                  </v-col>
                  <v-col cols="4" align="right">
                    <v-btn color="grey" outlined icon @click="removeToy(index)"
                      ><v-icon>mdi-delete</v-icon></v-btn
                    >
                  </v-col>
                </v-row>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </draggable>
        </v-expansion-panels>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import draggable from 'vuedraggable'
import { Player } from '~/models/Player'
import { Toy } from '~/models/Toy'

export default Vue.extend({
  components: {
    draggable,
  },
  data() {
    return {
      toys: [] as Toy[],
      players: [] as Player[],
      expansion: [],
      dragOptions: {
        handle: '.drag-handle',
      },
      selected: [] as number[],
    }
  },

  computed: {
    savedToys(): Toy[] {
      return this.$store.state.toys?.toys ?? []
    },
    savedPlayers(): Player[] {
      return this.$store.state.players?.players ?? []
    },
  },

  // make sure config is loaded if data is available after mounted happens
  watch: {
    savedToys() {
      this.init()
    },
    savedPlayers() {
      this.init()
    },
  },

  mounted() {
    this.init()
  },

  methods: {
    init() {
      this.toys = this.savedToys.map((toy: Toy) => ({ ...toy }))
      this.players = this.savedPlayers.map((player: Player) => ({
        ...player,
      }))
    },

    addPlayer() {
      this.players.push({
        id: this.players.length,
        name: 'Player ' + (this.players.length + 1),
      })
    },
    removePlayer(index: number) {
      this.players.splice(index, 1)
    },
    addToy() {
      this.toys.unshift({
        id: this.toys.length,
        name: 'Toy ' + (this.toys.length + 1),
        active: true,
        eligblePlayers: this.players.map((p) => p.id),
      })
    },
    removeToy(index: number) {
      this.toys.splice(index, 1)
    },
    save() {
      this.$store.commit('setToys', this.toys)
      this.$store.commit('setPlayers', this.players)
      this.$emit('config:close')
    },
    isSelected(id: number) {
      return this.selected.includes(id)
    },
    toggleSelected(id: number) {
      console.log('toggle ' + id)
      const indexOfId = this.selected.indexOf(id)
      if (indexOfId === -1) this.selected.push(id)
      else this.selected.splice(indexOfId, 1)
    },
  },
})
</script>

<style>
.no-transition {
  transition: none !important;
}
</style>
