/**
 * 工具函数模块
 * 提供一些实用的辅助函数
 */

import { reactive } from 'vue'

export { $local, $session } from './storage'

export const globalConversation = reactive({
  id: ''
})
