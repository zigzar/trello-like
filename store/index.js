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
    return state.cards.filter((card) => card.row == row)
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
  addCard(state, card) {
    state.cards.push(card)
  },
  removeCard(state, index) {
    state.cards.splice(index, 1)
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
  async fetch({ state, commit, dispatch }) {
    dispatch('refreshToken')
    let response = await axios.get(
      'https://trello.backend.tests.nekidaem.ru/api/v1/cards/',
      {
        headers: {
          Authorization: `JWT ${state.token}`,
        },
      }
    )
    let data = response.data
    commit('setCards', data)
    // let quantityArr = [0, 0, 0, 0]
    // data.forEach((card) => {
    //   quantityArr[Number(card.row)]++
    // })
    // commit('setRowQuantity', quantityArr)
  },
  getQuantity({ state }, row) {
    return state.rowQuantity[row]
  },
  async addCard({ state, commit, dispatch }, body) {
    await dispatch('refreshToken')
    let response = await axios.post(
      'https://trello.backend.tests.nekidaem.ru/api/v1/cards/',

      body,
      {
        headers: {
          Authorization: `JWT ${state.token}`,
        },
      }
    )
    await commit('addCard', response.data)
  },
  async removeCard({ state, commit, dispatch }, id, index) {
    dispatch('refreshToken')
    await axios.delete(
      `https://trello.backend.tests.nekidaem.ru/api/v1/cards/${id}/`,
      {
        headers: {
          Authorization: `JWT ${state.token}`,
        },
      }
    )
    commit('removeCard', index)
  },
  async updateCard({ state, dispatch }, card) {
    await dispatch('refreshToken')
    await axios.patch(
      `https://trello.backend.tests.nekidaem.ru/api/v1/cards/${card.id}/`,
      card,
      {
        headers: {
          Authorization: `JWT ${state.token}`,
        },
      }
    )
    await dispatch('fetch') // TODO: replace fetch with state.cards updating
  },
  async refreshToken({ state, commit }) {
    let response = await axios.post(
      'https://trello.backend.tests.nekidaem.ru/api/v1/users/refresh_token/',
      {
        token: state.token,
      },
      {
        headers: {
          Authorization: `JWT ${state.token}`,
        },
      }
    )
    await commit('setToken', response.data.token)
  },
}
