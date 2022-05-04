<template>
    <div class="col">
          <div class="product">
            <img :src="fumetto.src" alt=""/>

            <div class="titolo-fumetto">
              <h6>{{ titolo }}</h6>
              <!-- <span>{{fumetto.type}}</span> <span>{{fumetto.price}}</span> -->
            </div>
          </div>
        </div>
</template>

<script>
export default {
  name: 'SiteFumetto',
  props:{
      fumetto: Object
  }
}
</script>

<style lang="scss" scoped>

</style>