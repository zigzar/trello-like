<template>
  <div class="container">
    <column />
    <column />
    <column />
    <column />
  </div>
</template>

<script>
import Column from '@/components/Column.vue'
export default {
  components: {
    Column,
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
  align-items: center;
  gap: 2em;
  flex-wrap: wrap;
}
</style>