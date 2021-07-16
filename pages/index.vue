<template>
  <div class="container">
    <row :rowNumber="0" />
    <row :rowNumber="1" />
    <row :rowNumber="2" />
    <row :rowNumber="3" />
  </div>
</template>

<script>
import Row from '@/components/Row.vue'
import { mapState } from 'vuex'
export default {
  components: {
    Row,
  },
  computed: mapState({
    cards: (state) => state.cards,
  }),
  beforeMount() {
    if (localStorage.hasOwnProperty('cards'))
      localStorage.getItem(JSON.parse('cards'))
  },
  updated() {
    localStorage.setItem(JSON.stringify(this.$store.state.cards))
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
.container {
  display: flex;
  flex: 1;
  padding: 10vh;
  justify-content: center;
  align-items: flex-start;
  gap: 2em;
  flex-wrap: wrap;
}
</style>