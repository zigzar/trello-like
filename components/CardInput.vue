<template>
  <div class="card-input">
    <textarea
      placeholder="Ввести заголовок для этой карточки"
      name="field"
      class="card-input__field"
    ></textarea>
    <div class="card-input__btns btns">
      <button class="btns__add btn">Добавить карточку</button>
      <button class="btns__cancel btn"></button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.card-input {
  padding: 1em;
}
.card-input__field {
  width: 100%;
  color: aliceblue;
  background-color: #777;
  border: none;
  resize: none;
  padding: 1em;
}
.card-input__field:focus {
  outline: none;
}
.btn {
  border: none;
  cursor: pointer;
}
.btns {
  display: flex;
  align-items: center;
  margin-top: 1em;
}
.btns__add {
  background-color: #999;
  color: aliceblue;
  padding: 0.5em 1.5em;
}
.btns__cancel {
  width: 1.5em;
  height: 1.5em;
  margin-left: 1em;
  background-color: #999;
}
</style>