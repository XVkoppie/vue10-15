
import Vue from 'vue'
import Vuex from 'vuex'
import linked from './module/linked'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    linked
  }
})
