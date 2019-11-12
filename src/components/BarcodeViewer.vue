<template >
    <div class="viewer">
        <a-scene embedded vr-mode-ui="enabled: false" arjs="sourceType: webcam; debugUIEnabled: false; detectionMode: mono_and_matrix; matrixCodeType: 3x3;">
        <a-assets>
            <a-asset-item id="animated-asset" src="https://raw.githubusercontent.com/nicolocarpignoli/nicolocarpignoli.github.io/master/ar-playground/models/CesiumMan.gltf"></a-asset-item>
        </a-assets>
        <a-marker-camera type='pattern' url='https://arq.su/pattern-mark.patt'>
            <a-entity
                animation-mixer
                gltf-model="#animated-asset"
                scale="2 2 2">
            </a-entity>
        </a-marker-camera>
        <a-entity camera></a-entity>
        </a-scene>
    </div>

</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.viewer
    width 100vw
    height 100vh
    overflow hidden


</style>
