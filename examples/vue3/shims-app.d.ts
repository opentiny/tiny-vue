declare module '*.vue' {
  import type { App, DefineComponent } from '@vue/runtime-core'
  const component: DefineComponent<{}, {}, any> & {
    install(app: App): void
  }
  export default component
}

declare module '*.svg' {
  import type { DefineComponent } from '@vue/runtime-core'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module 'virtual-template?*' {
  import type { DefineComponent } from '@vue/runtime-core'
  const src: (mode: string) => DefineComponent<{}, {}, any>;
  export default src;
}
