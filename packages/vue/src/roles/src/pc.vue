<template>
  <div class="tiny-roles">
    <tiny-popover
      popper-class="tiny-roles__selector"
      :disabled="state.roleList.length === 1"
      v-model="state.showPopover"
      placement="bottom-start"
      trigger="hover"
      @show="show"
      @hide="hide"
    >
      <template #reference>
        <span>
          {{ state.currentRole }}
          <component
            v-show="state.roleList.length > 1"
            :is="state.showIcon ? 'icon-chevron-down' : 'icon-chevron-up'"
          />
        </span>
      </template>
      <div class="tiny-roles tiny-roles__selector-body">
        <ul class="tiny-roles__poplist">
          <li
            class="tiny-roles__poplist-item"
            v-for="(item, key) in state.roleList"
            :key="key"
            :data-value="item.roleId"
            :current-scope="item.currentScope"
            :class="[state.currentId === item.roleId ? 'is-selected' : '']"
            @click="changeRole(item)"
          >
            <span>{{ item.roleName }}</span>
          </li>
        </ul>
      </div>
    </tiny-popover>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/roles/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import Popover from '@opentiny/vue-popover'
import { IconChevronDown, IconChevronUp } from '@opentiny/vue-icon'

export default defineComponent({
  props: [...props, 'fetchRole', 'getEnvInfoSync', 'getChangeRoleUrl', 'getCustomized', 'pushCustomized'],
  components: {
    TinyPopover: Popover,
    IconChevronDown: IconChevronDown(),
    IconChevronUp: IconChevronUp()
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
