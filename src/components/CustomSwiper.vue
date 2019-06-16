<template lang="pug">
  swiper(:options="swiperOption", ref="mySwiper")
    swiper-slide
      Home
    swiper-slide
      About
    swiper-slide
      Viewer
    swiper-slide
      ForSomeone
    swiper-slide
      Contacts
    .swiper-pagination(slot="pagination")
</template>
<script>
import { mapActions, mapGetters} from 'vuex';

import About from "./slide/About";
import Home from "./slide/Home";
import Viewer from './slide/Viewer';
import ForSomeone from './slide/ForSomeone';
import Contacts from './slide/Contacts';

export default {
  data() {
    return {
      swiperOption: {
        direction: "vertical",
        effect: "fade",
        mousewheel: true,
        // loop: true,
        navigation: {
          nextEl: ".bottom-navigation",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        onSlideChangeEnd() {
          this.onSwipe()
        }
      }
    };
  },
  mounted() {
    this.swiper.on('slideChange',() => {
      this.onSwipe(this)
    });
  },
  computed: {
    ...mapGetters({
      getSlideIndex: "main/getSlideIndex",
    }),
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    ...mapActions({
      setSlideIndex: "main/setSlideIndex",
      setSwiper: "main/setSwiper",
    }),
    onSwipe(varuable) {
      this.setSlideIndex(varuable.swiper.activeIndex)
    }
  },
  created() {
    this.$nextTick(() => {
      this.setSwiper(this.$refs.mySwiper.swiper)
    })
  },
  components: {
    Home,
    About,
    Viewer,
    ForSomeone,
    Contacts
  }
};
</script>
<style lang="stylus">

.swiper-container {
  height: 100vh
}
.swiper-slide {
  height: 100vh
  background: white;
}
.swiper-pagination-bullets {
  left: 0 !important;
  top: 40% !important;
  width 30px !important;
}
.swiper-pagination-bullet {
  width: 10px !important;
  height: 2px !important;
  border-radius: 0 !important;
  background: rgba(0, 0, 0, 0.3) !important;
  opacity: 1 !important;
  transition: width 0.3s;
  margin: 11px 0 !important;
}
.swiper-pagination-bullet-active {
  width: 30px !important;
  background: #3d45ee !important;
  transition: width 0.3s;
}
.swiper-slide-active > .container {
  display: block !important;
}
.swiper-slide-prev > .container {
  display: none !important;
}
.swiper-slide-next > .container {
  display: none !important;
}

</style>
