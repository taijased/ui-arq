<template lang="pug">
  .wrapper
    Header
    CustomSwiper
</template>

<script>
import CustomSwiper from './CustomSwiper';
import Header from './Header';
export default {
  components: {
    CustomSwiper,
    Header
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.wrapper
  background rgba(61, 69, 238, 1);
  overflow hidden
</style>
