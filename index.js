import Vue from 'vue'
import VueKeynote from 'vue-keynote'

import Keynote from './Keynote.vue'

Vue.use(VueKeynote)
Vue.config.keyCodes = {
  f11: 122,
}

new Vue({
  el: '#app',
  ...Keynote
})
