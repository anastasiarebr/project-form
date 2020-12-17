<template>
  <div class="container">
    <div class="column">
      <form action="" class="form">
        <div class="form__title">Регистрация нового личного кабинета</div>
        <div class="form__input">
          <input type="text" id="login" />
          <label for="login">Логин</label>
        </div>
        <div class="form__input">
          <input type="email" id="email" />
          <label for="email">Email</label>
        </div>
        <div class="form__input">
          <input type="password" id="password" />
          <label for="password">Пароль</label>
        </div>
        <div class="form__input">
          <input type="password" id="password" />
          <label for="password">Пароль повторно</label>
        </div>
        <div class="form__input">
          <input type="phone" id="phone" />
          <label for="phone">Номер телефона</label>
        </div>
        <button class="form__btn form__btn_sign">
        Зарегистрироваться
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
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
export default class Register extends Vue {
}
</script>

<style lang="sass" scoped>
@import '@/sass/style'
</style>
