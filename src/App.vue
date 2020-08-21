<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'
export default class extends Vue {}
</script>

<style soped='less'>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
html,
body,
#app {
  min-width: 1080px;
  height: 100%;
}
</style>
