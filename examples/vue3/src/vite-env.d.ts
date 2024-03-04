/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  readonly VITE_TINY_MODE: 'pc' | 'mobile' | 'mobile-first'
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
