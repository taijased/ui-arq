<template lang="pug">
    el-dialog(:visible.sync='visible', width='30%', top="30vh")
        .modalok
            //- .modalok__title Спасибо, что вы с нами!
            .modalok__title Thank you for being with us!
            .primary-btn(@click="updateModalSubscribe") OK

</template>

<script>
import { mapGetters, mapActions} from 'vuex';


export default {
    computed: {
        ...mapGetters({
           getModalSubscribe: "main/getModalSubscribe",
        }),
        visible: {
            get() {
                return this.getModalSubscribe
            },
            set() {
                this.updateModalSubscribe()
            }
        }
    },
    methods: {
        ...mapActions({
            updateModalSubscribe: "main/updateModalSubscribe",
        }),
    }
}
</script>

<style lang="stylus">


.modalok
    width 100%
    height 100%
    display flex
    flex-direction column
    align-items center
    align-items center
    &__title 
        font-style: normal;
        font-weight: 500;
        font-size: $h1;
        line-height: 57px;
        letter-spacing: -0.988236px;
        color: #000000;
        white-space nowrap
        margin-bottom 20px
</style>
