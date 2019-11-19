<template lang="pug">
    footer
        .footer-item(v-if="getSlideIndex !== 4", @click="nextSlide")
            .footer-item__hover
                <svg   width="28" height="44" viewBox="0 0 28 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="26" height="42" rx="13" stroke="black" stroke-width="2"/>
                    <rect class='shake-vertical' x="12.6" y="8.79999" width="2.8" height="7.33333" rx="1.4" fill="black"/>
                </svg>
                span Scroll down
        .footer-item(v-else, @click="topSlide")
            .footer-item__hover
                img( src="../assets/arrow-left.svg", class='shake-vertical')
                span Back to top
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
    height 5vw
    padding 0 5vw
    .footer-item
        display flex
        flex-direction row
        align-items center
        justify-content flex-end
        font-family: 'TT Norms Medium';               
        &__hover
            opacity 1
            transition opacity .3s
            &:hover
                opacity .7
                transition opacity .3s
                cursor pointer
            span 
                font-style: normal;
                font-weight: 500;
                font-size: $h3;
                line-height: 26px;
                letter-spacing: -0.6875px;
                color: #000000;
                margin-left 10px
            img 
                margin-top -20px
                width 28px
                height 44px
                
        .copyright
            font-style: normal;
            font-weight: 500;
            font-size: $h3;
            line-height: 26px;
            letter-spacing: -0.452942px;
            color: #000000;
        .email
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
