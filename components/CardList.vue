<template>
  <div>
    <draggable
      class="card-list"
      :list="cards"
      group="cardRows"
      @change="log"
      itemKey="card"
    >
      <!-- <transition-group> -->
      <card
        v-for="card in cards"
        :key="card.id"
        :card="card"
        @removeCard="removeCard"
      />
      <!-- </transition-group> -->
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import Card from '@/components/Card.vue'
export default {
  components: {
    Card,
    draggable,
  },
  props: {
    rowNumber: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      cards: [],
    }
  },
  methods: {
    getCards() {
      this.cards = this.$store.getters.getCards(this.rowNumber)
    },
    removeCard(id) {
      let index = this.cards.findIndex((card) => card.id == id)
      if (index != -1) {
        this.cards.splice(index, 1)
        this.$store.dispatch('removeCard', id, index)
      } else {
        alert(`Карточки с id ${id} не существует`)
      }
    },
    log(evt) {
      if (evt.added) {
        console.log(
          `Обновляем карточку с id ${evt.added.element.id}. Место: ${evt.added.newIndex}. Ряд: ${this.rowNumber}`
        )
        let card = {
          id: evt.added.element.id,
          row: this.rowNumber,
          seq_num: evt.added.newIndex,
          text: evt.added.element.text,
        }
        this.$store.dispatch('updateCard', card)
      }
    },
  },
  mounted() {
    this.getCards()
  },
}
</script>

<style>
.card-list > *:not(:last-child) {
  margin-bottom: 1em;
}
</style>