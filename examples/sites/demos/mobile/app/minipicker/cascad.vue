<template>
  <div class="tiny-mobile-mini-picker-demo">
    <tiny-form label-width="60px">
      <tiny-form-item label="地点">
        <tiny-input v-model="val" @focus="fn" placeholder="请选择" type="form" readonly vertical></tiny-input>
      </tiny-form-item>
    </tiny-form>
    <tiny-mini-picker
      @confirm="getVal"
      ref="picker"
      title="我是级联选择器"
      :columns="columns3"
      :visible="boxVisibility"
      @update:visible="boxVisibility = $event"
    ></tiny-mini-picker>
  </div>
</template>

<script lang="jsx">
import { Form, FormItem, Input, MiniPicker } from '@opentiny/vue'

export default {
  components: {
    TinyMiniPicker: MiniPicker,
    TinyForm: Form,
    TinyFormItem: FormItem,
    TinyInput: Input
  },
  data() {
    return {
      boxVisibility: false,
      val: '',
      columns3: [
        {
          text: '浙江',
          children: [
            {
              text: '杭州',
              children: [{ text: '西湖区' }, { text: '余杭区' }]
            },
            {
              text: '温州',
              children: [{ text: '鹿城区' }, { text: '瓯海区' }]
            }
          ]
        },
        {
          text: '福建',
          children: [
            {
              text: '福州',
              children: [{ text: '鼓楼区' }, { text: '台江区' }]
            },
            {
              text: '厦门',
              children: [{ text: '思明区' }, { text: '海沧区' }]
            }
          ]
        },
        {
          text: '湖南',
          children: [
            {
              text: '长沙',
              children: [{ text: '天心区' }, { text: '雨花区' }]
            },
            {
              text: '株洲',
              children: [{ text: '芦淞区' }, { text: '天元区' }]
            }
          ]
        },
        {
          text: '广东',
          children: [
            {
              text: '深圳',
              children: [{ text: '福田区' }, { text: '罗湖区' }]
            },
            {
              text: '珠海',
              children: [{ text: '香洲区' }, { text: '斗门区' }]
            }
          ]
        },
        {
          text: '湖北',
          children: [
            {
              text: '武汉',
              children: [{ text: 'aa区' }, { text: 'bb区' }]
            },
            {
              text: '荆州',
              children: [{ text: 'cc区' }, { text: 'dd区' }]
            }
          ]
        },
        {
          text: '江苏',
          children: [
            {
              text: 'ww',
              children: [{ text: 'ja区' }, { text: 'jb区' }]
            },
            {
              text: 'ee',
              children: [{ text: 'jc区' }, { text: 'jd区' }]
            }
          ]
        }
      ]
    }
  },
  methods: {
    fn() {
      this.boxVisibility = true
    },
    getVal(val) {
      this.val = val.join(',')
    }
  }
}
</script>
