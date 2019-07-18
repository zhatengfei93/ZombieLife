<template>
  <div class="base-input">
    <label
      >{{ label }}
      <input v-bind="$attrs" v-bind:value="value" v-on="inputListeners" />
    </label>
    {{ $parent.message }}
  </div>
</template>
<script>
export default {
  name: 'base-input',
  inheritAttrs: false,
  props: ['label', 'value'],
  computed: {
    inputListeners() {
      let vm = this
      return Object.assign({}, this.$listeners, {
        input(event) {
          vm.$emit('input', event.target.value)
        }
      })
    }
  }
}
</script>
