<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="column">
        <form action="" class="form">
          <div class="form__title">Профиль</div>
          <div class="form__input">
          <input type="text" id="surname" />
          <label for="surname">Фамилия</label>
        </div>
        <div class="form__input">
          <input type="text" id="name" />
          <label for="name">Имя</label>
        </div>
        <div class="form__input">
          <input type="text" id="secondName" />
          <label for="secondName">Отчество</label>
        </div>
        <div class="form__input">
          <input type="email" id="email" />
          <label for="email">Email</label>
          <router-link class="form__confirm" to="/">Подтвердить</router-link>
        </div>
        <div class="form__input">
          <input type="phone" id="phone" />
          <label for="phone">Номер телефона</label>
          <router-link class="form__confirm" to="/">Подтвердить</router-link>
        </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Navbar from '@/components/Navbar.vue'

@Options({
  components: {
    Navbar
  }
})
export default class Profile extends Vue {}
</script>

<style lang="sass" scoped>
@import '@/sass/style'
</style>
