<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="column">
        <form action="" class="form">
          <div class="form__title">Профиль</div>
          <div class="form__input">
          <input type="text" id="surname" class="input" placeholder="Иванов" v-model="surname" @blur="checkSurname"
          :class='{input_error: !validSurname}'/>
          <label for="surname" class="label" :class='{label_error: !validSurname}'>Фамилия</label>
        </div>
        <div class="form__input">
          <input type="text" id="name" class="input" placeholder="Иван" v-model="name" @blur="checkName"
            :class='{input_error: !validName}'/>
          <label for="name" class="label" :class='{label_error: !validName}'>Имя</label>
        </div>
        <div class="form__input">
          <input type="text" id="secondName" class="input" placeholder="Иванович" v-model="secondName"/>
          <label for="secondName" class="label" >Отчество</label>
        </div>
        <div class="form__input form__input_check">
          <input type="email" id="email" class="input" placeholder="e.g. john@gmail.com" v-model="email" @blur="checkEmail"
            :class='{input_error: !validEmail}'/>
          <label for="email" class="label"
          :class='{label_error: !validEmail}'>Email</label>
          <router-link class="form__confirm" to="/">Подтвердить</router-link>
        </div>
        <div class="form__input form__input_check">
          <input type="phone" id="phone" class="input" placeholder="+7( ___ ) ___ __ __" v-model="phone" @blur="checkPhone"
            :class='{input_error: !validPhone}'/>
          <label for="phone" class="label" :class='{label_error: !validPhone}'>Номер телефона</label>
          <router-link class="form__confirm" to="/">Подтвердить</router-link>
        </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Navbar from '@/components/Navbigation.vue'

@Options({
  data () {
    return {
      name: '',
      surname: '',
      secondName: '',
      email: '',
      phone: '',
      validName: true,
      validSurname: true,
      validEmail: true,
      validPhone: true
    }
  },
  components: {
    Navbar
  },
  methods: {
    checkSurname () {
      this.validSurname = Boolean(this.surname.length)
    },
    checkName () {
      this.validName = Boolean(this.name.length)
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
    checkPhone () {
      this.validPhone = Boolean(this.phone.length)
    },
    onRegister () {
      this.checkSurname()
      this.checkEmail()
      this.checkName()
      this.checkPhone()
      if (this.validSurname && this.validEmail && this.validName && this.validPhone) {
        console.log('Check')
      } else {
        console.log('errors')
      }
    }
  }

})
export default class Profile extends Vue {}
</script>

<style lang="sass" scoped>
@import '@/sass/style'
</style>
