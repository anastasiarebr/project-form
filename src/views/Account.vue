<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="column">
        <router-link to="/profile" class="link" style="text-decoration: none;">
        <div class="account__btn">
            <div class="account__icon"><svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.2 0H16.8C7.52162 0 0 7.52162 0 16.8V25.2C0 34.4784 7.52162 42 16.8 42H25.2C34.4784 42 42 34.4784 42 25.2V16.8C42 7.52162 34.4784 0 25.2 0Z" fill="#FCD0CF" fill-opacity="0.5"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17 18C17 20.2091 18.791 22 21 22C23.209 22 25 20.2091 25 18C25 15.7909 23.209 14 21 14C18.791 14 17 15.7909 17 18ZM19 18C19 19.1046 19.895 20 21 20C22.105 20 23 19.1046 23 18C23 16.8954 22.105 16 21 16C19.895 16 19 16.8954 19 18Z" fill="#414141"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M21 9C27.075 9 32 14.3726 32 21C32 27.6274 27.075 33 21 33C14.925 33 10 27.6274 10 21C10 14.3726 14.925 9 21 9ZM30 21C30 23.2802 29.287 25.3789 28.092 27.0455C26.448 24.697 23.854 23.1818 20.936 23.1818C18.055 23.1818 15.491 24.6579 13.844 26.9545C12.687 25.3029 12 23.239 12 21C12 15.5775 16.029 11.1818 21 11.1818C25.971 11.1818 30 15.5775 30 21ZM21 30.8182C23.15 30.8182 25.124 29.9955 26.672 28.6231C25.406 26.6522 23.309 25.3636 20.936 25.3636C18.592 25.3636 16.517 26.6205 15.246 28.5501C16.806 29.9663 18.812 30.8182 21 30.8182Z" fill="#414141"/>
            </svg>
            </div>Необходимо заполнить профиль
            <div class="account__arrow">
            <svg width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.0159955 12.5994L1.66654 14.0181L10.0793 7.11381L1.82663 0.0190442L0.144101 1.39971L6.74626 7.07572L0.0159955 12.5994Z" fill="#A1A1A1"/>
            </svg>
            </div>
            </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Navbar from '@/components/Navbigation.vue'

@Options({
  components: {
    Navbar
  }
})
export default class Account extends Vue {}
</script>

<style lang="sass" scoped>
@import '@/sass/style'
</style>
