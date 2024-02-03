<template>
  <div class="w-full">
    <div class="w-full hidden sm:block">
      <div class="w-full px-2 mb-1" @click.stop="handelNodeClick(nodes)">
        <div
          class="relative w-full h-12 flex text-sm overflow-hidden cursor-pointer hover:bg-color-bg-2 rounded"
          :class="[
            nodes.isCurrent ? 'text-color-brand text-sm bg-color-fill-6 rounded hover:bg-color-brand-disabled' : '',
            currentPaths.includes(nodes.id) ? 'text-color-brand' : '',
            nodes.disabled ? 'text-color-text-disabled cursor-not-allowed' : ''
          ]"
          :style="{ 'padding-left': depth * 24 + 'px' }"
        >
          <a
            class="flex items-center whitespace-normal"
            :class="[nodes.disabled ? 'text-color-text-disabled cursor-not-allowed' : '']"
            :title="nodes.label"
            :href="nodes.url || void 0"
            style="text-decoration: none"
          >
            <component
              v-if="nodes.customIcon"
              :is="nodes.customIcon"
              custom-class="mr-3 w-4.5 h-4.5 flex-shrink-0"
              :class="[
                nodes.isCurrent
                  ? 'fill-color-brand'
                  : nodes.disabled
                  ? 'fill-color-icon-disabled'
                  : 'fill-color-icon-primary'
              ]"
            ></component>
            <span class="line-clamp-1">{{ nodes.label }}</span>
          </a>
          <icon-rightward
            v-if="nodes.children && nodes.children.length"
            class="absolute right-3 top-4 transition-transform duration-300 ease-in-out"
            :class="[
              nodes.isCurrent
                ? 'fill-color-brand'
                : nodes.disabled
                ? 'fill-color-icon-disabled'
                : 'fill-color-icon-secondary',
              state.showNodes || nodes.visible ? 'rotate-90' : ''
            ]"
          ></icon-rightward>
        </div>
      </div>
      <menu-transition>
        <div v-show="state.showNodes || nodes.visible">
          <menu-node
            v-for="(node, index) of nodes.children"
            :key="index"
            :nodes="node"
            :label="node.label"
            :depth="depth + 1"
            :current-paths="currentPaths"
            :expanded-keys-path="expandedKeysPath"
            :actived-keys-path="activedKeysPath"
            :actived-keys="activedKeys"
          >
          </menu-node>
        </div>
      </menu-transition>
    </div>
    <div class="w-full block sm:hidden">
      <a
        class="w-full whitespace-normal text-sm leading-5.5 py-3 px-0 overflow-hidden line-clamp-2"
        :class="[
          nodes.disabled || (onlyCheckChildren && nodes.children) ? 'text-color-text-disabled cursor-not-allowed' : '',
          nodes.isCurrent ? 'text-color-brand bg-color-bg-1' : ''
        ]"
        :href="nodes.url || void 0"
        style="text-decoration: none"
        @click.stop="handelNodeClick(nodes)"
      >
        <span class="relative px-4 line-clamp-2">
          {{ nodes.label }}
          <i
            v-if="nodes.isCurrent"
            class="absolute left-0 top-0.5 w-0.5 bg-color-brand"
            style="height: calc(100% - 6px)"
          ></i>
        </span>
      </a>
      <ul v-if="nodes.children">
        <li v-for="(node, index) of nodes.children" :key="index">
          <a
            class="block w-full whitespace-normal text-xs leading-5.5 py-3 px-0 overflow-hidden"
            :class="[
              node.disabled ? 'text-color-text-disabled cursor-not-allowed' : '',
              node.isCurrent ? 'text-color-brand bg-color-bg-1' : ''
            ]"
            :href="node.url || void 0"
            style="text-decoration: none"
            @click.stop="handelNodeClick(node)"
          >
            <span class="w-full relative pl-6 pr-4 line-clamp-2">
              {{ node.label }}
              <i
                v-if="node.isCurrent"
                class="absolute left-0 top-0.5 w-0.5 bg-color-brand"
                style="height: calc(100% - 6px)"
              ></i>
            </span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/menu-node/vue'
import { $props, setup, defineComponent } from '@opentiny/vue-common'
import { IconRightward } from '@opentiny/vue-icon'
import MenuTransition from './menu-transition.vue'

export default defineComponent({
  name: 'MenuNode',
  emits: [],
  components: {
    MenuTransition,
    IconRightward: IconRightward()
  },
  props: {
    ...$props,
    activedKeys: [Number, String],
    nodes: {
      type: Object,
      default: () => {
        return {}
      }
    },
    currentPaths: {
      type: Array,
      default: () => {
        return []
      }
    },
    depth: {
      type: Number,
      default: 0
    },
    activedKeysPath: {
      type: Array,
      default: () => {
        return []
      }
    },
    onlyCheckChildren: {
      type: Boolean,
      default: false
    },
    expandedKeysPath: {
      type: Array,
      default: () => {
        return []
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
