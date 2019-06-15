<template lang="pug">
  .home
    .info-block
      .info-block__name Платформа ARQ
      .info-block__description Создайте свою дополненную реальность с помощью платформы ARQ.
      .tryfree-btn Попробовать бесплатно
    img.image-block(src="../../assets/screen2.svg")  
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.home
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
    height 75vh

</style>
