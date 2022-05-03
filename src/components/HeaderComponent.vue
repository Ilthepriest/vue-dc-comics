<template>
    <header>
      <img src="@/assets/img/dc-logo.png" alt="">
      <ul>
          <li><a href="#">Characters</a></li>
          <li><a href="#" class="active">Comics</a></li>
          <li><a href="#">Movies</a></li>
          <li><a href="#">Tv</a></li>
          <li><a href="#">Games</a></li>
          <li><a href="#">Collectibles</a></li>
          <li><a href="#">Videos</a></li>
          <li><a href="#">Fans</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Shop</a></li>
      </ul>
  </header>
  
</template>

<script>
export default {
  name: 'SiteHeader'
 
}
</script>

<style scoped lang="scss">
header{
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ul{
        display: flex;
        li{
            list-style: none;
            padding: 0 10px;
            a{
                text-decoration: none;
                padding-bottom: 55px;
                color: #4E565F;
                font-weight: 600;
                text-transform: uppercase;
                &.active{
                    color: #0282F9;
                    border-bottom: 3px solid #0282F9;
                }
            }
        }
    }
}
</style>