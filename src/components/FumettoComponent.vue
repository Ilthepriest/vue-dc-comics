<template>
  <div class="product">
    <img :src="thumb" alt="" />

    <div class="titolo-fumetto">
      <h6>{{ series }}</h6>
      <!-- <span>{{fumetto.type}}</span> <span>{{fumetto.price}}</span> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "SiteFumetto",
  props: {
    thumb: String,
    series: String,
  },
};
</script>

<style lang="scss" scoped>
.product {
  max-width: 192px;
}
h6 {
  color: white;
  text-align: start;
}
span {
  color: white;
  text-align: start;
}
</style>