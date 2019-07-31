<template lang="pug">
  .index
    Header
    CustomSwiper
    Footer
    ModalOK
</template>


<script>
import ModalOK from './modal/ModalOK';
import CustomSwiper from './CustomSwiper';
import Header from './Header';
import Footer from './Footer';

export default {
  components: {
    CustomSwiper,
    Header,
    Footer,
    ModalOK
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.index
  background rgba(61, 69, 238, 1);
  overflow hidden
</style>
