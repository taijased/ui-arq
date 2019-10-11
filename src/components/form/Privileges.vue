<template lang="pug">
    .privileges
        HeaderEmpty
        .privileges__main
            .privileges__left
                SignIn
            img.image-block(src="../../assets/screen2.jpg")
        .privileges__mobile
            .privileges-mobile-form      
                SignIn
</template>
<script>

import SignIn from './SignIn';
import HeaderEmpty from '../HeaderEmpty';

export default {
    components: {
        SignIn,
        HeaderEmpty
    }
};
</script>
<style lang="stylus">



@media screen and (min-width: 1000px) 
    .privileges__main
        height 100vh
        width 100vw
        overflow hidden
        display flex
        flex-direction row
        justify-content flex-start
        align-items center
    .privileges__left
        margin 0 1.5 * $pd !important
        width 340px
        height 386px
    .privileges__mobile
        display none
@media screen and (max-width: 1000px) 
  .privileges__main
    display none
  .privileges__mobile
    height 100vh
    width 100vw
    display flex
    flex-direction row
    justify-content center
    align-items center
    .privileges-mobile-form        
        width 340px
        height 386px


.image-block
    position absolute
    bottom 22px
    right 0
    z-index 2
    width 60vw


    

</style>
