<script>
import { renderless, api } from '@opentiny/vue-renderless/process-designer/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { useBPMN, BpmnPropertiesPanelModule, BpmnPropertiesProviderModule } from '@opentiny/tiny-bpmn'

export default defineComponent({
  emits: ['importXmlError', 'importXmlSuccess', 'mounted'],
  props: [
    ...props,
    'getData',
    'additionalModules',
    'modeler',
    'data',
    'modules',
    'showProperties',
    'readonly',
    'keyboard'
  ],
  setup(props, context) {
    return setup({
      props,
      context,
      renderless,
      api,
      extendOptions: { useBPMN, BpmnPropertiesPanelModule, BpmnPropertiesProviderModule }
    })
  }
})
</script>

<template>
  <div class="tiny-process-designer">
    <div ref="render" id="render" class="tiny-process-designer__render"></div>
    <div ref="properties" id="properties"></div>
  </div>
</template>
