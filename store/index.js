import axios from '@nuxtjs/axios'

export const state = () => ({
  cards: [
    {
      id: 1798,
      row: '0',
      seq_num: 0,
      text: 'Create components architecture',
    },
    {
      id: 1800,
      row: '0',
      seq_num: 1,
      text: 'Deal with it',
    },
    {
      id: 1801,
      row: '0',
      seq_num: 2,
      text: 'string1',
    },
    {
      id: 1802,
      row: '0',
      seq_num: 3,
      text: 'string2',
    },
    {
      id: 1803,
      row: '0',
      seq_num: 4,
      text: 'string3',
    },
    {
      id: 1799,
      row: '1',
      seq_num: 0,
      text: 'Create Vuex storage',
    },
  ],
  rowQuantity: [0, 0, 0, 0],
})

export const mutations = {
  setCards(store, payload) {
    store.cards = payload
  },
  setRowQuantity(store, payload) {
    store.rowQuantity = payload
  },
}

export const actions = {
  async fetch({ store, commit }) {
    let cards = await axios.get(
      'https://trello.backend.tests.nekidaem.ru/api/v1/cards/'
    )
    commit('setCards', cards)
    let quantityArr = []
    cards.forEach((card) => {
      quantityArr[card.row]++
    })
    commit('setRowQuantity', quantityArr)
  },
}
