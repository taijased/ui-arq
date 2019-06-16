<template lang="pug">
  .wrapper
    .wrapper__container
      .temp
        .info-block
          .content
            .content__name Регистрация 
              a.enter(href="https://google.com") Войти
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
.enter
  color: inherit;
  text-decoration: inherit;
  margin-left 20px
  opacity 0.3
</style>
