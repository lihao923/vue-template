import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 1.实例化 Vuex.store
export default new Vuex.Store({
  state: {
    // 1.state在vuex中用于存储数据
    count: 0
  },
  mutations: {
    // 2.mutations里面放的是方法，方法主要用于改变state里面的数据
    increment(state, n) {
      state.count += n
    },
    decrement(state, n) {
      state.count -= n
    }
  },
  actions: { // actions提交mutations, 是异步的改变state状态的方法
    incrementAction(context) {
      context.commit('increment', 5)
    },
    decrementAction({
      commit
    }) {
      commit('decrement', 10)
    }
  }
})
