<template lang="pug">
  .index
    Header
    Regin(v-if="getRegin")
    CustomSwiper(v-if="!getRegin")
    Footer(v-if="!getRegin")
</template>

<script>
import { mapGetters} from 'vuex';

import CustomSwiper from './CustomSwiper';
import Header from './Header';
import Footer from './Footer';
import Regin from './Regin';


export default {
  computed: {
    ...mapGetters({
      getRegin: "main/getRegin"
    }),
  },
  components: {
    CustomSwiper,
    Header,
    Footer,
    Regin
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.index
  background rgba(61, 69, 238, 1);
  overflow hidden
</style>
