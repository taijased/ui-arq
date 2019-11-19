<template lang="pug">
  .wrapper
    .wrapper__container
      .temp
        .info-block
          .content
            .content__name ARQ Viewer
            //- .content__description Для просмотра ваших проектов используйте ARQ Viewer. Простое приложение которое синхронизирует все ваши проекты созданные в ARQ Editor.
            .content__description Use the ARQ Viewer to view your projects. A simple application that contains all your projects created in the ARQ Editor.
            //-   .primary-btn 
            //-     img(src="../../assets/apple-logo.svg")
            //-     span Скачать
            //-   .primary-btn 
            //-     img(src="../../assets/play-market-logo.svg")
            //-     span Скачать
            //- .primary-btn(style="width: 210px;margin-top: 5px;")
            //-     img(src="../../assets/web.svg")
            //-     span WebAR Скоро
          FreeBtn

      img.image-block(src="../../assets/screen3.png")  
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
  bottom 5vw
  right 20vw
  z-index 2
  width 30vw
.controls
  width 260px
  display flex
  flex-direction column
  justify-content center
  align-items center
  &__mobile
    width 100%
    display flex
    flex-direction row
    justify-content space-between
    align-items center
</style>
