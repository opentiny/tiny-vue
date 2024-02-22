<template>
  <div>
    <tiny-column-list-item
      v-model="value"
      :show-checkbox="true"
      image="/static/images/1.jpg"
      size="medium"
      :options="options1"
      :flex-grow="[1, 1]"
      class="mb-3"
      @icon-click="iconClick"
      label="1"
    >
      <template #column1>
        <ul class="text-color-fill-secondary">
          <li class="text-sm text-color-text-primary font-medium mb-1 sm:mb-1.5">智能手机智能手机</li>
          <li class="mb-1 sm:mb-1.5"><span>品牌：</span><span class="text-color-text-primary">手机</span></li>
          <li><span>编码：</span><span class="text-color-text-primary">HYFVFHJGG1354</span></li>
        </ul>
      </template>
      <template #column2>
        <ul class="text-color-fill-secondary">
          <li class="mb-1 sm:mb-1.5"><span>规格型号：</span><span class="text-color-text-primary">256G</span></li>
          <li class="mb-1 sm:mb-1.5"><span>计量单位：</span><span class="text-color-text-primary">1</span></li>
          <li><span>尺寸：</span><span class="text-color-text-primary">6.5英寸</span></li>
        </ul>
      </template>
    </tiny-column-list-item>
    <tiny-column-list-item image="/static/images/1.jpg" size="medium" :options="options2" class="mb-3">
      <template #column1>
        <ul class="text-color-fill-secondary">
          <li class="text-sm text-color-text-primary font-medium mb-1 sm:mb-1.5">智能手机智能手机</li>
          <li class="mb-1 sm:mb-1.5"><span>品牌：</span><span class="text-color-text-primary">手机</span></li>
          <li><span>编码：</span><span class="text-color-text-primary">HYFVFHJGG1354</span></li>
        </ul>
      </template>
      <template #column2>
        <ul class="text-color-fill-secondary">
          <li class="mb-1 sm:mb-1.5"><span>规格型号：</span><span class="text-color-text-primary">256G</span></li>
          <li class="mb-1 sm:mb-1.5"><span>计量单位：</span><span class="text-color-text-primary">1</span></li>
          <li><span>尺寸：</span><span class="text-color-text-primary">6.5英寸</span></li>
        </ul>
      </template>
      <template #column3>
        <ul class="text-color-fill-secondary">
          <li class="mb-1 sm:mb-1.5"><span>最小包装数：</span><span class="text-color-text-primary">2</span></li>
          <li class="mb-1 sm:mb-1.5"><span>参考价格：</span><span class="text-color-text-primary">8888.55</span></li>
          <li><span>换算率：</span><span class="text-color-text-primary">55</span></li>
        </ul>
      </template>
      <template #column4>
        <ul class="text-color-fill-secondary">
          <li class="mb-1 sm:mb-1.5"><span>上架时间：</span><span class="text-color-text-primary">2023-01-31</span></li>
          <li class="mb-1 sm:mb-1.5"><span>顺序号：</span><span class="text-color-text-primary">123456</span></li>
        </ul>
      </template>
    </tiny-column-list-item>
    <tiny-column-list-item v-model="value" :show-checkbox="true" label="2" disabled>
      <template #column1>
        <ul>
          <li class="text-sm text-color-text-primary font-medium mb-1 sm:mb-1.5">智能手机智能手机</li>
          <li class="mb-1 sm:mb-1.5 text-color-fill-secondary">
            <span>品牌：</span><span class="text-color-text-primary">手机</span>
          </li>
          <li class="text-color-fill-secondary">
            <span>编码：</span><span class="text-color-text-primary">HYFVFHJGG1354</span>
          </li>
        </ul>
      </template>
      <template #column2>
        <ul class="text-color-fill-secondary">
          <li class="mb-1 sm:mb-1.5"><span>规格型号：</span><span class="text-color-text-primary">256G</span></li>
          <li class="mb-1 sm:mb-1.5"><span>计量单位：</span><span class="text-color-text-primary">1</span></li>
          <li><span>尺寸：</span><span class="text-color-text-primary">6.5英寸</span></li>
        </ul>
      </template>
      <template #column3>
        <ul class="text-color-fill-secondary">
          <li class="mb-1 sm:mb-1.5"><span>最小包装数：</span><span class="text-color-text-primary">2</span></li>
          <li class="mb-1 sm:mb-1.5"><span>参考价格：</span><span class="text-color-text-primary">8888.55</span></li>
          <li><span>换算率：</span><span class="text-color-text-primary">55</span></li>
        </ul>
      </template>
      <template #column4>
        <ul class="text-color-fill-secondary">
          <li class="mb-1 sm:mb-1.5"><span>上架时间：</span><span class="text-color-text-primary">2023-01-31</span></li>
          <li class="mb-1 sm:mb-1.5"><span>顺序号：</span><span class="text-color-text-primary">123456</span></li>
        </ul>
      </template>
    </tiny-column-list-item>
  </div>
</template>

<script>
import { ColumnListItem, Modal } from '@opentiny/vue'
import { iconDel, iconWriting, iconAscending, iconShare } from '@opentiny/vue-icon'

export default {
  components: {
    TinyColumnListItem: ColumnListItem
  },
  data() {
    return {
      value: ['1'],
      options1: [
        {
          text: '删除列表',
          icon: iconDel()
        },
        {
          text: '编辑',
          icon: iconWriting(),
          disabled: true
        },
        {
          text: '排序',
          icon: iconAscending()
        },
        {
          text: '分享',
          icon: iconShare(),
          disabled: true
        }
      ],
      options2: [
        {
          text: '删除列表',
          icon: iconDel()
        },
        {
          text: '编辑',
          icon: iconWriting()
        },
        {
          text: '排序',
          icon: iconAscending()
        },
        {
          text: '分享',
          icon: iconShare(),
          hidden: true
        }
      ]
    }
  },
  methods: {
    iconClick(item, index) {
      Modal.message({
        message: `当前点击的是第${index + 1}个图标`,
        status: 'info'
      })
    }
  }
}
</script>
