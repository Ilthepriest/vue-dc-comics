<template>
    <div class="content text-center">
        <div class="container">
            <p>Content goes here</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'SiteMain'
 
}
</script>

<style lang="scss" scoped>
    .content{
        background-color: #1C1C1C;
        height: 135px;
        p{
            color: white;
            font-weight: 600;
        }
    }
    .text-center{
            display: flex;
            align-items: center;
        }
</style>