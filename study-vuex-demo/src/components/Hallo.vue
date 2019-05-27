<template>
  <div class="hallo">
    <!-- <a :href="url" target="_blank" class="nav-link"><slot></slot></a> -->
    <ul>
      <li v-for="todo of filteredTodos" :key="todo.id">
        <slot name="todo" v-bind:todo="todo">
          {{ todo.text }}
        </slot>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'hallo',
  props: {
    filteredTodos: {
      type: Array
    }
    // url: {
    //   type: String
    // }
  },
  data() {
    return {}
  }
}
</script>
<style lang="stylus" scoped>
ul
  list-style-type none
</style>
