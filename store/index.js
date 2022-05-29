export const state = () => ({
  toys: { toys: [] },
  players: { players: [] },
  // toys: [
  // {
  //   id: 0,
  //   name: 'Toy 1',
  //   active: true,
  //   eligblePlayers: [0, 1],
  // },
  // {
  //   id: 1,
  //   name: 'Toy 2',
  //   active: true,
  //   eligblePlayers: [0],
  // },
  // {
  //   id: 2,
  //   name: 'Toy 3',
  //   active: true,
  //   eligblePlayers: [1],
  // },
  // {
  //   id: 3,
  //   name: 'Toy 4',
  //   active: false,
  //   eligblePlayers: [0, 1],
  // },
  // ],
  // players: [
  // {
  //   id: 0,
  //   name: 'Player 1',
  // },
  // {
  //   id: 1,
  //   name: 'Player 2',
  // },
  // ],
})

export const mutations = {
  setPlayers(state, players) {
    state.players = { ...state.players, players }
  },
  setToys(state, toys) {
    state.toys = { ...state.toys, toys }
  },
}
