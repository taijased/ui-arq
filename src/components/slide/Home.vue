<template lang="pug">
  .wrapper
    .wrapper__container
      .temp
        .info-block
          .content
            //- .content__name Платформа ARQ
            //- .content__description Создайте свою дополненную реальность с помощью платформы ARQ.
            .content__name ARQ Platform
            .content__description Create your AR experience using ARQ Platform
          FreeBtn
      img.image-block(src="../../assets/screen1.jpg")  
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
  width 60vw
</style>
