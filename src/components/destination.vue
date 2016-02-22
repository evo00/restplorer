<template>
<div class="column">
  <div class="ui segments">
    <h4 class="ui segment">Result</h4>
    <div class="ui segment reward">
      <pre><code class="language-json" v-text="reward | json"></code></pre>
      <div class="ui dimmer inverted">
        <div class="ui loader"></div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Prism from 'prismjs'
import '../../node_modules/prismjs/components/prism-json.js'

export default {
  data() {
    return {
      rucksack: {},
      reward: {}
    }
  },

  events: {
    'rucksackPacked': function(rucksack) {
      this.rucksack = rucksack
      this.walkTo()
    }
  },

  methods: {
    mapHeaders: function() {
      var headers = {}

      this.rucksack.headers.map(function(header) {
        headers[header.key] = header.value
      })

      return headers;
    },

    mapBody: function() {
      var body = {}

      this.rucksack.body.map(function(content) {
        body[content.key] = content.value
      })

      return body;
    },

    walkTo: function() {
      this.$http({
        url: this.rucksack.endpoint,
        method: this.rucksack.method,
        headers: this.mapHeaders(),
        data: this.mapBody(),
        beforeSend: function() {
          $('.reward').dimmer('show')
        }
      })
      .then(function(response) {
        this.$set('reward', response.data)
        this.$nextTick(function() {
          Prism.highlightAll()
          $('.reward').dimmer('hide')
        })
      }, function(response) {
        console.log(response)
      })
    }
  }
}
</script>

<style>
@import url('../../node_modules/prismjs/themes/prism.css');

.reward {
  padding: 0 !important;
}

.reward > pre {
  margin: 0;
}
</style>
