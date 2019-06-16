<template lang="pug">
    el-dialog(:visible.sync="visible", :show-close="false", width="30%")
        .modalok
            .modalok__title Спасибо, что вы с нами!
            .primary-btn OK
</template>

<script>
import { mapGetters, mapActions} from 'vuex';


export default {
    computed: {
        ...mapGetters({
           getModalStatus: "modal/getModalStatus",
        }),
        visible: {
            get() {
                return this.getModalStatus
            },
            set() {
                this.updateModalStatus()
            }
        }
    },
    methods: {
        ...mapActions({
            updateModalStatus: "modal/updateModalStatus",
        }),
    }
}
</script>

<style lang="stylus">
.el-dialog__header
    display none !important
.el-dialog__body
    padding 0 !important
.modalok
    width 100%
    height 100%
    display flex
    flex-direction column
    align-items flex-start
    &__title 
        margin-left 40px
        margin-top 30px
        font-style: normal;
        font-weight: 500;
        font-size: 38px;
        line-height: 57px;
        letter-spacing: -0.988236px;
        color: #000000;
</style>
