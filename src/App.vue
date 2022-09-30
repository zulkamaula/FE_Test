<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from './views/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
  #app {
    margin: 0;
    padding: 0;
    background: rgb(207,212,236);
background: radial-gradient(circle, rgba(207,212,236,1) 0%, rgba(89,89,89,1) 100%);
  }
</style>
