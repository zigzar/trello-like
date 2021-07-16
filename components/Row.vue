<template>
  <div class="row">
    <h3 class="row__header" :class="row.class">{{ row.header }} (0)</h3>
    <div class="row__body">
      <card-list />
    </div>
    <div class="row__add-btn btn">
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
  props: {
    rowNumber: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  data() {
    return {
      row: {},
    }
  },
  mounted() {
    switch (this.rowNumber) {
      case 0:
        this.row = {
          class: 'row__header_on-hold',
          header: 'on hold',
        }
        break
      case 1:
        this.row = {
          class: 'row__header_in-progress',
          header: 'in progress',
        }
        break
      case 2:
        this.row = {
          class: 'row__header_needs-review',
          header: 'needs review',
        }
        break
      case 3:
        this.row = {
          class: 'row__header_approved',
          header: 'approved',
        }
        break
    }
  },
}
</script>

<style>
.row {
  width: 320px;
  background-color: #555;
  color: aliceblue;
}
.row__header_on-hold {
  background-color: rgb(238, 173, 53);
}
.row__header_in-progress {
  background-color: rgb(53, 149, 238);
}
.row__header_needs-review {
  background-color: rgb(233, 236, 53);
}
.row__header_approved {
  background-color: rgb(111, 190, 47);
}
.row__header {
  height: 3em;
  padding: 0 1em;
  display: flex;
  align-items: center;
  text-transform: uppercase;
}
.row__body {
  min-height: 2em;
  padding: 1em;
}
.row__add-btn {
  display: flex;
  padding: 1em;
}
.row__add-btn:hover {
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