<template>
  <div class="hello">
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    value: String
  },
  data() {
    return {
      // searchText: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
