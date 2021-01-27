<template>
  <div class="container">
    <div class="column">
      <form action="" class="form" @submit.prevent="onRegister()">
        <transition name="slide-fade">
          <section v-if="step === 1">
            <div class="form__title">Регистрация нового личного кабинета</div>
            <div class="form__input">
              <input
                type="text"
                id="phone"
                class="input"
                v-model="phone"
                @blur="checkPhone"
                :class="{ input_error: !validPhone }"
              />
              <label
                for="phone"
                class="label"
                :class="{ label_error: !validPhone }"
                >Номер телефона</label
              >
            </div>
            <button
              type="button"
              :disabled="phone.length === 0"
              @click.prevent="phoneStep()"
              class="form__btn form__btn_sign"
            >
              <div class="form__btn_text">Получить код</div>
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

        <transition name="slide-fade">
          <section v-if="step === 2">
            <div class="form__title">Подтверждение регистрации</div>
            <div class="form__phone">
              <div class="form__phone_label">Номер телефона</div>
              <div class="form__phone_number">{{ phone }}</div>
              <a @click.prevent="changeNumber">
                <div class="form__phone_changenumber">
                  Указать другой номер
                </div></a
              >
            </div>
            <div class="form__input">
              <input
                type="text"
                id="code"
                class="input"
                v-model="code"
                placeholder="0000"
                @blur="checkCode"
                :class="{ input_error: !validCode }"
              />
              <label
                for="code"
                class="label"
                :class="{ label_error: !validCode }"
                >Код подтверждения</label
              >
            </div>
            <button
              type="button"
              :disabled="code.length != 4"
              @click.prevent="codeStep()"
              class="form__btn form__btn_sign"
            >
              <div class="form__btn_text">Отправить код</div>
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
                  />9
                </svg>
              </div>
            </button>
            <div class="form__text">Не получили код?</div>
            <div class="form__sendcode form__sendcode_notactive" v-if="(timerCount > 0) && (!skip) ">Выслать повторно через {{ timerCount }}</div>
            <div class="form__sendcode" v-if="(timerCount === 0) && (code==='' || !validCode) && (!skip)" @click="errorCode"><a>Выслать повторно</a></div>
            <div class="form__sendcode form__sendcode_notactive" v-if="(timerCount > 0) && skip">Пропустить через {{ timerCount }}</div>
            <div class="form__sendcode" v-if="(timerCount === 0) && skip" @click="step++"><a>Пропустить</a></div>
          </section>
        </transition>

        <transition name="slide-fade">
          <section v-if="step === 3">
            <div class="form__title">Подтвердите электронную почту</div>
            <div class="form__input">
              <input
                type="email"
                id="email"
                placeholder="e.g. john@gmail.com"
                class="input"
                v-model.trim="email"
                @blur="checkEmail"
                :class="{ input_error: !validEmail }"
              />
              <label
                for="email"
                class="label"
                :class="{ label_error: !validEmail }"
                >Email</label
              >
            </div>
            <button
              type="button"
              :disabled="email.length === 0"
              @click="emailStep()"
              class="form__btn form__btn_sign"
            >
              <div class="form__btn_text">Продолжить</div>
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

        <transition name="slide-fade">
          <section v-if="step === 4">
            <div class="form__title">Придумайте пароль</div>
            <div class="form__input">
              <input
                type="password"
                id="password"
                placeholder="8 символов"
                class="input"
                v-model="password"
                @blur="checkPassword"
                :class="{ input_error: !validPassword }"
              />
              <label
                for="password"
                class="label"
                :class="{ label_error: !validPassword }"
                >Пароль</label
              >
            </div>
            <div class="form__input">
              <input
                type="password"
                id="confirmPassword"
                placeholder="8 символов"
                class="input"
                v-model="confirmPassword"
                @blur="checkConfirmPasswords"
                :class="{ input_error: !validConfirmPassword }"
              />
              <label
                for="confirmPassword"
                class="label"
                :class="{ label_error: !validConfirmPassword }"
                >Пароль повторно</label
              >
            </div>
            <button
              @click.prevent="onRegister()"
              type="submit"
              class="form__btn form__btn_sign"
            >
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
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
      code: '',
      minLength: 8,
      validEmail: true,
      validPassword: true,
      validConfirmPassword: true,
      validPhone: true,
      validCode: true,
      timerCount: 10,
      skip: false
    }
  },
  methods: {
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
      this.validConfirmPassword = Boolean(
        this.password === this.confirmPassword
      )
    },
    checkPhone () {
      const regExp = new RegExp(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/)
      const isEmpty = this.phone.length
      if (regExp.test(this.phone) && isEmpty) {
        this.validPhone = true
      } else {
        this.validPhone = false
      }
    },
    changeNumber () {
      this.step--
      this.timerCount = 0
      this.skip = false
    },
    checkCode () {
      this.validCode = Boolean(this.code === '1111')
    },
    phoneStep () {
      this.checkPhone()
      if (this.validPhone) {
        this.timerCount = 10
        this.step++
        this.countDownTimer()
      }
    },
    codeStep () {
      this.checkCode()
      if (this.validCode) {
        this.step++
      }
    },
    emailStep () {
      this.checkEmail()
      if (this.validEmail) {
        alert('На указанный адрес отправлено письмо с ссылкой для подтверждения почты. Если его нет, проверьте спам')
        this.step++
      }
    },
    onRegister () {
      this.checkPassword()
      this.checkConfirmPasswords()
      if (this.validPassword && this.validConfirmPassword) {
        const User = {
          email: this.email,
          phone: this.phone,
          password: this.password
        }
        console.log(User)
        this.$router.push('/account')
      } else {
        console.log('errors')
      }
    },
    countDownTimer () {
      if (this.timerCount > 0) {
        setTimeout(() => {
          this.timerCount--
          this.countDownTimer()
        }, 1000)
      }
    },
    errorCode () {
      console.log(this)
      this.skip = true
      this.timerCount = 10
      this.countDownTimer()
    }
  }
})
</script>

<style lang="sass" scoped>
@import '@/sass/style'
</style>
