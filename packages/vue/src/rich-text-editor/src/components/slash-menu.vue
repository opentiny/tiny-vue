<template>
  <div class="tiny-slash-menu__view">
    <template v-if="items?.length">
      <div
        v-for="(item, index) in items"
        :id="`slash-menu-${index}`"
        :key="index"
        class="tiny-slash-menu__item"
        :class="{ 'is-active': selectedIndex === index }"
        @click="handleSelectItem(index)"
      >
        <component :is="item.icon" />
        <span>{{ item.title }}</span>
      </div>
    </template>
    <div v-else>
      <span>暂无选项</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, hooks } from '@opentiny/vue-common'

export default defineComponent({
  name: 'SlashMenu',
  props: {
    items: {
      type: Array
    },
    command: {
      type: Function
    }
  },
  components: {},
  setup(props) {
    const selectedIndex = hooks.ref(0)
    const menuLength = hooks.ref(0)

    hooks.watch(
      () => props.items,
      () => {
        console.log(props.items)

        selectedIndex.value = 0
        menuLength.value = props.items.length
      },
      {
        immediate: true
      }
    )

    function onKeyDown({ event }: { event: KeyboardEvent }) {
      if (event.key === 'ArrowUp') {
        handleKeyUp()
        return true
      }

      if (event.key === 'ArrowDown') {
        handleKeyDown()
        return true
      }

      if (event.key === 'Enter') {
        handleKeyEnter()
        return true
      }

      return false
    }

    function handleKeyUp() {
      selectedIndex.value = (selectedIndex.value + menuLength.value - 1) % menuLength.value
    }

    function handleKeyDown() {
      selectedIndex.value = (selectedIndex.value + 1) % menuLength.value
    }

    function handleKeyEnter() {
      handleSelectItem(selectedIndex.value)
    }

    function handleSelectItem(index: number) {
      const item = props.items[index]

      if (item) {
        props?.command(item)
      }
    }

    return {
      selectedIndex,
      handleSelectItem,
      onKeyDown
    }
  }
})
</script>

<!-- tippy 位于 body 中 此处样式未写在 Block 下 -->
<style scoped lang="less">
.tiny-slash-menu {
  &__view {
    color: #000000;
    // background: #e5e5e5;
    background: #ffffff;
    border-radius: 8px;
    border: 1px solid #e5e5e5;
    padding: 8px;
    width: 256px;
  }

  &__item {
    cursor: pointer;
    color: #737373;
    border-radius: 4px;
    padding: 6px;
    display: flex;
    align-items: center;
    gap: 8px;

    &:hover {
      background-color: #f5f5f5;
    }

    &.is-active {
      background-color: #e0ebfd;
    }
  }
}
</style>
