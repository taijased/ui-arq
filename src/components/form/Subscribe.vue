<template lang="pug">
    .subscribe
        el-form(label-position='left', :model='ruleForm', :rules="rules", status-icon, ref="ruleForm", class="creator-form")
            el-form-item(prop="email", :class="{'not-empty': ruleForm.email !== ''}")
                el-input(v-model='ruleForm.email', autocomplete="off")
                .label Email
        .primary-btn(@click="submitForm()", :class="{'disabled-btn': !disabledBtn}") Оставить почту
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
        submitForm() {
            // try {
            //     new Promise((resolve, reject) => {
            //         ARQService.subscribe(this.ruleForm.email)
            //             .then(response => {
            //                 console.log(response);
            //                 this.visible = true
            //                 resolve(response)
            //             })
            //             .catch(reject)
            //     })
            // } catch (error) {
            //     console.log(error + " | sendMail");
            // }
        }
    },
};
</script>
<style lang="less">


.subscribe {
    margin-top: 20px;
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center
}

@import url("../../style/animation.less");

@label-hover: rgba(0, 0, 0, 0.6);
@label-hover-default: rgba(0, 0, 0, 1);


.el-form {
    width: 100%;
}
.el-select {
    width: 100%;
}
.el-select-dropdown__item {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    font-family: "TT Norms Medium";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 35px;
    letter-spacing: -0.617648px;
    color: #000000;
}
.el-select-dropdown__item.selected {
    color: rgba(61, 69, 238, 1);
}

.el-select-dropdown {
    border: none;
}
.el-popper .popper__arrow, .el-popper .popper__arrow::after {
    display: none !important;
}
.el-select .el-input.is-focus .el-input__inner {
    border-color: @label-hover-default;
}
.el-select .el-input__inner:focus {
    border-color: @label-hover-default;
}
.el-input {
  input {
    width: 230px;
    margin: 0;
    border: 0;
    padding-left: 10px;
    padding-bottom: 5px;
    display: inline-block;
    vertical-align: middle;
    white-space: normal;
    background: none;
    line-height: 1;
    color: @label-hover-default;
    border-bottom: 1px solid @label-hover;
    transition: color @time-description, border-bottom @time-description;
    height: @input-height;
    line-height: 21px;
    font-size: 18px;
    border-radius: 0px;
    &:focus,
    &:hover {
      outline: 0;
      border-bottom: 1px solid @label-hover-default;
    }
  }
  &__suffix {
    right: 0;
  }
}
.el-form-item {
    margin: 0 !important;
    margin-right: 20px !important;
    font-family: "TT Norms Medium";
    font-style: normal;
    font-weight: normal;
  &:focus-within,
  &:hover {
    .label {
        font-size: @subtitle-size - 2;
        top: -5px;
        left: 0;
        transition: color @time-description, top @time-description,
            left @time-description, font-size @time-description;
        width: 300px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        letter-spacing: -0.411765px;
        color: #000000;
    }
  }
  .label {
    height: 15px;
    color: @label-hover;
    position: absolute;
    top: 50%;
    left: 15px;
    font-family: "TT Norms Medium";
    font-style: normal;
    font-weight: normal;
    line-height: 16px;
    font-size: 16px;
    transition: color @time-description, top @time-description,
      left @time-description, font-size @time-description;
    z-index: 2;
    transform: translate(0, -50%);
  }

  &__error {
    font-family: "TT Norms Medium";
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: #9a0f20;
  }
}
.not-empty {
  .label {
    font-size: @subtitle-size - 2;
    top: -5px;
    left: 0;
    transition: color @time-description, top @time-description,
      left @time-description, font-size @time-description;
    width: 300px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-family: "TT Norms Medium";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    letter-spacing: -0.411765px;
    color: #000000;
  }
}
.is-error {
  .el-input__inner {
    border-color: #9a0f20 !important;
  }
  .el-input__icon {
    color: #9a0f20 !important;
  }
}
.disabled-btn {
  user-select: none;
//   pointer-events: none;
  opacity: 0.7;
}

</style>
