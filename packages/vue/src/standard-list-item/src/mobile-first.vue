<template>
  <div
    data-tag="tiny-standard-list-item"
    class="flex w-full min-h-[theme(spacing.11)] sm:min-h-[theme(spacing.12)] text-xs"
    :class="
      m(
        type === 'card'
          ? 'p-3 border-0.5 hover:shadow sm:border rounded border-color-border-separator mb-2 [&:last-child]:mb-0'
          : 'px-0 py-3 border-b-0.5 sm:border-b-px border-b-color-border-separator [&:last-child]:border-none',
        type === 'card' && selected ? 'border border-color-brand' : ''
      )
    "
    @click="$emit('click', $event)"
  >
    <div
      data-tag="tiny-standard-list-item-image"
      v-if="showImage || (slots.image && slots.image())"
      class="float-left items-center mr-2.5 shrink-0"
      :class="[icon.name ? 'block' : 'block sm:flex']"
    >
      <slot name="image">
        <component v-if="icon.name" :is="icon.name" class="w-5 h-5" :style="{ fill: icon.color }" />
        <tiny-user-head
          v-else
          :type="userHead.type || 'icon'"
          v-model="userHead.value"
          :min="userHead.min"
          :round="userHead.round"
          :color="userHead.color"
          :background-color="userHead.backgroundColor"
          :size="userHead.size"
        ></tiny-user-head>
      </slot>
    </div>
    <div data-tag="tiny-standard-list-item-title" class="text-left flex-auto mx-0 my-auto leading-5">
      <slot>
        <div class="text-sm flex items-center">
          <slot name="title">
            <span
              :class="
                m(
                  'mr-3 shrink-0',
                  titleOption.role === 'a' && 'cursor-pointer text-color-brand',
                  titleOption.class || ''
                )
              "
              @click.stop="handleTitleClick"
              >{{ data.title || '' }}</span
            >
          </slot>
          <span class="text-color-text-placeholder shrink-0">{{ data.subTitle || '' }}</span>
          <slot name="tag">
            <tiny-tag-group
              v-if="tag"
              class="inline-block ml-3 text-xs [&_span]:whitespace-nowrap"
              :data="tag.data"
              :size="tag.size"
              :effect="tag.effect"
            ></tiny-tag-group>
          </slot>
        </div>
        <tiny-tooltip effect="light" :content="state.descTooltip" placement="top" @mouseenter.native="handleEnterDesc">
          <p v-if="data.desc" class="mt-2 text-xs line-clamp-2 sm:line-clamp-1">{{ data.desc }}</p>
        </tiny-tooltip>
      </slot>
    </div>
    <div
      data-tag="tiny-standard-list-item-operate"
      v-if="state.effectOptions.length || (slots.operate && slots.operate())"
      class="w-auto pr-0 pl-6 h-auto flex items-center justify-center shrink-0 text-color-text-primary"
    >
      <slot name="operate">
        <div
          class="cursor-pointer mr-5 hidden sm:block"
          v-for="(item, index) in state.effectOptions.slice(0, state.sliceNum)"
          :key="item.text + index"
          :class="[item.disabled ? 'text-color-text-disabled cursor-not-allowed' : '']"
          @click.stop="handelIconClick(item, index, $event)"
        >
          <component :is="item.icon" class="w-4 h-4" :class="[item.disabled ? 'fill-color-icon-disabled' : '']" />
          <span v-if="item.text" class="ml-1 align-middle sm:align-bottom">{{ item.text }}</span>
        </div>
        <div
          class="cursor-pointer hidden sm:block"
          :class="[state.effectOptions[state.sliceNum].disabled ? 'text-color-text-disabled cursor-not-allowed' : '']"
          v-if="state.effectOptions.length === state.iconNum"
          @click.stop="handelIconClick(state.effectOptions[state.sliceNum], state.sliceNum, $event)"
        >
          <component
            :is="state.effectOptions[state.sliceNum].icon"
            class="w-4 h-4"
            :class="[state.effectOptions[state.sliceNum].disabled ? 'fill-color-icon-disabled' : '']"
          />
          <span v-if="state.effectOptions[state.sliceNum].text" class="ml-1 align-middle sm:align-bottom">{{
            state.effectOptions[state.sliceNum].text
          }}</span>
        </div>
        <div
          data-tag="tiny-standard-list-item-selficon"
          v-if="state.effectOptions.length > state.iconNum"
          class="h-4 hidden sm:block"
        >
          <tiny-dropdown show-self-icon @click.native.stop>
            <component :is="iconMore" class="w-4 h-4" />
            <span v-if="state.effectOptions[0].text" class="ml-1 text-color-text-primary">{{ t('ui.base.more') }}</span>
            <template #dropdown>
              <tiny-dropdown-menu placement="bottom">
                <tiny-dropdown-item
                  v-for="(item, index) in state.effectOptions.slice(state.sliceNum)"
                  :key="item.text + index"
                >
                  <div
                    @click.stop="handelIconClick(item, index + state.sliceNum, $event)"
                    :class="[item.disabled ? 'text-color-text-disabled cursor-not-allowed' : '']"
                  >
                    <component
                      :is="item.icon"
                      class="w-4 h-4"
                      :class="[item.disabled ? 'fill-color-icon-disabled' : '']"
                    />
                    <span v-if="item.text">{{ item.text }}</span>
                  </div>
                </tiny-dropdown-item>
              </tiny-dropdown-menu>
            </template>
          </tiny-dropdown>
        </div>
        <div data-tag="tiny-standard-list-item-selficon" v-if="state.effectOptions.length" class="block sm:hidden">
          <tiny-dropdown show-self-icon @click.native.stop>
            <component :is="iconMore" class="w-4 h-4" />
            <template #dropdown>
              <tiny-dropdown-menu placement="bottom">
                <tiny-dropdown-item v-for="(item, index) in state.effectOptions" :key="item.text + index">
                  <div
                    @click.stop="handelIconClick(item, index, $event)"
                    :class="[item.disabled ? 'text-color-text-disabled cursor-not-allowed' : '']"
                  >
                    <component
                      :is="item.icon"
                      class="w-4 h-4"
                      :class="[item.disabled ? 'fill-color-icon-disabled' : '']"
                    />
                    <span v-if="item.text">{{ item.text }}</span>
                  </div>
                </tiny-dropdown-item>
              </tiny-dropdown-menu>
            </template>
          </tiny-dropdown>
        </div>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/standard-list-item/vue'
