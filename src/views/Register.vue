<template>
  <div class="container">
    <div class="column">
      <form action="" class="form" @submit.prevent="onRegister">
        <div class="form__title">Регистрация нового личного кабинета</div>
        <div class="form__input">
          <input
            type="text"
            id="login"
            class="input"
            placeholder="Superdesigner"
            v-model.trim="login"
            @blur="checkLogin"
            :class='{input_error: !validLogin}'
          />
          <label for="login" class="label" :class='{label_error: !validLogin}'>Логин</label>
        </div>
        <div class="form__input">
          <input
            type="email"
            id="email"
            placeholder="e.g. john@gmail.com"
            class="input"
            v-model.trim="email"
            @blur="checkEmail"
            :class='{input_error: !validEmail}'
          />
          <label for="email" class="label" :class='{label_error: !validEmail}'>Email</label>
        </div>
        <div class="form__input">
          <input
            type="password"
            id="password"
            placeholder="8 символов"
            class="input"
            v-model="password"
            @blur="checkPassword"
            :class='{input_error: !validPassword}'
          />
          <label for="password" class="label" :class='{label_error: !validPassword}'>Пароль</label>
        </div>
        <div class="form__input">
          <input
            type="password"
            id="confirmPassword"
            placeholder="8 символов"
            class="input"
            v-model="confirmPassword"
            @blur="checkConfirmPasswords"
            :class='{input_error: !validConfirmPassword}'
          />
          <label for="confirmPassword" class="label" :class='{label_error: !validConfirmPassword}'>Пароль повторно</label>
        </div>
        <div class="form__input">
          <input
            type="text"
            id="phone"
            placeholder="+7( ___ ) ___ __ __"
            class="input"
            v-model="phone"
            @blur="checkPhone"
            :class='{input_error: !validPhone}'
          />
          <label for="phone" class="label" :class='{label_error: !validPhone}'>Номер телефона</label>
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
import { defineComponent } from 'vue'
export default defineComponent({
  data () {
    return {
      login: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
      minLength: 8,
      validLogin: true,
      validEmail: true,
      validPassword: true,
      validConfirmPassword: true,
      validPhone: true
    }
  },
  methods: {
    checkLogin () {
      this.validLogin = Boolean(this.login.length)
    },
    checkEmail () {
      const regExp = new RegExp(/.+@.+\..+/i)
      const isEmpty = this.email.length
      if (regExp.test(this.email) && isEmpty) {
        this.validEmail = true
      } else {
        this.validEmail = false
      }
    },
    checkPassword () {
      this.validPassword = !(this.password.length < this.minLength)
    },
    checkConfirmPasswords () {
      this.validConfirmPassword = Boolean(this.password === this.confirmPassword)
    },
    checkPhone () {
      this.validPhone = Boolean(this.phone.length)
    },
    onRegister () {
      this.checkLogin()
      this.checkEmail()
      this.checkPassword()
      this.checkConfirmPasswords()
      this.checkPhone()
      if (this.validLogin && this.validEmail && this.validPassword && this.validConfirmPassword && this.validPhone) {
        console.log('Register')
        this.$router.push('/account')
      } else {
        console.log('errors')
      }
    }
  }
})
</script>

<style lang="sass" scoped>
@import '@/sass/style'
</style>
