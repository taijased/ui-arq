<template lang="pug">
    .header-empty
        .navigation
            img.logo(src="../assets/head_logo.svg")
    
</template>

<style lang="stylus" scoped>


.header-empty
    position fixed
    top 0
    left 0
    right 0
    z-index 10
    display flex
    flex-direction row
    align-items center
    justify-content space-between
    height $header-height
    background: #FFFFFF;
    padding 0 5vw
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
    .navigation
        height @height
        display flex
        flex-direction row
        align-items center
        justify-content center
        .logo
            width 160px
            height 50px

</style>    
