import Vue from 'vue'
import vuex from 'vuex'
import { SOME_MUTATION } from './mutation-types'
Vue.use(vuex)

// import dialog_store from "../components/dialog.store";
export default new vuex.Store({
  /* modules: {
    count: dialog_store
  }, */
  state: {
    todos: [
      { id: 1, text: 'todos one...', done: true },
      { id: 2, text: 'todos two...', done: false }
    ],
    count: 1
  },
  mutations: {
    increment(state) {
      state.count++
    },
    [SOME_MUTATION](state, payload) {
      state.count += payload.amount
    }
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    },
    getTodoById: state => id => {
      return state.todos.find(todo => todo.id === id)
    }
  },
  // Action 提交的是 mutation，而不是直接变更状态
  // Action 可以包含任意异步操作
  actions: {
    /* increment(context) {
      context.commit("increment");
    } */
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    },
    actionA({ commit }) {
      return new Promise(resolve => {
        setTimeout(() => {
          commit('someMutation')
          resolve()
        }, 1000)
      })
    }
    /* checkout({ commit, state }, products) {
      // 把当前购物车的物品备份起来
      const savedCartItems = [...state.cart.added];
      // 发出结账请求，然后乐观地清空购物车
      commit(types.CHECKOUT_REQUEST);
      // 购物 API 接受一个成功回调和一个失败回调
      shop.buyProducts(
        products,
        // 成功操作
        () => commit(types.CHECKOUT_SUCCESS),
        // 失败操作
        () => commit(types.CHECKOUT_FAILURE, savedCartItems)
      )
    } */
  }
})
