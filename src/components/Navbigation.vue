<template>
<div>
  <div class="navbar">
    <div class="navbar__hamburger" @click="isOpen = !isOpen">
      <svg
        width="18"
        height="12"
        viewBox="0 0 18 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0H18V2H0V0ZM0 5H18V7H0V5ZM0 10H18V12H0V10Z"
          fill="#979797"
        />
      </svg>
    </div>
    <router-link to="/account" style="text-decoration: none;">
      <div class="navbar__title" >Личный кабинет</div>
    </router-link>
  </div>
  
  <ul class="sidebar" :class="{ sidebar_open: isOpen }">
      <router-link
        v-for="link in links"
        :key="link.url"
        active-class="active"
        :to="link.url"
        :exact="link.exact"
        style="text-decoration: none;"
      >
        <li>
          <a>{{ link.title }}</a>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script lang="ts">
// import { Options, Vue } from 'vue-class-component'
import { defineComponent } from 'vue'
export default defineComponent({
  data () {
    return {
      isOpen: false,
      links: [
        { title: 'Войти', url: '/', exact: true },
        { title: 'Регистрация', url: '/register' }
      ]
    }
  }
})
</script>

<style lang="sass" scoped>
@import '@/sass/navbar'
</style>
