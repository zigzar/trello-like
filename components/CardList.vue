<template>
  <div class="card-list">
    <card />
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
export default {
  components: {
    Card,
  },
}
</script>

<style>
.card-list > *:not(:last-child) {
  margin-bottom: 1em;
}
</style>