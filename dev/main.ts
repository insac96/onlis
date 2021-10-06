import Vue from 'vue'
import App from './App.vue'
import Onlis from '../src'

Vue.use(Onlis)

new Vue({
  el: '#app',
  render: (h) => h(App),
})
