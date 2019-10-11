<template lang="pug">
    .free-block
      router-link(to="/privileges")
        .free-btn Получить доступ
    //- a(href="https://platform.arq.su/")
    //-   .primary-btn Попробовать бесплатно
    


</template>

<script>
import { mapActions} from 'vuex';

export default {
  methods: {
    ...mapActions({
      updateRegin: "main/updateRegin",
      setSlideIndex: "main/setSlideIndex",

    }),
    clickBtn() {
      this.updateRegin()
      this.setSlideIndex(0)
    }
  }
}
</script>

<style lang="stylus">
.free-block
  a
    color: inherit;
    text-decoration: inherit;
  .free-btn
    width 171px
    height 40px
    white-space: nowrap;
    font-family: 'TT Norms Medium';                
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */
    letter-spacing: -0.288236px;
    color: #FFFFFF;
    background: $purple;
    border-radius: 6px;
    opacity 1
    transition: opacity .3s
    display flex
    flex-direction: row
    justify-content: center
    align-items: center
    user-select none
    &:hover
      cursor pointer
      opacity 0.7
      transition: opacity .3s
      

</style>
