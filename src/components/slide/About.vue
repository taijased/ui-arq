<template lang="pug">
  .wrapper
    .wrapper__container
      .temp
        .info-block
          .content
            .content__name ARQ Editor
            //- .content__description Это простой инструмент для создания собственного приложения AR. Редактор предназначен для обычных пользователей, без знаний программирования. Загрузите свою 3D модель, откройте ARQ Viewer на вашем смартфоне и демонстрируйте ваше творчество в реальном мире.  
            .content__description Editor is a simple tool for creating AR experiences. The editor is intended for ordinary users, without programming knowledge. Upload your 3D model, open the ARQ Viewer on your smartphone and show your creativity in the real world.

          FreeBtn
      img.image-block(src="../../assets/screen2.jpg")  
</template>

<script>
import FreeBtn from '../FreeBtn';
export default {
  components: {
    FreeBtn
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">

.image-block
  position absolute
  bottom 0
  right 0
  z-index 2
  width 70vw

</style>
