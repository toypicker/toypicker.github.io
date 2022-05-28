<template>
  <v-card>
    <v-card-title>Toy configuration</v-card-title>
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
        <v-col>Toys</v-col>

        <v-col align="right"
          ><v-btn icon color="primary" outlined @click="addToy()"
            ><v-icon>mdi-plus</v-icon></v-btn
          ></v-col
        >
      </v-row>

      <v-row>
        <v-col v-for="(toy, index) in toys" :key="toy.id" cols="12">
          <v-card>
            <v-card-text>
              <v-text-field v-model="toy.name" outlined></v-text-field>
              <v-subtitle>Applicable to</v-subtitle>
              <v-switch
                v-for="player in players"
                :key="player.id"
                v-model="toy.eligblePlayers"
                :label="player.name"
                :value="player.id"
              ></v-switch>
              <v-card-actions>
                <v-switch v-model="toy.active" inset></v-switch>
                <v-spacer></v-spacer
                ><v-btn color="grey" outlined icon @click="removeToy(index)"
                  ><v-icon>mdi-delete</v-icon></v-btn
                >
              </v-card-actions>
            </v-card-text>
          </v-card></v-col
        >
      </v-row>
    </v-card-text>
  </v-card>
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
          name: 'Player 1',
        },
        {
          id: 1,
          name: 'Player 2',
        },
      ],
    }
  },
  methods: {
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
  },
})
</script>
