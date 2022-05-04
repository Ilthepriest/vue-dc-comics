<template>
    <div class="col">
          <div class="product">
            <img :src="thumb" alt=""/>

            <div class="titolo-fumetto">
              <h6>{{ series }}</h6>
              <!-- <span>{{fumetto.type}}</span> <span>{{fumetto.price}}</span> -->
            </div>
          </div>
        </div>
</template>

<script>
export default {
  name: 'SiteFumetto',
  props:{
      thumb: String,
      series: String
  }
}
</script>

<style lang="scss"  >
  
</style>