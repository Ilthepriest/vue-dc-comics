<template>
  <div id="app">
    <div class="container">
      <SiteHeader/>
    </div>
      <SiteJumbotron />
      <SiteMain/>
      <SiteInformation/>
      <SiteFooter/>
  </div>
</template>

<script>
import SiteHeader from '@/components/HeaderComponent.vue'
import SiteJumbotron from '@/components/JumbotronComponent.vue'
import SiteMain from '@/components/MainComponent.vue'
import SiteInformation from '@/components/InformationComponent.vue'
import SiteFooter from '@/components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    SiteHeader,
    SiteJumbotron,
    SiteMain,
    SiteInformation,
    SiteFooter
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container{
  width: 70%;
  margin: 0 auto;
}
</style>
