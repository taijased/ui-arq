<template lang="pug">
  .wrapper
    .wrapper__container
      .temp
        .info-block
          .content
            .content__name ARQ Viewer
            .content__description Для просмотра ваших проектов используйте ARQ Viewer. Простое приложение которое синхронизирует все ваши проекты созданные в ARQ Editor.
          .controls
            .controls__mobile
              .primary-btn 
                img(src="../../assets/apple-logo.svg")
                span Скачать
              .primary-btn 
                img(src="../../assets/play-market-logo.svg")
                span Скачать
            .primary-btn(style="width: 250px;margin-top: 5px;")
                img(src="../../assets/web.svg")
                span WebAR Скоро

    //- img.image-block(src="../../assets/screen3.svg")  
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">

.image-block
  position absolute
  bottom 40px
  right 286px
  z-index 2
  height 75vh
.controls
  width $info-block-w - 40px
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
  .web-btn
    margin-top 5px
    width 100%

</style>
