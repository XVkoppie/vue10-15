import axios from 'axios'

export default {
  namespaced: true,
  state () {
    return {
      list: []
    }
  },
  mutations: {
    updateList (state, newList) {
      state.list = newList
    }
  },
  actions: {
    async getList (context) {
      const res = await axios.get('http://localhost:3000/linkmans')
      context.commit('updateList', res.data)
    }
  },
  getters: {}
}
