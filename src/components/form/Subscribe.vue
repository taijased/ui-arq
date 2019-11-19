<template lang="pug">
    .subscribe
        el-form(label-position='left', :model='ruleForm', :rules="rules", status-icon, ref="ruleForm", class="creator-form")
            el-form-item(prop="email", :class="{'not-empty': ruleForm.email !== ''}")
                el-input#subscribe-input(v-model='ruleForm.email', autocomplete="off", maxlength="30")
                .label Email
        //- .primary-btn.sub-btn(@click="submitForm()") Оставить почту
        .primary-btn.sub-btn(@click="submitForm()") Send
</template>
<script>
import ARQService from '../../api/ARQService';
import { mapGetters, mapActions} from 'vuex';

export default {
    data() {
        var validateEmail = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("Required field"));
            } else {
                let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                const isTrue = re.test(value);
                if (!isTrue) {
                    callback(new Error("Type in the format. Example: name@mail.ru"));
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


.subscribe {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center
}
.sub-btn
    margin-top -17px
    margin-left 22px

</style>
