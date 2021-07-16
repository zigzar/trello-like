<template>
  <div class="row">
    <h3 class="row__header" :class="row.class">
      {{ row.header }} ({{ quantity }})
    </h3>
    <div class="row__body">
      <card-list
        @updateQuantity="updateQuantity"
        @removeCard="removeCard"
        @changeSeq="changeSeq"
        :cards="cards"
      />
    </div>
    <div class="row__add-btn btn" v-if="!inputVisible" @click="showInput">
      <div class="btn__plus"></div>
      <p class="btn__text">Добавить карточку</p>
    </div>
    <card-input
      :show="inputVisible"
      @hideInput="hideInput"
      @addCard="addCard"
    />
  </div>
</template>

<script>
import CardList from '@/components/CardList.vue'
import CardInput from '@/components/CardInput.vue'
import { mapState } from 'vuex'
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
      quantity: 0,
      inputVisible: false,
      cards: [],
    }
  },
  methods: {
    updateQuantity(newQuantity) {
      if (newQuantity !== undefined) this.quantity = newQuantity
    },
    showInput() {
      this.inputVisible = true
    },
    hideInput() {
      this.inputVisible = false
    },
    async addCard(text) {
      await this.$store.dispatch('addCard', { row: this.rowNumber, text: text })
      this.hideInput()
      this.cards = await this.$store.getters.getCards(this.rowNumber)
    },
    removeCard(id) {
      let index = this.cards.findIndex((card) => card.id == id)
      if (index != -1) {
        this.cards.splice(index, 1)
        this.$store.dispatch('removeCard', id, index)
      } else {
        alert(`Карточки с id ${id} не существует`)
      }
    },
    async changeSeq(evt) {
      if (evt.removed) return
      let card
      if (evt.added) {
        card = {
          id: evt.added.element.id,
          row: this.rowNumber,
          seq_num: evt.added.newIndex,
          text: evt.added.element.text,
        }
      }
      if (evt.moved) {
        card = {
          id: evt.moved.element.id,
          row: this.rowNumber,
          seq_num: evt.moved.newIndex,
          text: evt.moved.element.text,
        }
      }
      await this.$store.dispatch('updateCard', card)
    },
  },

  mounted() {
    this.cards = this.$store.getters.getCards(this.rowNumber)
    this.updateQuantity()
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