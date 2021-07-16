<template>
  <div>
    <draggable
      :list="cards"
      @change="$emit('changeSeq', $event)"
      itemKey="card"
      v-bind="dragOptions"
      @start="drag = true"
      @end="drag = false"
    >
      <transition-group
        class="card-list"
        type="transition"
        :name="!drag ? 'flip-list' : null"
      >
        <card
          v-for="card in cards"
          :key="card.id"
          :card="card"
          @removeCard="removeCard"
        />
      </transition-group>
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
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: 'cardRows',
        disabled: false,
        ghostClass: 'ghost',
      }
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