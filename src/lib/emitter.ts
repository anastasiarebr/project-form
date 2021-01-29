import mitt from 'mitt'

export type FlashPayload = { color: string; message: string }
export const FLASH_EVENT = Symbol('flashMessage')

export const emitter = mitt()
