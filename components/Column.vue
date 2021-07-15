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
.column {
  width: 320px;
  background-color: #555;
}
.column__header {
  background-color: rgb(238, 173, 53);
  height: 3em;
  padding: 0 1em;
  display: flex;
  align-items: center;
}
.column__body {
  min-height: 2em;
  padding: 1em;
}
</style>