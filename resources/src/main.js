import Vue from 'vue'
import vuetify from './plugins/vuetify'
import './assets/tailwind.css'
import { createInertiaApp } from '@inertiajs/inertia-vue'

Vue.config.productionTip = false

createInertiaApp({
  resolve: name => require(`./pages/${name}`),
  setup ({ el, App, props }) {
    new Vue({
      vuetify,
      render: h => h(App, props),
      data () {
        return {
          showAddDialog: false
        }
      }
    }).$mount(el)
  }
})
