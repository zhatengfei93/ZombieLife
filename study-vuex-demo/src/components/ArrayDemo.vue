<template>
  <div class="vue-array-demo">
    <div v-for="(item, index) of items" :key="index">{{ item }}</div>
    <button @click="handleChangeArray">changeArray</button>
    <button @click="handleChangeArrayLength">ChangeArrayLenth</button>
  </div>
</template>
<script>
export default {
  name: 'arrayDemo',
  data() {
    return {
      items: ['a', 'b', 'c']
    }
  },
  methods: {
    handleChangeArray() {
      let indexOfItem = 0
      let newValue = 'x'
      // this.items.splice(indexOfItem, 1, newValue)
      this.$set(this.items, indexOfItem, newValue)
    },
    handleChangeArrayLength() {
      this.items.splice(1)
      console.log(this.items.length)
    }
  }
}
</script>
