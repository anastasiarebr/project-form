<template>
  <div class="container">
    <div class="column">
      <form action="" class="form" @submit.prevent="onRegister">
        <transition>
          <section v-if="step===1">
          <div class="form__title">Регистрация нового личного кабинета</div>
          <div class="form__input">
            <input
              type="text"
              id="phone"
              class="input"
              v-model="phone"
              @blur="checkPhone"
              :class='{input_error: !validPhone}'
            />
            <label for="phone" class="label" :class='{label_error: !validPhone}'>Номер телефона</label>
          </div>
          <button @click.prevent="nextStep()" class="form__btn form__btn_sign">
            <div class="form__btn_text">
            Получить код
            </div>
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

        <transition name="bounce">
          <section v-if="step===2">
            <div class="form__title">Подтверждение регистрации</div>
          <div class="form__phone">
            <div class="form__phone_label">Номер телефона</div>
            <div class="form__phone_number">{{ phone }}</div>
            <router-link to="/register">
            <div class="form__phone_changenumber">
            Указать другой номер
            </div></router-link>
          </div>
          <div class="form__input">
            <input
              type="text"
              id="code"
              class="input"
              v-model="code"
              placeholder="0000"
              @blur="checkCode"
              :class='{input_error: !validPhone}'
            />
            <label for="code" class="label" :class='{label_error: !validPhone}'>Код подтверждения</label>
          </div>
          <button @click="nextStep()" class="form__btn form__btn_sign">
            <div class="form__btn_text">
            Отправить код
            </div>
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
          <div class="form__text">Не получили код?</div>
          <div class="form__sendcode"><a href="">Выслать повторно</a></div>
          </section>
        </transition>

        <transition>
          <section v-if="step===3">
            <div class="form__title">Подтвердите электронную почту</div>
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
          <button @click="nextStep()" class="form__btn form__btn_sign">
            <div class="form__btn_text">
            Продолжить
            </div>
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

        <transition>
          <section v-if="step===4">
            <div class="form__title">Придумайте пароль</div>
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
          <button @click.prevent="onRegister" class="form__btn form__btn_sign">
            Завершить регистрацию
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
    nextStep () {
      this.step++
    },
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
