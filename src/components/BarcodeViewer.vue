<template lang="pug">

    <div class="viewer">
        <a-scene v-if='visible' embedded vr-mode-ui="enabled: false" arjs="sourceType: webcam; debugUIEnabled: false; detectionMode: mono_and_matrix; matrixCodeType: 3x3;">
            <a-assets>
                <a-asset-item id="animated-asset" src="https://raw.githubusercontent.com/nicolocarpignoli/nicolocarpignoli.github.io/master/ar-playground/models/CesiumMan.gltf"></a-asset-item>
            </a-assets>
            <a-marker type='pattern' url='pattern-mark.patt'>
                <a-box position='0 0.5 0' color='black'></a-box>
                //- <a-entity animation-mixer='' gltf-model="#animated-asset" scale="2 2 2">
                //- </a-entity>
            </a-marker>
            <a-entity camera></a-entity>
        </a-scene>

        <div v-else class="au-media">
            <img src="../assets/viewer/aumedia.svg" alt="">
            <img src="../assets/viewer/close.svg" alt="">
            <img src="../assets/viewer/arq-family.svg" alt="">
            <div class="custom-progress">
                <span></span>
            </div>
            <span>Подождите, загружаем</span>
        </div>
    </div>

    //- .viewer
    //-     .au-media(v-if='!visible')
    //-         img(src='../assets/viewer/aumedia.svg', alt='')
    //-         img(src='../assets/viewer/close.svg', alt='')
    //-         img(src='../assets/viewer/arq-family.svg', alt='')
    //-         .custom-progress
    //-             span
    //-         span Подождите, загружаем
    //-     a-scene(v-else embedded='', debug='', vr-mode-ui='enabled: false', arjs='sourceType: webcam; debugUIEnabled: false; detectionMode: mono_and_matrix; matrixCodeType: 3x3;')
    //-         a-assets
    //-             a-asset-item#animated-asset(src='https://raw.githubusercontent.com/nicolocarpignoli/nicolocarpignoli.github.io/master/ar-playground/models/CesiumMan.gltf')
    //-         a-marker(type='pattern', url='pattern-mark.patt')
    //-             a-entity#anim-entity(gltf-model='#animated-asset', scale='2 2 2', animation-mixer='')
    //-         a-entity(camera='')
   

</template>

<script>
export default {
    data() {
        return {
            gltf: "#animated-asset",
            visible: false
        }
    },
    mounted() {


        // let arFrame = document.createElement('script')
        // arFrame.setAttribute('src', 'https://aframe.io/releases/0.9.2/aframe.min.js')
        // document.head.appendChild(arFrame)


        // let ar_Frame = document.createElement('script')
        // ar_Frame.setAttribute('src', 'https://raw.githack.com/jeromeetienne/AR.js/master/aframe/build/aframe-ar.min.js')
        // document.head.appendChild(ar_Frame)


        // let arFrameEx = document.createElement('script')
        // arFrameEx.setAttribute('src', 'https://raw.githack.com/donmccurdy/aframe-extras/master/dist/aframe-extras.loaders.min.js')
        // document.head.appendChild(arFrameEx)

    },
    beforeCreate() {
        setTimeout(() => {
            this.visible = true;
            console.log(document.getElementById("anim-entity"))
        }, 3000);
        setTimeout(() => {
            console.log(document.getElementById("anim-entity"))
        }, 5000);
    }
}
</script>

<style lang="stylus">
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
