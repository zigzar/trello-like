<template>
  <div>
    <draggable
      class="card-list"
      :list="cards"
      group="cardRows"
      @change="$emit('changeSeq', $event)"
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
    cards: {
      type: Array,
      required: true,
      default: [],
    },
  },
  methods: {
    removeCard(id) {
      this.$emit('removeCard', id)
    },
  },
  watch: {
    cards() {
      this.$emit('updateQuantity', this.cards.length)
    },
  },
}
</script>

<style>
.card-list > *:not(:last-child) {
  margin-bottom: 1em;
}
.card-list {
  min-height: 4em;
}
</style>