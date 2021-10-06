import Vue from 'vue'
import App from './App.vue'
import Onlis, { uiApp, uiMain, uiRow, uiCol, uiButton } from '../src/lib'

Vue.use(uiApp)
Vue.use(uiMain)
Vue.use(uiRow)
Vue.use(uiCol)
Vue.use(uiButton)

Vue.use(Onlis)

new Vue({
  el: '#app',
  render: (h) => h(App),
})
