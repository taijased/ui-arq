<template lang="pug">
    .error
      .error-title 404
      .error-subtitle There is no such page
      .btn-error(@click="$router.go(-1)") Return back
    //-   .error-title 404
    //-   .error-subtitle Такой страницы не существует
    //-   .btn-error(@click="$router.go(-1)") Вернуться назад

</template>


<style lang="stylus" scoped>
$time-description = .3s

.error {
    width: 400px;
    height: 400px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .error-title {
        color: $purple;
        font-family: 'TT Norms Bold';
        line-height: normal;
        font-size: 200px;
    }
    .error-subtitle {
        font-family: 'TT Norms Medium'
        line-height: normal;
        font-size: 26px;
        color: #000;
    }
    .btn-error {
        font-family: 'TT Norms Regular';
        background: $purple;
        border-radius: 40px;
        padding: 10px 20px;
        color: white;
        margin-top: 30px;
        transition: background $time-description ease-in;
        &:hover {
            cursor: pointer;
            background: rgba(55, 69, 214, 0.7);
            transition: background $time-description ease-in;
        }
    }
}
</style>
