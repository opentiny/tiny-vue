<template>
  <div>
    <p class="demo-pop">组件属性 draggable 默认为 true，不需设置就可以在标题栏按住鼠标拖动弹出窗口：</p>
    <tiny-popeditor v-model="value" :grid-op="gridOp" text-field="name" value-field="id"></tiny-popeditor>
    <br /><br />
    <p class="demo-pop">如果设置属性 draggable 为 false，那么就不能拖动弹出窗口：</p>
    <tiny-popeditor
      v-model="value"
      :grid-op="gridOp"
      text-field="name"
      value-field="id"
      :draggable="false"
    ></tiny-popeditor>
  </div>
</template>

<script>
import { TinyPopeditor } from '@opentiny/vue'

export default {
  components: {
    TinyPopeditor
  },
  data() {
    const dataset = [
      {
        id: '1',
        name: 'GFD 科技 YX 公司',
        city: '福州',
        province: '福建'
      },
      {
        id: '2',
        name: 'WWW 科技 YX 公司',
        city: '深圳',
        province: '广东'
      },
      {
        id: '3',
        name: 'RFV 有限责任公司',
        city: '中山',
        province: '广东'
      },
      {
        id: '4',
        name: 'TGB 科技 YX 公司',
        city: '龙岩',
        province: '福建'
      },
      {
        id: '5',
        name: 'YHN 科技 YX 公司',
        city: '韶关',
        province: '广东'
      },
      {
        id: '6',
        name: 'WSX 科技 YX 公司',
        city: '黄冈',
        province: '武汉'
      },
      {
        id: '7',
        name: 'KBG 物业 YX 公司',
        city: '赤壁',
        province: '武汉'
      },
      {
        id: '8',
        name: '深圳市福德宝网络技术 YX 公司',
        province: '广东',
        city: '深圳'
      },
      {
        id: '9',
        name: 'KBG 物业 YX 公司',
        city: '赤壁',
        province: '武汉'
      },
      {
        id: '10',
        name: '深圳市福德宝网络技术 YX 公司',
        province: '广东',
        city: '深圳'
      }
    ]

    return {
      value: '',
      gridOp: {
        columns: [
          {
            field: 'id',
            title: 'ID',
            width: 50
          },
          {
            field: 'name',
            title: '名称',
            showOverflow: 'tooltip'
          },
          {
            field: 'province',
            title: '省份',
            width: 80
          },
          {
            field: 'city',
            title: '城市',
            width: 80
          }
        ],
        data: dataset
      }
    }
  }
}
</script>

<style scoped>
.demo-pop {
  margin-bottom: 8px;
  font-size: 14px;
}
</style>
