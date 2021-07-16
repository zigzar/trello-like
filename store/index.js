import axios from 'axios'

export const state = () => ({
  cards: [],
  rowQuantity: [],
  username: 'test_100',
  password: 'test12345678',
  token: '',
})

export const getters = {
  getQuantity: (state) => (row) => {
    return state.rowQuantity[row]
  },
  getCards: (state) => (row) => {
    return state.cards.filter(function (card) {
      console.log(card.row == row)
      return card.row == row
    })
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
    let data = response.data
    commit('setCards', data)
    let quantityArr = [0, 0, 0, 0]
    data.forEach((card) => {
      console.log(Number(card.row))
      quantityArr[Number(card.row)]++
    })
    commit('setRowQuantity', quantityArr)
  },
  getQuantity({ state }, row) {
    return state.rowQuantity[row]
  },
}
