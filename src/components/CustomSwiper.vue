<template lang="pug">
  swiper(:options="swiperOption")
    swiper-slide
      Home
    swiper-slide
      About
    swiper-slide
      Viewer
    .swiper-pagination(slot="pagination")
</template>
<script>

import About from "./slide/About";
import Home from "./slide/Home";
import Viewer from './slide/Viewer';

export default {
  data() {
    return {
      swiperOption: {
        direction: "vertical",
        effect: "fade",
        mousewheel: true,
        loop: true,
        navigation: {
          nextEl: ".bottom-navigation",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  },
  components: {
    Home,
    About,
    Viewer
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
