<template>
  <div id="app">
    <SiteHeader/>
  </div>
</template>

<script>
import SiteHeader from '@/components/HeaderComponents.vue'

export default {
  name: 'App',
  components: {
    SiteHeader
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}
</style>
