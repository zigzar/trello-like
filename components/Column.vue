<template>
  <div class="column">
    <h3 class="column__header">Header (0)</h3>
    <div class="column__body">
      <card-list />
    </div>
    <div class="column__add-btn btn">
      <div class="btn__plus"></div>
      <p class="btn__text">Добавить карточку</p>
    </div>
    <card-input />
  </div>
</template>

<script>
import CardList from '@/components/CardList.vue'
import CardInput from '@/components/CardInput.vue'
export default {
  components: {
    CardList,
    CardInput,
  },
}
</script>

<style>
.column {
  width: 320px;
  background-color: #555;
  color: aliceblue;
}
.column__header {
  background-color: rgb(238, 173, 53);
  height: 3em;
  padding: 0 1em;
  display: flex;
  align-items: center;
  text-transform: uppercase;
}
.column__body {
  min-height: 2em;
  padding: 1em;
}
.column__add-btn {
  display: flex;
  padding: 1em;
}
.column__add-btn:hover {
  background-color: #333;
  transition: 0.3s;
}
.btn__plus {
  width: 1em;
  height: 1em;
  background-color: #999;
  margin-right: 1em;
}
</style>