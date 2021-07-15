<template>
  <div class="card">
    <button class="card__remove-btn"></button>
    <p><strong>id:</strong> 1</p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, veniam.
    </p>
  </div>
</template>

<script>
export default {}
</script>

<style>
.card {
  padding: 1em;
  background-color: #222;
  position: relative;
}
.card__remove-btn {
  width: 1em;
  height: 1em;
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  background-color: #555;
  border: none;
}
</style>