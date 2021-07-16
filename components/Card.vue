<template>
  <div class="card">
    <button
      class="card__remove-btn btn"
      @click="$emit('removeCard', card.id)"
    ></button>
    <p><strong>id:</strong> {{ card.id }}</p>
    <p>
      {{ card.text }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true,
      default: {},
    },
  },
}
</script>

<style>
.card {
  padding: 1em;
  background-color: #333;
  position: relative;
}
.card__remove-btn {
  width: 0.7em;
  height: 0.7em;
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  background: url('static/close.svg');
  background-position: center center;
  background-size: contain;
}
</style>