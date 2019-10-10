<template lang="pug">
  div
    .index
      Header
      CustomSwiper
      Footer
      ModalOK
    .mobile-index
      MobileVersion
</template>


<script>
import ModalOK from './modal/ModalOK';
import CustomSwiper from './CustomSwiper';
import Header from './Header';
import Footer from './Footer';
import MobileVersion from './mobile/MobileVersion';

export default {
  components: {
    CustomSwiper,
    Header,
    Footer,
    ModalOK,
    MobileVersion
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">


.index
  display block
  background rgba(61, 69, 238, 1);
  overflow hidden
@media screen and (max-width: 1000px) 
  .index
    display none
  .mobile-index
    display block



</style>
