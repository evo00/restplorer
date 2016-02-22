<template>
<app-header></app-header>

<div class="ui stackable two column grid container">
  <rucksack></rucksack>
  <destination></destination>
</div>
</template>

<script>
import SemanticUI from '../node_modules/semantic-ui-css/semantic.js'
import AppHeader from './components/app-header.vue'
import Rucksack from './components/rucksack.vue'
import Destination from './components/destination.vue'

export default {
  components: { AppHeader, Rucksack, Destination },
  data () {
    return {
      msg: 'Hello Vue!'
    }
  },

  events: {
    'rucksackPacked': function(e) {
      this.$broadcast('rucksackPacked', e)
    }
  }
}
</script>

<style>
@import url('../node_modules/semantic-ui-css/semantic.css');
</style>
