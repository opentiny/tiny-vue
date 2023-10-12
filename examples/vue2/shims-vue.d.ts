import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {}
  interface VueConstructor {
    install(app: VueConstructor): void
  }
}