import { $props, $prefix, setup, defineComponent } from '@opentiny/vue-common'
import Dropdown from '@opentiny/vue-dropdown'
import DropdownMenu from '@opentiny/vue-dropdown-menu'
import DropdownItem from '@opentiny/vue-dropdown-item'
import Tooltip from '@opentiny/vue-tooltip'
import UserHead from '@opentiny/vue-user-head'
import TagGroup from '@opentiny/vue-tag-group'
import { iconEllipsis } from '@opentiny/vue-icon'

export default defineComponent({
  name: $prefix + 'StandardListItem',
  emits: ['icon-click'],
  components: {
    TinyTooltip: Tooltip,
    TinyUserHead: UserHead,
    TinyTagGroup: TagGroup,
    TinyDropdown: Dropdown,
    TinyDropdownMenu: DropdownMenu,
    TinyDropdownItem: DropdownItem,
    IconEllipsis: iconEllipsis()
  },
  props: {
    ...$props,
    data: {
      type: Object,
      default: () => {
        return {}
      }
    },
    tag: {
      type: Object,
      default: () => {
        return {}
      }
    },
    selected: {
      type: Boolean,
      default: false
    },
    showImage: {
      type: Boolean,
      default: false
    },
    icon: {
      type: Object,
      default: () => {
        return {}
      }
    },
    userHead: {
      type: Object,
      default: () => {
        return {}
      }
    },
    options: {
      type: Array,
      default: () => {
        return []
      }
    },
    iconMore: {
      type: [Object, String],
      default: () => {
        return iconEllipsis()
      }
    },
    type: {
      type: String,
      default: 'list'
    },
    titleOption: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  setup(props, context) {
    return setup({
      props,
      context,
      renderless,
      api,
      mono: true
    })
  }
})
</script>
