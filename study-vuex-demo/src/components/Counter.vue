<template>
  <div class="counter">
    <div>{{ count }}</div>
  </div>
</template>
<script>
export default {
  computed: {
    count() {
      return this.$store.state.count
    }
  }
}
</script>
