<template>
  <div class="card-list">
    <card v-for="card in cards" :key="card.id" :card="card" />
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
export default {
  components: {
    Card,
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