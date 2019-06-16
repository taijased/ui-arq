<template lang="pug">
    .primary-btn(@click="clickBtn") Попробовать бесплатно
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

.primary-btn
  white-space: nowrap;
  font-family: 'TT Norms Medium';                
  font-style: normal;
  font-weight: 500;
  font-size: $h3;
  letter-spacing: -0.452942px;
  color: #FFFFFF;
  background: $purple;
  border-radius: 6px;
  padding 10px 25px
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
  img 
    width 18px
    height 18px
    margin-right 8px

</style>
