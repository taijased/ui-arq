<template lang="pug">
  .viewer
    .info-block
      .info-block__name ARQ Viewer
      .info-block__description Для просмотра ваших проектов используйте ARQ Viewer. Простое приложение которое синхронизирует все ваши проекты созданные в ARQ Editor.
      .tryfree-btn Попробовать бесплатно
    img.image-block(src="../../assets/screen3.svg")  
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.viewer
  height 100vh
  width 100vw
  background white
  display flex
  flex-direction row
  justify-content flex-start
  align-items center
  .image-block
    position absolute
    bottom 40px
    right 286px
    z-index 2
    height 75vh

</style>
