<template>
  <div class="demo">
    <p class="demo-title">勾选-单选</p>
    <div>
      <tiny-list
        class="demo-list"
        v-for="item of dataList"
        :key="item.id"
        :id="item.id"
        :content="item.content"
        :sub-text="item.subtext"
        @click="clickFn"
      >
        <template #suffix>
          <tiny-radio v-model="value1" :label="item.id"></tiny-radio>
        </template>
      </tiny-list>
    </div>
    <div class="withlist">
      <tiny-list
        class="demo-list"
        v-for="item of dataList1"
        :key="item.id"
        :id="item.id"
        :content="item.content"
        :sub-text="item.subtext"
        :content-des="item.contentdes"
        @click="clickFn"
      >
        <template #suffix>
          <tiny-radio v-model="value1" :label="item.id"></tiny-radio>
        </template>
      </tiny-list>
    </div>
  </div>
</template>

<script>
import { Radio, List } from '@opentiny/vue'

export default {
  components: {
    TinyRadio: Radio,
    TinyList: List
  },
  data() {
    return {
      value1: '1',
      value2: '1',
      dataList: [
        {
          id: '1',
          content: '主文本1',
          subtext: '次文本1',
          contentdes: '这是描述文本1'
        },
        {
          id: '2',
          content: '主文本2',
          subtext: '次文本2',
          contentdes: '这是描述文本2'
        }
      ],
      dataList1: [
        {
          id: '1',
          content: '主文本1',
          subtext: '',
          contentdes: '这是描述文本1'
        },
        {
          id: '2',
          content: '主文本2',
          subtext: '',
          contentdes: '这是描述文本2'
        }
      ]
    }
  },
  methods: {
    clickFn(list) {
      if (list.id) {
        this.value1 = list.id
      }
    }
  }
}
</script>
<style>
.demo {
  background: #eeeeee;
  height: 100%;
  overflow-y: scroll;
}
.demo-title {
  padding-right: 16px;
  padding-left: 16px;
  margin-top: 0.77em;
  margin-bottom: 0.3em;
  color: #666;
  font-size: 14px;
}
.demo-list {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  padding: 8px 16px;
}
.withlist {
  margin-top: 20px;
}
.demo .tiny-mobile-list__content-des {
  margin-top: 4px;
  color: #999;
  font-size: 12px;
  line-height: 1.6;
  text-align: justify;
}
.demo .tiny-mobile-radio__label {
  display: none;
}
</style>
