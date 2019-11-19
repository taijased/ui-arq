<template lang="pug">
    .signup(v-loading="loading")
        el-form(label-position='left', :model='ruleForm', :rules="rules", status-icon, ref="ruleForm", class="creator-form")
            el-form-item(prop="companyName", :class="{'not-empty': ruleForm.companyName !== ''}")
                el-input(v-model='ruleForm.companyName', autocomplete="off")
                .label Сompany name
                //- .label Название Компании
            el-form-item(prop="name", :class="{'not-empty': ruleForm.name !== ''}")
                el-input(v-model='ruleForm.name', autocomplete="off")
                .label Full name
                //- .label Ваше имя
            el-form-item(prop="email", :class="{'not-empty': ruleForm.email !== ''}")
                el-input(v-model='ruleForm.email', autocomplete="off")
                .label E-mail
            el-form-item(prop="phone", :class="{'not-empty': ruleForm.phone !== ''}")
                el-input(v-model='ruleForm.phone', id="form_phone")
                .label Phone number

        //- .primary-btn(@click="submitForm()", style="width: 250px; margin: 0 30px;") Отправить
        .primary-btn(@click="submitForm()", style="width: 250px; margin: 0 30px;") Send
        .politic-privacy By pressing «Send» you accept conditions <br/>  of 
            router-link(to="/privacypolicy") Privacy policy. 
            span Also you agree to the processing of your personal data
        //- .politic-privacy Нажимая кнопку «Отправить», Вы принимаете<br/>  условия 
        //-     router-link(to="/privacypolicy") Политики конфиденциальности. 
        //-     span И соглашаетесь на обработку ваших персональных данных
</template>
<script>
import Inputmask from 'inputmask';
import ApiTrello from '../../api/ApiTrello.js'

export default {
    data() {
        var validateEmail = (rule, value, callback) => {
            if (value === "") {
                // callback(new Error("Обязательное поле"));
                callback(new Error("Required field"));
            } else {
                let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                const isTrue = re.test(value);
                if (!isTrue) {                 
                    callback(new Error("Type in the format. Example: name@mail.ru"));
                    // callback(new Error("Введите в формате. Пример: name@mail.ru"));
                } else {                 
                    callback();
                }
            }
        };
        var validateName = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("Required field"));
            } else {
                if (value !== "" && value.length < 30) {                 
                    callback();
                } else {                 
                    callback(new Error("Your name is too long"));
                    // callback(new Error("Ваше имя cлишком длинное"));
                }
            }
        };
        var validatePhone = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('Required field'));
                // callback(new Error('Обязательное поле'));
            } else {
                let re = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
                const isTrue =  re.test(value);
                if (!isTrue) {
                    callback(new Error('Wrong phone'));
                    // callback(new Error('Неправильный телефон'));
                } else {
                    callback();
                }
            }
        };
        return {
            loading: false,
            ruleForm: {
                companyName: "",
                email: "",
                name: "",
                phone: "",
            },
            rules: {
                email: [{ validator: validateEmail, trigger: "blur" }],
                companyName: [{ validator: validateName, trigger: "blur" }],
                name: [{ validator: validateName, trigger: "blur" }],
                phone: [{ validator: validatePhone, trigger: "blur" }],
            },
        };
    },
    methods: {
        submitForm() {
            this.$refs.ruleForm.validate((valid) => {
                if (valid) {
                    this.loading = true
                    const idBoard = "5da06c29c9fb3747328efc66"
                    const idList = "5da06c347ffb4d2ed8ffad98"
                    let description = `Имя: ${this.ruleForm.name}\n Телефон: ${this.ruleForm.phone}\n E-mail: ${this.ruleForm.email}`;
                    
                    let data = {
                        "name":`${this.ruleForm.companyName}`,
                        "desc": description,
                        "idBoard": idBoard,
                        "idList": idList,
                    }
                    new Promise((resolve, reject) => {
                        ApiTrello.post('', data)
                            .then(response => {
                                this.loading = false
                                this.$router.push('/')
                                resolve(response)
                            })
                            .catch(error => {
                                this.loading = false
                                this.$router.push('/')
                                reject(error)
                            })
                    })
                } else {
                    return false;
                }
            });

        }
    },
    mounted () {
        setTimeout(() => {
            var im = new Inputmask("+7 (999) 999-99-99");
            im.mask(document.getElementById('form_phone'));
        }, 2000);
    }
};
</script>

<style lang="stylus">

.signup
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
.politic-privacy
    margin-top 20px
    text-align center
    font-family 'TT Norms Medium'
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 17px;
    text-align: center;
    color: #000000;
    a 
        // text-decoration inherit
        color $purple
        &:hover
            cursor pointers
            opacity 0.8
</style>
