declare module '*.vue' {
  import type { App, DefineComponent } from '@vue/runtime-dom'
  const component: DefineComponent<{}, {}, any> & {
    install(app: any): void
  }
  export default component
}

declare module '*.svg' {
  import type { DefineComponent } from '@vue/runtime-dom'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.jpg' {
  const src: string
  export default src
}

declare module '*.jpeg' {
  const src: string
  export default src
}

declare module '*.png' {
  const src: string
  export default src
}

declare module 'virtual-template?*' {
  import type { DefineComponent } from '@vue/runtime-dom'
  const src: (mode: string) => DefineComponent<{}, {}, any>
  export default src
}
