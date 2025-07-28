/**
 * 工具函数模块
 * 提供一些实用的辅助函数
 */

import { ref } from 'vue'

import { $local, $session } from './storage'

export { $local, $session }

export const showTinyRobot = ref(false)

// 如果环境变量和本地变量都未定义，则提示用户填写
export const isEnvLLMDefined = Boolean(import.meta.env.VITE_LLM_API_KEY && import.meta.env.VITE_LLM_URL)
export const isLocalLLMDefined = Boolean($local.llmUrl && $local.llmApiKey)
