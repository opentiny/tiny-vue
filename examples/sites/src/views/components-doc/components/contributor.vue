<template>
  <div v-if="contributors.length" class="cmp-contributor">
    <h2 class="cmp-contributor-title">{{ i18nByKey('contributor') }}</h2>
    <template v-for="item in contributors" :key="item.id">
      <tiny-tooltip popper-class="docs-tooltip" placement="top" effect="light">
        <template #content>
          <span class="cmp-contributor-tip">{{ item.nickname }}</span>
        </template>
        <a :href="item.homepage" class="cmp-contributor-item" rel="noopener noreferrer" target="_blank">
          <img class="cmp-contributor-avatar" :src="item.avatar" :alt="item.nickname" />
        </a>
      </tiny-tooltip>
    </template>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { TinyTooltip } from '@opentiny/vue'
import { i18nByKey, getCmpContributors } from '@/tools'

const props = defineProps({ componentId: {} })
const contributors = computed(() => {
  return getCmpContributors(props.componentId)
})
</script>

<style scoped lang="less">
.cmp-contributor {
  margin-top: 48px;

  .cmp-contributor-title {
    margin-bottom: 32px;
    font-size: 20px;
    color: var(--tv-color-text);
  }

  .cmp-contributor-item {
    width: 42px;
    height: 42px;
    margin-right: 12px;
    margin-bottom: 20px;
    display: inline-block;
    border-radius: 50%;
    overflow: hidden;
    transition: all linear 0.2s;

    &:hover {
      transform: scale(110%);
    }
  }

  .cmp-contributor-avatar {
    width: 100%;
    height: 100%;
  }

  .cmp-contributor-tip {
    font-size: 14px;
    color: #191919;
  }
}
</style>
