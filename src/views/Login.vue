<template>
<div class="container">
  <div class="row">
    <form class="col s12 m6 offset-m3 xl4 offset-xl4 form">
        <div class="form__title">Вход в личный кабинет</div>
        <div class="form__input">
          <input id="email" type="email" class="validate" />
           <!-- <label for="email">Логин, email или номер телефона</label> -->
          <!-- <span class="helper-text" data-error="wrong" data-success="right"
            >Helper text</span
          > -->
        </div>
        <div class="form__input">
          <input id="password" type="password" class="validate" />
          <!-- <label for="password">Пароль</label> -->
          <!-- <span class="helper-text" data-error="wrong" data-success="right"
            >Helper text</span
          > -->
        </div>
    </form>
  </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
export default class Login extends Vue {}
</script>

<style lang="sass" scoped>
@import '@/sass/style'
</style>
