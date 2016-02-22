<template>
<div class="column">
  <form action="" class="ui form" @submit.prevent="packRucksack">
    <div class="field">
      <label for="method">Method</label>

      <div class="inline fields">
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="method" class="hidden" value="get" v-model="method" checked>
            <label>GET</label>
          </div>
        </div>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="method" class="hidden" value="post" v-model="method">
            <label>POST</label>
          </div>
        </div>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="method" class="hidden" value="put" v-model="method">
            <label><code>PUT</code></label>
          </div>
        </div>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="method" class="hidden" value="delete" v-model="method">
            <label><code>DELETE</code></label>
          </div>
        </div>
      </div>
    </div>

    <div class="field">
      <label for="">Endpoint URL</label>
      <input type="text" name="endpoint" v-model="endpoint">
    </div>

    <div class="field">
      <label for="">Headers</label>

      <div class="headers field">
        <div class="fields" v-for="header in headers">
          <div class="six wide field">
            <input type="text" name="headers[][key]" placeholder="Key" v-model="header.key">
          </div>
          <div class="eight wide field">
            <input type="text" name="headers[][value]" placeholder="Value" v-model="header.value">
          </div>
          <div class="two wide field">
            <button type="button" class="ui red basic icon button" @click="removeHeader(header)"><i class="remove icon"></i></button>
          </div>
        </div>
      </div>

      <button type="button" class="ui blue basic icon button" @click="addHeader(header)"><i class="plus icon"></i> Header</button>
    </div>

    <div class="field">
      <label for="">Body</label>

      <div class="body field">
        <div class="fields" v-for="content in body">
          <div class="six wide field">
            <input type="text" name="body[][key]" placeholder="Key" v-model="content.key">
          </div>
          <div class="eight wide field">
            <input type="text" name="body[][value]" placeholder="Value" v-model="content.value">
          </div>
          <div class="two wide field">
            <button type="button" class="ui red basic icon button" @click="removeBody(content)"><i class="remove icon"></i></button>
          </div>
        </div>
      </div>

      <button type="button" class="ui blue basic icon button" @click="addBody(content)"><i class="plus icon"></i> Body</button>
    </div>

    <div class="field">
      <button type="button" class="ui icon large green button" @click="packRucksack"><i class="send icon"></i> Go!</button>
    </div>
  </form>

  <app-footer></app-footer>
</div>
</template>

<script>
import AppFooter from './app-footer.vue'

export default {
  components: { AppFooter },

  data() {
    return {
      method: '',
      endpoint: '',
      headers: [],
      body: []
    }
  },

  methods: {
    addHeader: function(header) {
      this.headers.push({key: '', value: ''})
      //this.$dispatch('headersPacked', this.headers)
    },

    removeHeader: function(header) {
      this.headers.$remove(header)
    },

    addBody: function(content) {
      this.body.push({key: '', value: ''})
    },

    removeBody: function(content) {
      this.body.$remove(content)
    },

    packRucksack: function() {
      var data = {
        method: this.method,
        endpoint: this.endpoint,
        headers: this.headers,
        body: this.body
      }
      this.$dispatch('rucksackPacked', data)
    }
  }
}
</script>

<style></style>
