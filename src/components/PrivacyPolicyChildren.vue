<template lang="pug">
    .privacy-policy
        HeaderEmpty
        .privacy-title Privacy Policy
        .content This privacy policy describes how our company Delovye Deti collects and uses information obtained through our mobile applications.
        .privacy-subtitle Our applications do not collect user personal information from children.
        .content Downloading and using our applications does not require the provision of any information. We do not collect information about you or your device, except for non-personal information about the duration of use of the application and how the application was used, for example, about actions performed in the application.
        .content We comply with the Children's Online Privacy Protection Act. Our mobile apps comply with the Children's Online Privacy Protection Act ("COPPA"). We do not knowingly collect personal information from children under the age of 13 years, and if, in the case when the user identifies himself as a child under the age of 13 through a request to the support service or through any feedback, we will not collect, store or use, and we will delete any personal information of such a user.
        .privacy-subtitle Contact Us
        .content If you have any questions or concerns regarding this Privacy Policy, please send us an email at delovyedeti@gmail.com


</template>


<script>
import HeaderEmpty from './HeaderEmpty';
export default {
    components: {
        HeaderEmpty
    }

}
</script>

<style lang="stylus" scoped>
.privacy-policy
    padding $header-height 15vw
    .privacy-title
        margin-bottom 20px
        font-family 'TT Norms Medium'
        font-family: TT Norms;
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 38px;
        text-align: center;
        margin-top 50px
    .content
        font-family 'TT Norms Regular'
        font-style: normal;
        font-weight: normal;
        font-size: 22px;
        line-height: 32px;
        letter-spacing: -0.658824px;
        color: #000000;
    .privacy-subtitle
        margin 20px 0
        font-family 'TT Norms Medium'
        font-style: normal;
        font-weight: normal;
        font-size: 22px;
        line-height: 32px;
        letter-spacing: -0.658824px;
        color: #000000;

        

</style>
