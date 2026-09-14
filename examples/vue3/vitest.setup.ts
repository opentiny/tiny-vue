import { vi } from 'vitest'

global.ResizeObserver = class ResizeObserver {
  constructor(callback) {
    this.callback = callback
  }
  observe() {}
  unobserve() {}
  disconnect() {}
}

// @vue/test-utils 2.5 在 attachTo 时调用 app.onUnmount（Vue 3.5+ API）
vi.mock('vue', async (importOriginal) => {
  const vue = await importOriginal<typeof import('vue')>()
  const createApp: typeof vue.createApp = (...args) => {
    const app = vue.createApp(...args)
    if (typeof (app as { onUnmount?: unknown }).onUnmount !== 'function') {
      ;(app as { onUnmount: (hook?: () => void) => void }).onUnmount = () => undefined
    }
    return app
  }
  return { ...vue, createApp }
})
