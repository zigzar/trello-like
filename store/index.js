import axios from 'axios'

export const state = () => ({
  cards: [],
  rowQuantity: [0, 0, 0, 0],
  username: 'test_100',
  password: 'test12345678',
  token: '',
})

export const getters = {
  getQuantity: (state) => (row) => {
    return state.rowQuantity[row]
  },
}

export const mutations = {
  setCards(state, payload) {
    state.cards = payload
  },
  setRowQuantity(state, payload) {
    state.rowQuantity = payload
  },
  setToken(state, token) {
    state.token = token
  },
}

export const actions = {
  async auth({ state, commit }) {
    let response = await axios.post(
      'https://trello.backend.tests.nekidaem.ru/api/v1/users/login/',
      {
        username: state.username,
        password: state.password,
      }
    )
    await commit('setToken', response.data.token)
  },
  async fetch({ state, commit }) {
    let token = state.token
    let response = await axios.get(
      'https://trello.backend.tests.nekidaem.ru/api/v1/cards/',
      {
        headers: {
          Authorization: `JWT ${token}`,
        },
      }
    )
    commit('setCards', response.data)
    let quantityArr = []
    response.data.forEach((card) => {
      quantityArr[card.row]++
    })
    commit('setRowQuantity', quantityArr)
  },
  getQuantity({ state }, row) {
    return state.rowQuantity[row]
  },
}
