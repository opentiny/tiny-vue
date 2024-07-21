import { addComponent, defineNuxtModule } from '@nuxt/kit'
import { IconBoat } from '@opentiny/vue-icon'
export default defineNuxtModule({
  meta: {
    name: '@opentiny/nuxt',
    configKey: 'tiny-vue'
  },
  defaults: {
    prefix: '',
    components: true
  },
  hooks: {},
  setup(options) {
    addComponent({
      name: 'Alert',
      filePath: '@opentiny/vue-alert',
    }),
    addComponent({
      name: 'iconBoat',
      filePath: '@opentiny/vue-icon',
    }),
    addComponent({
      name: 'iconWarningTriangle',
      filePath: '@opentiny/vue-icon',
    }),
    addComponent({
      name: 'TinyButton',
      filePath: '@opentiny/vue-button',
    }),
    addComponent({
      name: 'Row',
      filePath: '@opentiny/vue-row',
    }),
    addComponent({
      name: 'Layout',
      filePath: '@opentiny/vue-layout',
    }),
    addComponent({
      name: 'Modal',
      filePath: '@opentiny/vue-modal',
    }),
    addComponent({
      name: 'TinySwitch',
      filePath: '@opentiny/vue-switch',
    }),
    addComponent({
      name: 'ButtonGroup',
      filePath: '@opentiny/vue-button-group',
    }),
    addComponent({
      name: 'TinyCol',
      filePath: '@opentiny/vue-col',
    }),
    addComponent({
      name: 'TinyRow',
      filePath: '@opentiny/vue-row',
    }),
    addComponent({
      name: 'Container',
      filePath: '@opentiny/vue-container',
    }),
    addComponent({
      name: 'Radio',
      filePath: '@opentiny/vue-radio',
    }),
    addComponent({
      name: 'RadioGroup',
      filePath: '@opentiny/vue-radio-group',
    }),
    addComponent({
      name: 'TinyLink',
      filePath: '@opentiny/vue-link',
    }),
    addComponent({
      name: 'TinyDivider',
      filePath: '@opentiny/vue-divider',
    }),
    addComponent({
      name: 'TinyActionMenu',
      filePath: '@opentiny/vue-action-menu',
    }),
    addComponent({
      name: 'TinyAnchor',
      filePath: '@opentiny/vue-anchor',
    }),
    addComponent({
      name: 'TinyBreadcrumb',
      filePath: '@opentiny/vue-breadcrumb',
    }),
    addComponent({
      name: 'TinyBreadcrumbItem',
      filePath: '@opentiny/vue-breadcrumb-item',
    }),
    addComponent({
      name: 'Notify',
      filePath: '@opentiny/vue-notify',
    }),
    addComponent({
      name: 'TinyDropdown',
      filePath: '@opentiny/vue-dropdown',
    }),
    addComponent({
      name: 'TinyDropdownItem',
      filePath: '@opentiny/vue-dropdown-item',
    }),
    addComponent({
      name: 'TinyDropdownMenu',
      filePath: '@opentiny/vue-dropdown-menu',
    })
  }
})
