import Vue from 'vue'
import App from './App.vue'
import jQuery from 'jquery'

$ = window.jQuery = window.$ = jQuery

new Vue({
  el: 'body',
  components: { App }
})
