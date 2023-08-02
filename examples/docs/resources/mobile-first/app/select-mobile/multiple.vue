<template>
  <div>
    <div>
      <tiny-button @click="boxVisibility1 = true">单选</tiny-button>
      <p>值：{{ activeName1 }}</p>
      <p>text 文本：{{ text1 }}</p>
    </div>
    <br />
    <div>
      <tiny-button @click="boxVisibility2 = true">多选</tiny-button>
      <p>值：{{ activeName2 }}</p>
      <p>text 文本：{{ text2 }}</p>
    </div>
    <br />
    <div>
      <tiny-button @click="boxVisibility3 = true">多选</tiny-button>
      <p>值：{{ activeName3 }}</p>
      <p>设置文本分隔符为 / <br />text 文本：{{ text3 }}</p>
    </div>

    <tiny-select-mobile v-model="activeName1" title="标题1" :search-config="searchConfig" :menus="menus" :visible="boxVisibility1" @update:visible="boxVisibility1 = $event" @update:text="text1 = $event"></tiny-select-mobile>
    <tiny-select-mobile v-model="activeName2" title="标题2" multiple :search-config="searchConfig" :show-footer="true" :menus="menus" :visible="boxVisibility2" @update:visible="boxVisibility2 = $event" @update:text="text2 = $event"></tiny-select-mobile>

    <tiny-select-mobile v-model="activeName3" title="标题3" multiple :search-config="searchConfig" :show-footer="true" :menus="menus" text-field="label" :visible="boxVisibility3" @update:visible="boxVisibility3 = $event" text-split=" / " @update:text="text3 = $event"></tiny-select-mobile>
  </div>
</template>

<script>
import { SelectMobile, Button } from '@opentiny/vue'

export default {
  components: {
    TinySelectMobile: SelectMobile,
    TinyButton: Button
  },
  data() {
    const list = [
      {
        id: 1,
        label: '进行中'
      },
      {
        id: 2,
        label: '未开始'
      },
      {
        id: 3,
        label: '已完成'
      },
      {
        id: 4,
        label:
          '已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期'
      }
    ]

    return {
      activeName1: 1,
      activeName2: [1, 2],
      activeName3: [1, 3],
      text1: '',
      text2: '',
      text3: '',
      boxVisibility1: false,
      boxVisibility2: false,
      boxVisibility3: false,
      searchConfig: {
        options: list
      },
      menus: list
    }
  },
  methods: {}
}
</script>
