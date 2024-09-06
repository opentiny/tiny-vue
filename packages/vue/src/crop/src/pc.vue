<!--
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 -->
<template>
  <div class="tiny-crop__wrapper">
    <div class="tiny-crop" v-show="state.cropvisible">
      <div class="tiny-crop__dialog">
        <input ref="cropInput" type="file" name="image" accept="image/*" @change="setImage" />
        <div class="tiny-crop__dialog-cropper">
          <img :src="state.src" ref="cropImage" id="crops" :alt="alt" />
        </div>
        <div class="tiny-crop__dialog-content__handle">
          <div class="tiny-crop__dialog-content__handle__button">
            <div v-for="(item, index) in state.renderIcon" class="iconButton" :key="index">
              <div v-if="!item.split" :title="item.title">
                <component :is="item.icon" @click.prevent="item.method" class="iconButtonset"></component>
              </div>
              <div v-else class="iconButton__split"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { $prefix, setup, defineComponent } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/crop/vue'
import {
  iconConmentRefresh,
  iconNew,
  iconZoomIn,
  iconZoomOut,
  iconRepeat,
  iconRefres,
  iconClose,
  iconYes,
  iconCrop
} from '@opentiny/vue-icon'
import Cropper from 'cropperjs'
import 'cropperjs/dist/cropper.css'

export default defineComponent({
  name: $prefix + 'Crop',
  components: {
    IconConmentRefresh: iconConmentRefresh(),
    IconNew: iconNew(),
    IconZoomIn: iconZoomIn(),
    IconZoomOut: iconZoomOut(),
    IconRepeat: iconRepeat(),
    IconRefres: iconRefres(),
    IconClose: iconClose(),
    IconYes: iconYes(),
    IconCrop: iconCrop()
  },
  props: {
    /** 设置图片上的alt属性 */
    alt: {
      type: String,
      default: 'image'
    },
    /** 裁剪框的宽高比，默认 16/9 */
    aspectRatio: {
      type: Number,
      default: 16 / 9
    },
    /** 初始化时，是否自动显示裁剪框，默认 true */
    autoCrop: {
      type: Boolean,
      default: true
    },
    /** 定义自动裁剪面积大小（百分比） 默认0.8 */
    autoCropArea: {
      type: Number,
      default: 0.8
    },
    /** 是否显示容器的网格背景 默认true */
    background: {
      type: Boolean,
      default: true
    },
    /** 裁剪框是否在图片正中心,并显示一个 + 号 默认false */
    center: {
      type: Boolean,
      default: false
    },
    /** 设置图片裁剪后返回的类型，可配置为 blob 和 base64  默认 base64 */
    cropType: {
      type: String,
      default: 'base64'
    },
    /** 设置裁剪弹框是否可见 默认false */
    cropvisible: {
      type: Boolean,
      default: false
    },
    /** 定义 cropper 的拖拽模式，默认 crop ;'crop'： 可以产生一个新的裁剪框 3 。'move'：只可以移动图片 3 。'none'： 什么也不处理   */
    dragMode: {
      type: String,
      default: 'crop'
    },
    /** 是否在裁剪框上方显示虚线 默认true */
    guides: {
      type: Boolean,
      default: true
    },
    /** 设置待裁剪图片的最大大小，默认为 1M */
    maxSize: {
      type: String,
      default: '1M'
    },
    /** 容器的最小高度 默认 300 */
    minContainerHeight: {
      type: Number,
      default: 300
    },
    /** 容器的最小宽度 默认 652 */
    minContainerWidth: {
      type: Number,
      default: 652
    },
    /** 裁剪层的最小高度  默认0 */
    minCropBoxHeight: {
      type: Number,
      default: 0
    },
    /** 裁剪层的最小宽度 默认0 */
    minCropBoxWidth: {
      type: Number,
      default: 0
    },
    /** 是否显示图片上方裁剪框下方的黑色模态 默认true */
    modal: {
      type: Boolean,
      default: true
    },
    /** 是否允许可以移动后面的图片 默认true */
    movable: {
      type: Boolean,
      default: true
    },
    plugin: {
      type: [Object, Function],
      default: () => Cropper
    },
    /** 设置图片裁剪后的压缩比例，值在 0-1 之间 默认0.92 */
    quality: {
      type: Number,
      default: 0.92,
      validator: (value: number) => value <= 1 && value > 0
    },
    /** 是否允许旋转图像;默认为 true */
    rotatable: {
      type: Boolean,
      default: true
    },
    /** 默认裁剪的源图片 */
    src: {
      type: String,
      default: ''
    },
    /** 定义 cropper 的视图模式,默认 0 ;0：没有限制，3 可以移动到 2 外。1：3 只能在 2 内移动。2：2 图片不全部铺满 1 （即缩小时可以有一边出现空隙）。3：2 图片填充整个 1 */
    viewMode: {
      type: Number,
      default: 0
    },
    /** 用鼠标移动图像时，定义缩放比例 默认 0.1 */
    wheelZoomRatio: {
      type: Number,
      default: 0.1
    },
    /** 是否可以通过滚动鼠标滚轮来缩放图像 默认true */
    zoomOnWheel: {
      type: Boolean,
      default: true
    },
    /** 是否允许放大图像 默认true */
    zoomable: {
      type: Boolean,
      default: true
    }
  },
  emits: ['update:cropvisible', 'update:visible', 'ready', 'cropstart', 'cropmove', 'cropend', 'crop', 'cropdata'],
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
})
</script>
