import { customDesignConfig } from './index'
import { twMerge } from 'tailwind-merge'
export * from './index'
// 动态注入twMerge，保证本地联调
customDesignConfig.twMerge = twMerge
