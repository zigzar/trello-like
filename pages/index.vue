<template>
  <div class="container">
    <row v-for="number in rowQuantity" :key="number" :rowNumber="number - 1" />
  </div>
</template>

<script>
import Row from '@/components/Row.vue'
export default {
  components: {
    Row,
  },
  data() {
    return {
      rowQuantity: 4,
    }
  },
  async asyncData({ store }) {
    await store.dispatch('auth')
    await store.dispatch('fetch')
  },
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}
body {
  background-color: #393939;
}
.container {
  display: flex;
  flex: 1;
  padding: 10vh 1em;
  justify-content: center;
  align-items: flex-start;
  gap: 2em;
  flex-wrap: wrap;
}
</style>