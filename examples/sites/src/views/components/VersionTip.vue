<template>
  <span v-if="currentStageComputed" class="version-tip">
    <div v-if="renderType === 'alert'">
      <tiny-alert :type="alertTypeComputed" :closable="false">
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
        <tiny-tag size="mini" effect="dark" :type="tagTypeComputed">{{ currentStageComputed }}</tiny-tag>
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
  experimental = 'experimental',
  stable = 'stable',
  deprecated = 'deprecated',
  removed = 'removed'
}

interface IStageVersionMetaData {
  version: string
}

interface IVersionMetaData {
  [STAGE.experimental]?: IStageVersionMetaData | string
  [STAGE.stable]?: IStageVersionMetaData | string
  [STAGE.deprecated]?: IStageVersionMetaData | string
  [STAGE.removed]?: IStageVersionMetaData | string
}

interface Ii18nString {
  'zh-CN': string
  'en-US': string
}

const alertTypeMap = {
  [STAGE.removed]: 'error',
  [STAGE.deprecated]: 'error',
  [STAGE.experimental]: 'warning',
  [STAGE.stable]: 'info'
}

const tagTypeMap = {
  [STAGE.removed]: 'danger',
  [STAGE.deprecated]: 'danger',
  [STAGE.experimental]: 'warning',
  [STAGE.stable]: 'info'
}

const cnDesMap = {
  [STAGE.experimental]: '处于测试阶段',
  [STAGE.stable]: '自 v{version} 起稳定提供',
  [STAGE.deprecated]: '从 v{version} 开始被废弃',
  [STAGE.removed]: '于 v{version} 移除'
}

const enDesMap = {
  [STAGE.experimental]: 'in beta',
  [STAGE.stable]: 'stable since v{version}',
  [STAGE.deprecated]: 'deprecated since v{version}',
  [STAGE.removed]: 'removed in v{version}'
}

// 默认的，只需要显示deprecated，experimental状态时的提示，除非声明了briefStage
export default defineComponent({
  components: {
    TinyTag,
    TinyAlert,
    TinyTooltip
  },
  props: {
    metaData: {
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
    stages: {
      type: Array as PropType<STAGE[]>,
      default: () => [STAGE.experimental, STAGE.deprecated, STAGE.removed]
    },
    alertType: {
      type: String
    },
    tagType: {
      type: String
    },
    briefStage: {
      type: Object as PropType<STAGE>
    },
    tip: {
      type: Object as PropType<Ii18nString>
    },
    extendTip: {
      type: Object as PropType<Ii18nString>
    }
  },
  setup(props) {
    const isInStage = (stage: STAGE) => Boolean(props.metaData[stage]) && props.stages.includes(stage)

    const getVersion = (stage: STAGE) => {
      if (!props.metaData[stage]) return ''

      if (typeof props.metaData[stage] === 'string') {
        return props.metaData[stage] as string
      } else {
        return (props.metaData[stage] as IStageVersionMetaData).version
      }
    }

    const currentStageComputed = computed(() => {
      if (props.briefStage) {
        return props.briefStage
      }

      return [STAGE.removed, STAGE.deprecated, STAGE.stable, STAGE.experimental].find(isInStage)
    })

    const generateDes = (desMap: typeof cnDesMap) => {
      // 当前stable之后，不显示experimental的描述
      const isFilterExperimental = [STAGE.removed, STAGE.deprecated, STAGE.stable].includes(
        currentStageComputed.value as STAGE
      )
      // 当前deprecated之后，不显示stable的描述
      const isFilterStable = [STAGE.removed, STAGE.deprecated].includes(currentStageComputed.value as STAGE)

      const goingStages = Object.entries(desMap).filter(([stage]) => {
        let isPicked = isInStage(stage as STAGE)

        if (stage === STAGE.experimental) {
          isPicked = isPicked && !isFilterExperimental
        }

        if (stage === STAGE.stable) {
          isPicked = isPicked && !isFilterStable
        }

        return isPicked
      })

      return goingStages.map(([stage, des]) => des.replace('{version}', getVersion(stage as STAGE))).join('，')
    }

    const tipComputed = computed(() => {
      if (props.tip) return getWord(props.tip['zh-CN'], props.tip['en-US']) as string

      if (!props.metaData) return ''

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
      tagTypeComputed
    }
  }
})
</script>
