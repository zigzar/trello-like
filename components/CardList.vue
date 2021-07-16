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
    cards: {
      type: Array,
      required: true,
      default: [],
    },
  },
}
</script>

<style>
.card-list > *:not(:last-child) {
  margin-bottom: 1em;
}
</style>