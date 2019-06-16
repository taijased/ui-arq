<template lang="pug">
    el-dialog(:visible.sync='visible', width='25vw', top="30vh")
        .card
            .content
                .content__title Подтвердите почту
                .content__description На вашу почту направлено письмо со <br>ссылкой на подтверждение
            .primary-btn(@click="updateModalSignUp") Я не получил письмо

</template>

<script>
import { mapGetters, mapActions} from 'vuex';

export default {
    computed: {
        ...mapGetters({
           getModalSignUp: "main/getModalSignUp",
        }),
        visible: {
            get() {
                return this.getModalSignUp
            },
            set() {
                this.updateModalSignUp()
            }
        }
    },
    methods: {
        ...mapActions({
            updateModalSignUp: "main/updateModalSignUp",
        }),
    }
}
</script>

<style lang="stylus">
.el-dialog__body
    padding 20px 30px !important
.el-dialog__headerbtn .el-dialog__close:hover {
    color: $purple !important;
}
.card
    margin-top -40px
    width 100%
    height 100%
    display flex
    flex-direction column
    align-items center
    font-family: 'TT Norms Medium';
    .content    
        width 100%
        display flex
        flex-direction column
        align-items flex-start
        &__title
            font-style: normal;
            font-weight: 500;
            font-size: $h1;
            line-height: 57px;
            letter-spacing: -0.988236px;
            color: #000000;   
        &__description
            margin-bottom 20px
            font-style: normal;
            font-weight: 500;
            font-size: $h4;
            line-height: 21px;
            letter-spacing: -0.370589px;
            color: #000000;

</style>
