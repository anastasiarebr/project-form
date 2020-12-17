<template>
  <div class="container">
    <div class="column">
      <form action="" class="form" @submit.prevent="submitHandler">
        <div class="form__title">Вход в личный кабинет</div>
        <div class="form__input">
          <input type="text" id="login" />
          <label for="login">Логин, email или номер телефона</label>
        </div>
        <div class="form__input">
          <input type="password" id="password" />
          <label for="password">Пароль</label>
        </div>
        <div class="form__link">
        <router-link to="/">Забыли пароль?</router-link>
      </div>
      <button class="form__btn" type="submit">
        Войти
        <div class="icon">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 7H12.17L6.58 1.41L8 0L16 8L8 16L6.59 14.59L12.17 9H0V7Z"
              fill="white"
            />
          </svg>
        </div>
      </button>
      </form>
      <router-link @tag="button" to="/register" class="form__btn form__btn_reg" >
        Регистрация
        <div class="icon">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 7H12.17L6.58 1.41L8 0L16 8L8 16L6.59 14.59L12.17 9H0V7Z"
              fill="white"
            />
          </svg>
        </div>
      </router-link>
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
