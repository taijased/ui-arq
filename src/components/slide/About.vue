<template lang="pug">
  .about
    .info-block
      .info-block__name ARQ Editor
      .info-block__description Это простой инструмент для создания собственного приложения AR. Редактор предназначен для обычных пользователей, без знаний программирования. Загрузите свою 3D модель, откройте ARQ Viewer на вашем смартфоне и демонстрируйте ваше творчество в реальном мире. 
      .tryfree-btn Попробовать бесплатно
    img.image-block(src="../../assets/screen1.svg")  
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.about
  height 100vh
  width 100vw
  background white
  display flex
  flex-direction row
  justify-content flex-start
  align-items center
  
  .image-block
    position absolute
    bottom 0
    right 0
    z-index 2
    height 80vh

</style>
