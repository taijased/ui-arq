<template lang="pug">
    .mobile-version
        .header
            img(src="../../assets/head_logo.svg", alt="logo")
            router-link(to="/privileges").get-editor-btn Gain access
        .card
            //- .card__title Платформа ARQ
            //- .card__subtitle Создайте свою дополненную реальность с помощью платформы ARQ.
            .card__title ARQ Platform
            .card__subtitle Create your AR experience using ARQ Platform
            img(src="../../assets/component-2.png", alt="alt")
        .card
            .card__title ARQ Editor
            //- .card__subtitle Это простой инструмент для создания собственного приложения AR. Редактор предназначен для обычных пользователей, без знаний программирования. Загрузите свою 3D модель, откройте ARQ Viewer на вашем смартфоне и демонстрируйте ваше творчество в реальном мире. 
            .card__subtitle Editor is a simple tool for creating AR experiences. The editor is intended for ordinary users, without programming knowledge. Upload your 3D model, open the ARQ Viewer on your smartphone and show your creativity in the real world.
            img(src="../../assets/component-1.png",style="margin-top: 42px;", alt="alt")

        .card
            .card__title ARQ Viewer
            //- .card__subtitle Для просмотра ваших проектов используйте ARQ Viewer. Простое приложение которое синхронизирует все ваши проекты созданные в ARQ Editor.
            .card__subtitle Use the ARQ Viewer to view your projects. A simple application that contains all your projects created in the ARQ Editor.
            router-link(to="/privileges").card__btn Gain access      

        .slider-card
            img(src="../../assets/education.svg", alt="museum")
            //- .slider-card__title Образование
            //- .slider-card__subtitle Сделайте ваши уроки более интерактивными. Демонстрируйте химические опыты, реализуйте физические явления прямо на вашем столе.
            .slider-card__title Education
            .slider-card__subtitle Make your lessons more interactive. Demonstrate chemical experiments, realize physical phenomena right on your desk

        .slider-card
            img(src="../../assets/manufactoring.svg", alt="museum")
            .slider-card__title Manufacturing
            .slider-card__subtitle Visualize the workflow for staff training. Showcase your designs to customers.
            //- .slider-card__title Производство
            //- .slider-card__subtitle Визуализируйте рабочий процесс с целью обучения персонала. Демонстрируйте ваши проекты заказчикам.


        .slider-card
            img(src="../../assets/museum.svg", alt="museum")
            .slider-card__title Museums and exhibitions
            .slider-card__subtitle Relive exhibits, create interactive exhibitions. Tell the story to visitors in a new way.
            //- .slider-card__title Музеи и выставки
            //- .slider-card__subtitle Оживляйте экспонаты, создавайте интерактивные выставки. Рассказывайте историю посетителям по новому.
            router-link(to="/privileges").card__btn(style="margin-top: 23px;") Gain access         

            
        .card
            //- .card__title Дополняйте реальность
            //- .card__subtitle Оставайтесь в курсе последних новостей. Только свежайшие новости проекта из первых рук.
            .card__title Make reality augmented
            .card__subtitle Stay up to date with the latest news. Only the latest project updates.
            MobileSubscribe
        .about-card
            .about-card__name © Copyright 2019 ARQ, LLC
            
            .about-card__email
                a(href="mailto:hello@arq.su") hello@arq.su

            img(src="../../assets/arrow-top.svg", alt="alt", width="34", height="34", @click="scrollToTop()")
            .about-card__name(@click="scrollToTop()") Back to top
            //- .about-card__name(@click="scrollToTop()") Вернуться наверх
</template>
<script>
import MobileSubscribe from '../form/MobileSubscribe';

export default {

    methods: {
        scrollToTop() {
            window.scrollTo({top: 0, behavior: 'smooth'});
        },
    },
    components: {
        MobileSubscribe
    }
};
</script>

<style lang="stylus" scoped>
.subscribe {
  margin-top: 20px;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center
}

.mobile-version
    width 100%
    height auto
    display flex
    flex-direction column
    justify-content center
    align-items center
    overflow-x hidden
    .header
        width 100%
        height 60px
        display flex
        flex-direction row
        justify-content space-between
        align-items center
        background: #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.199929);
        text-decoration: none;

        img 
            margin-left 22px
            width 111px
            height 42px
    .card
        margin-top 42px
        width 330px
        display flex
        flex-direction column
        justify-content center
        align-items center
        &__title 

            font-family: 'TT Norms Bold';                
            font-style: normal;
            font-weight: bold;
            font-size: 30px;
            line-height: 35px;
            text-align: center;
            letter-spacing: -0.617648px;
            color: #000000;
        &__subtitle
            font-family: 'TT Norms Regular';                
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 21px;
            text-align: center;
            letter-spacing: -0.370589px;
            color: #000000;
            margin-top 23px
            margin-bottom 42px

        &__btn 
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
            padding 20px 100px
            display flex
            flex-direction: row
            justify-content: center
            align-items: center
            user-select none
            color white
            text-decoration: none;
            
            // opacity 1
            transition: opacity .3s
            &:hover
                cursor pointer
                opacity 0.7
                transition: opacity .3s
            img 
                width 18px
                height 18px
                margin-right 8px
            a
                color: inherit;
                text-decoration: none;
                font-family: 'TT Norms Medium';   
    .slider-card
        margin-top 42px
        width 330px
        display flex
        flex-direction column
        justify-content center
        align-items center
        &__title
            margin-top 22px
            font-family: 'TT Norms Bold';                
            font-style: normal;
            font-weight: bold;
            font-size: 30px;
            line-height: 35px;
            text-align: center;
            letter-spacing: -0.617648px;
            color: #000000;
        &__subtitle 
            text-align center
            font-family: 'TT Norms Regular';                
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 21px;
            letter-spacing: -0.370589px;
            color: #000000;
            margin-top 23px
    .about-card
        margin 42px 0
        display flex
        flex-direction column
        justify-content center
        align-items center
        &__name 
            margin-top 12px
            font-family: 'TT Norms Medium';                
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 21px;
            letter-spacing: -0.370589px;
            color: #000000;
        &__email
            margin-top 22px
            margin-bottom 31px
            font-family: 'TT Norms Medium';                         
            font-family: TT Norms;
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 21px;
            letter-spacing: -0.370589px;
            color: #3D3BEE;
            a
                color: inherit;
                text-decoration: none;
                font-family: 'TT Norms Medium';                

    .get-editor-btn
        margin-right 22px
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
        padding 10px 25px
        display flex
        flex-direction: row
        justify-content: center
        align-items: center
        user-select none
        color white
        // opacity 1
        transition: opacity .3s
        text-decoration: none;
        &:hover
            cursor pointer
            opacity 0.7
            transition: opacity .3s            

</style>
