<template lang="pug">
  .wrapper
    .wrapper__container
      .wrapper__container-info
        .info-block
          div
            img.info-block__image(src="../../assets/education.svg")
            .content
              //- .content__name Образование
              .content__name Education
              //- .content__description Сделайте ваши уроки более интерактивными. Демонстрируйте химические опыты, реализуйте физические явления прямо на вашем столе.
              .content__description Make your lessons more interactive. Demonstrate chemical experiments, realize physical phenomena right on your desk
          FreeBtn
        .info-block
          div
            img(src="../../assets/manufactoring.svg")
            .content
              //- .content__name Производство
              //- .content__description Визуализируйте рабочий процесс с целью обучения персонала. Демонстрируйте ваши проекты заказчикам.
              .content__name Manufacturing
              .content__description Visualize the workflow for staff training. Showcase your designs to customers.
          FreeBtn
        .info-block
          div
            img(src="../../assets/museum.svg")
            .content
              //- .content__name Музеи и выставки
              //- .content__description Оживляйте экспонаты, создавайте интерактивные выставки. Рассказывайте историю посетителям по новому.
              .content__name Museums and exhibitions
              .content__description Relive exhibits, create interactive exhibitions. Tell the story to visitors in a new way.
          FreeBtn

</template>

<script>
import FreeBtn from '../FreeBtn';
export default {
  components: {
    FreeBtn
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.wrapper__container-info
  height 320px
  width 100%
  display flex
  flex-direction: row
  justify-content: flex-start
  align-items: center
</style>
