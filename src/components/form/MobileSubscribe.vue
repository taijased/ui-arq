<template lang="pug">
    .mobile-subscribe
        el-form(label-position='left', :model='ruleForm', :rules="rules", status-icon, ref="ruleForm", class="creator-form")
            el-form-item(prop="email", :class="{'not-empty': ruleForm.email !== ''}")
                el-input#subscribe-input(v-model='ruleForm.email', autocomplete="off", maxlength="30")
                .label Email
        .mobile-subscribe__btn(@click="submitForm()") Отправить
</template>
<script>
import ARQService from '../../api/ARQService';
import { mapGetters, mapActions} from 'vuex';

export default {
    data() {
        var validateEmail = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("Обязательное поле"));
            } else {
                let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                const isTrue = re.test(value);
                if (!isTrue) {
                    callback(new Error("Введите в формате. Пример: name@mail.ru"));
                } else {
                    this.disabledBtn = true
                    callback();
                }
            }
        };
        return {
            disabledBtn: false,
            ruleForm: {
                email: "",
            },
            rules: {
                email: [{ validator: validateEmail, trigger: "blur" }],
            },
        };
    },
    methods: {
      ...mapActions({
        updateModalSubscribe: "main/updateModalSubscribe",
      }),
        submitForm() {
            this.$refs.ruleForm.validate((valid) => {
                if (valid) {
                    new Promise((resolve, reject) => {
                      ARQService.subscribe(this.ruleForm.email)
                        .then(response => {
                            this.updateModalSubscribe()
                            resolve(response)
                        })
                        .catch(reject)
                })
                } else {
                    return false;
                }
            });
        }

    },
};
</script>
<style lang="stylus">


.mobile-subscribe

    height 170px
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
    &__btn 
        width 306.64px !important
        height 57px !important
        font-family: 'TT Norms Medium';                
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        /* identical to box height */
        letter-spacing: -0.288236px;
        white-space: nowrap;
        background: $purple;
        border-radius: 6px;
        display flex
        flex-direction: row
        justify-content: center
        align-items: center
        user-select none
        color white
        // opacity 1
        transition: opacity .3s
        &:hover
            cursor pointer
            opacity 0.7
            transition: opacity .3s

</style>
