const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  scss: {
    additionalData: `@import "~@/assets/sass/style.scss";`
  }

})
