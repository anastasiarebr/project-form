declare module '*.vue' {
  // import type { ComponentOptions } from 'vue'
  // const component: ComponentOptions
  // export default component
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
