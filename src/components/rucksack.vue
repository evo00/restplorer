<template>
<div class="column">
  <form action="" class="ui form">
    <div class="grouped fields">
      <label for="method">Method</label>
      <div class="field">
        <div class="ui radio checkbox">
          <input type="radio" name="method" class="hidden" value="get">
          <label>GET</label>
        </div>
      </div>
      <div class="field">
        <div class="ui radio checkbox">
          <input type="radio" name="method" class="hidden" value="post">
          <label>POST</label>
        </div>
      </div>
    </div>

    <div class="field">
      <label for="">Endpoint URL</label>
      <input type="text" v-model="endpoint">
    </div>

    <div class="field">
      <label for="">Headers</label>

      <header-pack></header-pack>
      <header-pack></header-pack>
      <header-pack></header-pack>

      <button class="ui blue basic icon button"><i class="plus icon"></i> Header</button>
    </div>

    <div class="field">
      <label for="">Body</label>

      <body-pack></body-pack>

      <button class="ui blue basic icon button"><i class="plus icon"></i> Body Content</button>
    </div>

    <div class="field">
      <button class="ui green fluid button" type="submit">Go!</button>
    </div>
  </form>
</div>
</template>

<script>
import HeaderPack from './header-pack.vue'
import BodyPack from './header-pack.vue'

export default {
  components: { HeaderPack, BodyPack },
  data() {
    return {
      endpoint: 'aa'
    }
  }
}
</script>

<style></style>
