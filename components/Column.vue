<template>
  <div class="column">
    <div class="column__header">
      <h3>Header</h3>
    </div>
    <div class="column__body">
      <card-list />
    </div>
  </div>
</template>

<script>
import CardList from '@/components/CardList.vue'
export default {
  components: {
    CardList,
  },
}
</script>

<style>
</style>