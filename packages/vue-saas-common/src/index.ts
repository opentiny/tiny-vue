import { customDesignConfig } from '@opentiny/vue-common'
import { twMerge } from 'tailwind-merge'
import designSaasConfig from '@opentiny/vue-design-saas'

export * from '@opentiny/vue-common'

// 自定义主题交互规范
customDesignConfig.designConfig = designSaasConfig
customDesignConfig.twMerge = twMerge
