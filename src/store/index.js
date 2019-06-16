import Vue from 'vue'
import Vuex from 'vuex'
import form from './form'
import main from './main'


Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    main
  }
})