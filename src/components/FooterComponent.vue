<template>
    <div>
        <div class="bg">
            <div class="container flex">
                <div class="list-footer flex">
                     <div class="ul-1">
                    <h4>Dc Comics</h4>
                    <ul>
                    <li>Characters</li>
                    <li>Comics</li>
                    <li>Movies</li>
                    <li>TV</li>
                    <li>Games</li>
                    <li>Videos</li>
                    <li>News</li>
                    </ul>
                    <h4>Shop</h4>
                    <ul>
                        <li>Shop DC</li>
                        <li>Shop DC Collectibles</li>
                    </ul>
                </div>
                <div class="ul-2">
                    <h4>Dc</h4>
                    <li>Term Of Use</li>
                    <li>Privacy policy(New)</li>
                    <li>Ad Choices</li>
                    <li>Advertising</li>
                    <li>Jobs</li>
                    <li>Subscriptions</li>
                    <li>Talent Workshops</li>
                    <li>CPSC Certificate</li>
                    <li>Ratings</li>
                    <li>Shop Help</li>
                    <li>Contact Us</li>
                </div>
                <div class="ul-3">
                    <h4>Sites</h4>
                    <ul>
                        <li>Dc</li>
                        <li>MAD Magazine</li>
                        <li>DC Kids</li>
                        <li>Dc Universe</li>
                        <li>Dc Power Visa</li>
                    </ul>
                </div>
                </div>
                <img class="logo-footer" src="@/assets/img/dc-logo-bg.png" alt="">
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <button class="button-sign">Sign-up Now!</button>
                <div class="icon-footer">
                    <p class="color-text">Follow us</p>
                    <img src="@/assets/img/footer-facebook.png" alt="">
                    <img src="@/assets/img/footer-periscope.png" alt="">
                    <img src="@/assets/img/footer-pinterest.png" alt="">
                    <img src="@/assets/img/footer-twitter.png" alt="">
                    <img src="@/assets/img/footer-youtube.png" alt="">
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
  name: 'SiteFooter'
}
</script>

<style lang="scss" scoped>
.bg{
    background-image: url(@/assets/img/footer-bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    height: 350px;
    .list-footer{
        margin-top: 25px;
    }
    .logo-footer{
       position: absolute;
       z-index: 0;;
       right: 0;
       top: -100px;
    }
    h4{
        color: white;
        text-transform: uppercase;
    }
    ul{
        padding-left: 0px;
    }
    li{
        list-style: none;
        color: #698195;
    }
    .flex{
        display: flex;
        justify-content: space-between;
        position: relative;
    }
}
.footer-bottom{
    background-color: #303030;
    height: 120px;
    z-index: 100;
    position: relative;
    display: flex;
    align-items: center;
    .color-text{
        color: #0282F9;
        width: fit-content;
        margin-right: 10px;
        font-weight: 600;
        text-transform: uppercase;
    }
    img{
        padding: 0 10px;
        width: 30px;
        height: 30px;
        
    }
    .icon-footer{
        display: flex;
        align-items: center;
    }
    .container{
        display: flex;
        justify-content: space-between;
    }
    .button-sign{
    padding: 15px;
    background-color: #303030;
    border: 2px solid #0282F9;
    color: white;
    font-weight: 600;
    text-transform: uppercase;
}
}
</style>