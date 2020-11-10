import { createStore } from 'vuex'

const store = createStore({
  state: {
    data: 'example string'
  },
  getters: {
    getData(state) {
      return state.data
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});

export default store;
