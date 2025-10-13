<template>
  <tiny-tabs v-model="activeName" class="select-none" :optimized="false" swipeable>
    <tiny-tab-item title="表单组件" name="first">
      <div class="flex w-fit">
        <div class="bg-color-bg-1 w-96 h-60 mr-4">
          表单组件,具有与用户交互，并可完成数据采集功能的控件。--tab 1 item 1
        </div>
        <div class="bg-color-bg-2 w-96 h-60 mr-4">
          表单组件,具有与用户交互，并可完成数据采集功能的控件。--tab 1 item 2
        </div>
        <div class="bg-color-bg-3 w-96 h-60 mr-4">
          表单组件,具有与用户交互，并可完成数据采集功能的控件。--tab 1 item 3
        </div>
        <div class="bg-color-bg-4 w-96 h-60 mr-4">
          表单组件,具有与用户交互，并可完成数据采集功能的控件。--tab 1 item 4
        </div>
        <div class="bg-color-bg-5 w-96 h-60 mr-4">
          表单组件,具有与用户交互，并可完成数据采集功能的控件。--tab 1 item 5
        </div>
      </div>
    </tiny-tab-item>
    <tiny-tab-item title="数据组件" name="second">
      <div class="bg-color-bg-6 w-full h-60 mr-4">
        数据组件,提供了非常强大数据表格功能，在Grid可以展示数据列表，可以对数据列表进行选择、编辑等。--tab 2
      </div>
    </tiny-tab-item>
    <tiny-tab-item title="导航组件" name="third">
      <div class="bg-color-bg-7 w-full h-60 mr-4">导航组件,帮助网站访问者浏览站点的组件。--tab 3</div>
    </tiny-tab-item>
    <tiny-tab-item title="业务组件" name="fourth">
      <div class="bg-color-bg-8 w-full h-60 mr-4">业务组件,与业务紧密相关实现某种业务功能的组件集。--tab 4</div>
    </tiny-tab-item>
  </tiny-tabs>
</template>

<script>
import { TinyTabs, TinyTabItem } from '@opentiny/vue'

export default {
  components: {
    TinyTabs,
    TinyTabItem
  },
  data() {
    return {
      activeName: 'first'
    }
  }
}
</script>
