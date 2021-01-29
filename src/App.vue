<template>
  <div>
    <router-view />
    <FlashMessage />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FlashMessage from '@/components/FlashMessage.vue'

export default defineComponent({
  name: 'App',
  components: {
    FlashMessage
  }
})
</script>

<style lang="scss">

</style>
