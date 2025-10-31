<template>
  <div class="demo">
    <tiny-search-box v-model="tags" :items="items" editable />
  </div>
</template>

<script>
import TinySearchBox from "@opentiny/vue-search-box";

export default {
  components: {
    TinySearchBox
  },
  data() {
    return {
      items: [
        {
          label: "名称",
          field: "testName",
          replace: true,
          placeholder: "我是自定义名称的占位符",
          options: [
            {
              label: "ecs-1",
            },
            {
              label: "obs-2",
            },
            {
              label: "vpc-1",
            },
            {
              label: "evs-2",
            },
            {
              label: "tms-1",
            },
          ],
        },
        {
          label: "可用地区",
          field: "testRegion",
          type: "checkbox",
          mergeTag: true,
          allowCreate: true,
          placeholder: "我是自定义可选地区的占位符",
          editAttrDisabled: true, // 编辑状态此属性禁用，不可变更
          options: [
            {
              label: "华南区",
              id: "2-1",
            },
            {
              label: "华北区",
              id: "2-2",
            },
            {
              label: "西北区",
              id: "2-3",
            },
            {
              label: "西南区",
              id: "2-4",
            },
            {
              label: "东南区",
              id: "2-5",
            },
            {
              label: "东北区",
              id: "2-6",
            },
            {
              label: "华东区",
              id: "2-7",
            },
            {
              label: "华西区",
              id: "2-8",
            },
          ],
        },
        {
          label: "大小",
          field: "size",
          type: "numRange",
          placeholder: "我是自定义大小的占位符",
          unit: "GB",
          start: -1,
          min: -1,
          max: 20,
        },
      ],
      tags: [
        {
          field: "testRegion",
          label: "可用地区",
          type: "checkbox",
          value: "华南区 | 西北区 | 华北区 | 西南区 | 东南区",
          options: [
            {
              label: "华南区",
              id: "2-1",
            },
            {
              label: "西北区",
              id: "2-3",
            },
            {
              label: "华北区",
              id: "2-2",
            },
            {
              label: "西南区",
              id: "2-4",
            },
            {
              label: "东南区",
              id: "2-5",
            },
          ],
        },
      ]
    }
  }
}
</script>
