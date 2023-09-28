/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly TINY_THEME: 'saas' | ''
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
