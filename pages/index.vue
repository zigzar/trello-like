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
}
.container {
  display: flex;
  flex: 1;
  justify-content: center;
  gap: 2em;
  flex-wrap: wrap;
}
</style>