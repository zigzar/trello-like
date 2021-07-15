<template>
  <div class="container">
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
.container {
  display: flex;
  flex: 1;
}
</style>