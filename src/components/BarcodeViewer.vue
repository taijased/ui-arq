<template lang="pug">
    .viewer
        a-scene(v-if='visible', embedded='', vr-mode-ui='enabled: false', arjs='sourceType: webcam; debugUIEnabled: false; detectionMode: mono_and_matrix; matrixCodeType: 3x3;')
            a-assets
                a-asset-item#animated-asset(src='https://raw.githubusercontent.com/nicolocarpignoli/nicolocarpignoli.github.io/master/ar-playground/models/CesiumMan.gltf')
                a-marker-camera(type='pattern', url='https://arq.su/pattern-mark.patt')
                    a-entity(animation-mixer='', gltf-model='#animated-asset', scale='2 2 2')
                a-entity(camera='')
        .au-media(v-else)
            img(src="../assets/viewer/aumedia.svg")
            img(src="../assets/viewer/close.svg")
            img(src="../assets/viewer/arq-family.svg")
            .custom-progress
                span
            span Подождите, загружаем



</template>

<script>
export default {
    data() {
        return {
            visible: false
        }
    },
    beforeCreate() {
        setTimeout(() => {
            this.visible = true
        }, 3000);
    }
}
</script>

<style lang="stylus" scoped>
.viewer
    width 100vw
    height 100vh
    overflow hidden

    .au-media
        width 100%
        height 100%
        display flex
        flex-direction column
        justify-content center
        align-items center

        span 

            font-family: 'TT Norms Medium';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
            /* identical to box height */
            text-align: center;
            color: #000000;
        .custom-progress
            width 280px
            height 20px
            border: 2px solid #4737D6;
            box-sizing: border-box;
            margin 16px 0
            border-radius: 10px;
            display flex
            flex-direction row
            justify-content flex-start
            align-items center
            span
                margin 0 8px
                width 1px
                height 8px
                background: #4737D6;
                border-radius: 10px;
                animation-duration: 3s;
                animation-name: slidein;


@keyframes slidein {
  from {
    width: 1px; 
  }
  to {
    width: 263px;
  }
}


</style>
