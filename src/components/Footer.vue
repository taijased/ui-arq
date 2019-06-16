<template lang="pug">
    footer
        .footer-item
            img(v-if="getSlideIndex !== 4", @click="nextSlide" src="../assets/scroll.svg")
            img(v-else, @click="topSlide", src="../assets/scrollTop.svg")
        .footer-item(v-if="getSlideIndex === 4")
            .copyright © Copyright 2019 ARQ, LLC
        .footer-item(v-if="getSlideIndex === 4")
            .email 
                a(href="mailto:hello@arq.su") hello@arq.su
</template>

<script>
import { mapGetters} from 'vuex';

export default {
    computed: {
        ...mapGetters({
            getSlideIndex: "main/getSlideIndex",
            getSwiper: "main/getSwiper",
        }),
    },
    methods: {
        nextSlide() {
            this.getSwiper.slideNext(500, true)
        },
        topSlide() {
            this.getSwiper.slideTo(0, 500, true);
        }
    }
}
</script>

<style lang="stylus" scoped>

row-center()
    display flex
    flex-direction row
    align-items center

pos-center()
    display flex
    flex-direction row
    align-items center
    justify-content center

footer 
    position fixed
    bottom 0
    left 0
    right 0
    z-index 10
    row-center()
    justify-content space-between
    background: #FFFFFF;
    height 5vw
    padding 0 5vw
    .footer-item
        img 
            margin-top -7px
            width 180px
            height 35px
            opacity 1
            transition opacity .3s
            &:hover
                opacity .7
                transition opacity .3s
                cursor pointer
        .copyright
            font-family: 'TT Norms Medium';               
            font-style: normal;
            font-weight: 500;
            font-size: $h3;
            line-height: 26px;
            letter-spacing: -0.452942px;
            color: #000000;
        .email
            font-family: 'TT Norms Medium';               
            font-style: normal;
            font-weight: 500;
            font-size: $h3;
            line-height: 26px;
            letter-spacing: -0.452942px;
            color: #3D3BEE;
            a
                color: inherit;
                text-decoration: inherit;

  
  
       

</style>    
