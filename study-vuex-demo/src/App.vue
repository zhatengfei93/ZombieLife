<template>
  <div id="app">
    <counter></counter>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- <router-view /> -->
  </div>
</template>
<script>
import Counter from './components/Counter'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  created() {
    /*  this.$store.commit("increment", {
      amount: 10
    }); */
    /* this.$store.commit({
      type: "SOME_MUTATION",
      amount: 10
    }) */
    /* this.add({
      type: "increment",
      amount: 21
    }); */
    this.add({
      type: 'incrementAsync',
      amount: 10
    })
  },
  computed: {
    ...mapState({
      count: state => state.count
    }),
    ...mapGetters({
      doneCount: 'doneTodosCount'
    })
    /* ...mapGetters([
      'doneTodosCount',
      'anotherGetter'
    ]) */
  },
  methods: {
    ...mapMutations([
      'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
      'SOME_MUTATION'
    ]),
    ...mapMutations({
      add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    }),
    ...mapActions({
      add: 'incrementAsync'
    })
  },
  components: {
    Counter
  }
}
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>
