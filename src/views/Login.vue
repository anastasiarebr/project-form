<template>
  <div class="container">
    <div class="column">
      <form class="form">
        <transition name="slide-fade">
          <section v-if="step===1">
        <div class="form__title">Вход в личный кабинет</div>
        <div class="form__input">
          <input
            type="text"
            id="login"
            class="input"
            v-model="login"
            placeholder="e.g. john@gmail.com"
            @blur="checkLogin"
            :class="{ input_error: !validLogin }"
          />
          <label
            for="login"
            class="label"
            :class="{ label_error: !validLogin }"
            >Номер телефона или email</label
          >
        </div>
        <button @click.prevent="stepLogin" type="button" class="form__btn">
          <div class="form__btn_text">Войти</div>
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
      <router-link to="/register" class="form__btn form__btn_reg">
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
              fill="#56CCF2"
            />
          </svg>
        </div>
      </router-link>
      </section>
      </transition>

      <transition name="slide-fade">
          <section v-if="step===2">
          <div class="form__title">Вход в личный кабинет</div>
        <div class="form__input">
          <input
            type="password"
            id="password"
            class="input"
            v-model="password"
            placeholder="8 символов"
            @blur="checkPassword"
            :class="{ input_error: !validPassword }"
          />
          <label
            for="password"
            class="label"
            :class="{ label_error: !validPassword }"
            >Пароль</label>
        </div>
        <div class="form__link">
          <router-link to="">Забыли пароль?</router-link>
        </div>
        <button @click.prevent="onSubmit()" class="form__btn ripple" type="submit">
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
        </section>
      </transition>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data () {
    return {
      step: 1,
      login: '',
      password: '',
      validPassword: true,
      validLogin: true,
      minLength: 8
    }
  },
  methods: {
    checkPassword () {
      this.validPassword = !(this.password.length < this.minLength)
    },
    checkLogin () {
      this.validLogin = Boolean(this.login.length)
    },
    stepLogin () {
      this.checkLogin()
      if (this.validLogin) {
        this.step++
      }
    },
    onSubmit () {
      this.checkPassword()
      if (this.validPassword) {
        console.log('Login')
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
