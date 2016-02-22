import Vue from 'vue'
import VueResource from 'vue-resource'
import Prism from 'prismjs'
import App from './App.vue'

Vue.use(VueResource)

new Vue({
  el: 'body',
  components: { App },
  ready: function() {
    jQuery('.ui.radio.checkbox').checkbox()
    Prism.highlightAll()
  }
})
