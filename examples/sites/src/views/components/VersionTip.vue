<template>
  <span v-if="currentStageComputed" class="version-tip">
    <div v-if="renderType === 'alert'">
      <tiny-alert :type="alertTypeComputed" v-if="!isStableComputed" :closable="false">
        <template #description>
          <span>{{ tipComputed }}</span>
        </template>
      </tiny-alert>
    </div>
    <span v-if="renderType === 'tag'">
      <tiny-tooltip
        effect="light"
        placement="top-start"
        :open-delay="500"
        :content="tipComputed"
        :disabled="!tipComputed"
      >
        <tiny-tag size="small" effect="dark" :type="tagTypeComputed">{{ tagContentComputed }}</tiny-tag>
      </tiny-tooltip>
    </span>
  </span>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent, computed } from 'vue'
import { Tag as TinyTag, Alert as TinyAlert, Tooltip as TinyTooltip } from '@opentiny/vue'
import { getWord } from '../../i18n/index'

enum STAGE {
  // 实验性阶段（api属性不具备此阶段）
  experimental = 'experimental',
  // 稳定阶段
  stable = 'stable',
  // 弃用阶段
  deprecated = 'deprecated',
  // 将要被移除阶段
  toBeRemoved = 'toBeRemoved'
}

interface IStageVersionMetaData {
  version: string
}

interface IVersionMetaData {
  [STAGE.experimental]?: IStageVersionMetaData | string
  [STAGE.stable]?: IStageVersionMetaData | string
  [STAGE.deprecated]?: IStageVersionMetaData | string
  [STAGE.toBeRemoved]?: IStageVersionMetaData | string
}

interface Ii18nString {
  'zh-CN': string
  'en-US': string
}

// 生命周期的顺序 实验 --> 稳定 --> 弃用 --> 移除
const lifeCycleOrder = [STAGE.experimental, STAGE.stable, STAGE.deprecated, STAGE.toBeRemoved]

const alertTypeMap = {
  [STAGE.toBeRemoved]: 'error',
  [STAGE.deprecated]: 'error',
  [STAGE.experimental]: 'warning',
  [STAGE.stable]: 'success'
}

const tagTypeMap = {
  [STAGE.toBeRemoved]: 'danger',
  [STAGE.deprecated]: 'danger',
  [STAGE.experimental]: 'warning',
  [STAGE.stable]: 'success'
}

const cnDesMap = {
  [STAGE.experimental]: '处于测试阶段',
  [STAGE.stable]: '自 v{version} 起稳定提供',
  [STAGE.deprecated]: '从 v{version} 开始被废弃',
  [STAGE.toBeRemoved]: '于 v{version} 移除'
}

const enDesMap = {
  [STAGE.experimental]: 'in beta',
  [STAGE.stable]: 'stable since v{version}',
  [STAGE.deprecated]: 'deprecated since v{version}',
  [STAGE.toBeRemoved]: 'toBeRemoved in v{version}'
}

// 默认的，只需要显示deprecated，experimental状态时的提示
export default defineComponent({
  components: {
    TinyTag,
    TinyAlert,
    TinyTooltip
  },
  props: {
    meta: {
      type: Object as PropType<IVersionMetaData>,
      default: () => ({})
    },
    renderType: {
      type: String as PropType<'tag' | 'alert'>,
      default: 'alert'
    },
    tipSubject: {
      type: String as PropType<'component' | 'api'>,
      default: 'component'
    },
    alertType: {
      type: String
    },
    tagType: {
      type: String
    },
    tip: {
      type: Object as PropType<Ii18nString>
    },
    extendTip: {
      type: Object as PropType<Ii18nString>
    }
  },
  setup(props) {
    const getVersion = (stage: STAGE) => {
      if (!props.meta[stage]) return ''

      if (typeof props.meta[stage] === 'string') {
        return props.meta[stage] as string
      } else {
        return (props.meta[stage] as IStageVersionMetaData).version
      }
    }

    const currentStageComputed = computed(() =>
      lifeCycleOrder
        .slice(0, -1)
        .toReversed()
        .find((stage) => Boolean(props.meta[stage]))
    )

    // 是否为稳定阶段
    const isStableComputed = computed(() => currentStageComputed.value === STAGE.stable)

    const generateDes = (desMap: typeof cnDesMap) => {
      const currentStage = currentStageComputed.value
      const deprecatedList = lifeCycleOrder.slice(2)

      const goingStages = Object.entries(desMap).filter(([stage]) => {
        if (deprecatedList.includes(currentStage)) {
          return deprecatedList.includes(stage)
        } else {
          return stage === currentStage
        }
      })

      return goingStages.map(([stage, des]) => des.replace('{version}', getVersion(stage as STAGE))).join('，')
    }

    const tagContentComputed = computed(() =>
      isStableComputed.value ? props.meta[currentStageComputed.value] : currentStageComputed.value
    )

    const tipComputed = computed(() => {
      if (props.tip) return getWord(props.tip['zh-CN'], props.tip['en-US']) as string

      if (!props.meta) return ''

      const vertionDesZnCn = generateDes(cnDesMap)
      const znChTip = `该${props.tipSubject === 'component' ? '组件' : '特性'}${vertionDesZnCn}。${
        props.extendTip?.['zh-CN'] || ''
      }`

      const vertionDesEnUs = generateDes(enDesMap)
      const enUsTip = `This ${props.tipSubject === 'component' ? 'component' : 'feature'} is ${vertionDesEnUs}. ${
        props.extendTip?.['en-US'] || ''
      }`

      return getWord(znChTip, enUsTip) as string
    })

    const alertTypeComputed = computed(() => {
      if (props.alertType) return props.alertType

      return currentStageComputed.value ? alertTypeMap[currentStageComputed.value] : 'error'
    })

    const tagTypeComputed = computed(() => {
      if (props.tagType) return props.tagType

      return currentStageComputed.value ? tagTypeMap[currentStageComputed.value] : 'error'
    })

    return {
      tipComputed,
      currentStageComputed,
      alertTypeComputed,
      tagTypeComputed,
      tagContentComputed,
      isStableComputed
    }
  }
})
</script>
