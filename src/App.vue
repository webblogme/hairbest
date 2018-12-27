<template>
  <div id="app">
    <router-link to="/" title="xxx">Go home</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  text-align: center;
}
</style>
