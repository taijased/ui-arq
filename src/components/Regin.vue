<template lang="pug">
  .wrapper
    .wrapper__container
      .temp
        .info-block
          .content
            .content__name Регистрация
          SignUp
</template>

<script>
import SignUp from './form/SignUp';
export default {
  components: {
    SignUp
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.temp
  height 330px
</style>
