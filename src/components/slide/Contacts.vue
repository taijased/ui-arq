<template lang="pug">
  .wrapper
    .wrapper__container
      .temp
        .info-block(style="width: 400px")
          .content
            .content__name Дополняйте реальность
            .content__description Оставайтесь в курсе последних новостей, никакого спама! Только свежайшие новости проекта из первых рук.
          Subscribe
</template>

<script>
import Subscribe from '../form/Subscribe';
export default {
  components: {
    Subscribe,
  }
}
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
