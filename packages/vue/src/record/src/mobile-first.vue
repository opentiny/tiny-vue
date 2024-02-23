<template>
  <div data-tag="tiny-record">
    <tiny-action-sheet
      :title="t('ui.record.record')"
      :visible="modelValue"
      :lock-scroll="lockScroll"
      custom-class="pb-0"
      :mask-closable="false"
      @update:visible="$emit('update:modelValue', $event)"
    >
      <template #header-left>
        <div data-tag="tiny-record-header-left" class="text-base text-color-text-secondary" @click="handleCancel">
          {{ t('ui.record.cancel') }}
        </div>
      </template>
      <template #header-right>
        <div
          data-tag="tiny-record-header-right"
          :class="['text-color-brand', ['recording', 'pause'].includes(state.record.status) ? '' : 'hidden']"
          @click="handleConfirm"
        >
          {{ t('ui.record.confirm') }}
        </div>
      </template>
      <template #default>
        <div
          data-tag="tiny-record-header-default"
          class="flex justify-center flex-wrap text-base text-color-text-secondary"
        >
          <div
            data-tag="tiny-record-time"
            class="font-light"
            :class="['recording', 'pause'].includes(state.record.status) ? 'visible' : 'invisible'"
          >
            {{ state.recodeTime }}
          </div>
          <div
            data-tag="tiny-record-ready"
            class="relative w-full text-center px-4"
            :class="['recording'].includes(state.record.status) ? 'h-24' : 'h-10 my-7'"
          >
            <canvas v-if="['recording'].includes(state.record.status)" ref="canvas" class="w-full h-full"></canvas>
            <span v-else class="absolute left-0 bottom-0 w-full">{{
              ['ready'].includes(state.record.status)
                ? t('ui.record.clickToStartRecording')
                : t('ui.record.clickToResumeRecording')
            }}</span>
          </div>
          <div
            data-tag="tiny-record-recording"
            class="flex w-16 h-16 justify-center items-center mt-0 m-10 border rounded-full cursor-pointer"
            :class="[
              ['recording'].includes(state.record.status)
                ? 'border-color-border-separator shadow-sm'
                : 'border-color-brand'
            ]"
          >
            <div data-tag="tiny-record-tooglerecord" @click="toogleRecord">
              <icon-mic v-if="!['recording'].includes(state.record.status)" custom-class="w-10 h-10 fill-color-brand" />
              <div v-else class="w-6 h-6 bg-color-error rounded"></div>
            </div>
          </div>
        </div>
      </template>
    </tiny-action-sheet>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/record/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import ActionSheet from '@opentiny/vue-action-sheet'
import { IconMic } from '@opentiny/vue-icon'

export default defineComponent({
  emits: ['confirm', 'error', 'update:modelValue'],
  props: [...props, 'modelValue', 'isHwh5', 'lockScroll'],
  components: {
    TinyActionSheet: ActionSheet,
    IconMic: IconMic()
  },
  inheritAttrs: false,
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
