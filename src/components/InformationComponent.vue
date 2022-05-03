<template>
    <div class="information">
        <div class="container img-center">
            <div class="card">
                <img src="@/assets/img/buy-comics-digital-comics.png" alt="">
                <div class="text">Digital Comics</div>
            </div>
            <div class="card">
                <img src="@/assets/img/buy-comics-merchandise.png" alt="">
                <div class="text">Dc Merchandise</div>
            </div>
            <div class="card">
                <img src="@/assets/img/buy-comics-subscriptions.png" alt="">
                <div class="text">Subscription</div>
            </div>
            <div class="card">
                <img src="@/assets/img/buy-comics-shop-locator.png" alt="">
                <div class="text">Comic Shop Locator</div>
            </div>
            <div class="card">
                <img src="@/assets/img/buy-dc-power-visa.svg" alt="">
                <div class="text">Dc Power Visa</div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
  name: 'SiteInformation'
}
</script>

<style lang="scss" scoped>
.information{
    background-color: #0282F9;
    height: 150px;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 100;
    .text{
        color: white;
        margin-left: 10px;
        text-transform: uppercase;
    }
    .card{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .img-center{
        display: flex;
        justify-content: space-around;
    }
    img{
        height: 60px;
        
    }
}
</style>