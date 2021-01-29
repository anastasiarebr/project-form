<template>
  <transition name="fade">
    <div
      class="notification _flash-message has-text-weight-bold"
      :class="`is-${color}`"
      v-show="display"
    >
      <button class='delete' @click='hideMessage'></button>
      {{ message }}
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { emitter, FLASH_EVENT, FlashPayload } from '@/lib/emitter'

export default defineComponent({
  setup () {
    const display = ref(false)
    const message = ref('')
    const color = ref('')
    const timeoutId = ref<number | null>(null)

    const hideMessage = () => {
      display.value = false
    }

    const setDelayedHide = () => {
      if (timeoutId.value) {
        clearTimeout(timeoutId.value)
      }
      timeoutId.value = setTimeout(hideMessage, 15000)
    }

    const showMessage = (payload: FlashPayload) => {
      message.value = payload.message
      color.value = payload.color
      display.value = true

      setDelayedHide()
    }

    onMounted(() => {
      emitter.on<FlashPayload>(FLASH_EVENT, e => {
        if (!e) {
          return
        }
        showMessage(e)
      })
    })

    return {
      message,
      color,
      display,
      hideMessage
    }
  }
})
</script>

<style lang="sass" scoped>
@import "../style/bulma/bulma"

._flash-message
    font-family: 'Open Sans', sans-serif
    position: fixed
    bottom: 30px
    width: 400px
    margin: auto
    left: 0
    right: 0
    transition: all 0.4s

.fade-leave-active
    bottom: 30px
    opacity: 1

.fade-leave-to
    bottom: -30px
    opacity: 0

.fade-enter-active
    bottom: -30px
    opacity: 0

.fade-enter-to
    bottom: 30px
    opacity: 1
</style>
