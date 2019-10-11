<template lang="pug">
    header
        .navigation
            img.logo(src="../assets/head_logo.svg")
            nav
                .nav-item(@click="clickNavItem(1)", :class="{'active': getSlideIndex === 1}") ARQ Editor
                .nav-item(@click="clickNavItem(2)", :class="{'active': getSlideIndex === 2}") ARQ Viewer
                .nav-item(@click="clickNavItem(3)", :class="{'active': getSlideIndex === 3}") Для кого?
                .nav-item(@click="clickNavItem(4)", :class="{'active': getSlideIndex === 4}") Оставайся на связи
        FreeBtn
        //- .primary-btn(v-else, @click="updateRegin") Назад
</template>

<script>

import { mapGetters, mapActions} from 'vuex';
import FreeBtn from './FreeBtn';

export default {
    computed: {
        ...mapGetters({
            getSlideIndex: "main/getSlideIndex",
            getSwiper: "main/getSwiper",
        }),
    },
    methods: {
        ...mapActions({
            updateRegin: "main/updateRegin",
        }),
        clickNavItem(index) {
            this.getSwiper.slideTo(index, 500, true);
        }
    },
    components: {
        FreeBtn
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


header 
    position fixed
    top 0
    left 0
    right 0
    z-index 10
    row-center()
    justify-content space-between
    height $header-height
    background: #FFFFFF;
    padding 0 5vw
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
    .navigation
        height @height
        row-center()
        .logo
            width 160px
            height 50px
        nav
            height @height
            margin-left 72px
            row-center()
            justify-content space-between
            .nav-item
                white-space: nowrap;
                height @height - 0.8px
                row-center()
                font-family: 'TT Norms Medium';                
                font-style: normal;
                font-weight: 500;
                font-size: $h3;
                letter-spacing: -0.452942px;
                color: #000000;
                margin-right 39px
                &.active
                    color: #000000;
                    opacity: 1
                    box-shadow: 0 6px 0 -2px $purple;
                &:hover
                    cursor pointer

</style>    
