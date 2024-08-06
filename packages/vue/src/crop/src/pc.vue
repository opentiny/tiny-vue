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
          <img :src="state.src" ref="cropImage" id="crops" :alt="state.alt" />
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

// const $constants = {
//   CROP_IMAGE: 'ui.crop.cropImage'
// }

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
    // _constants: {
    //   type: Object,
    //   default: () => $constants
    // },
    alt: {
      type: String,
      default: 'image'
    },
    aspectRatio: {
      type: Number,
      default: 16 / 9
    },
    autoCrop: {
      type: Boolean,
      default: true
    },
    autoCropArea: {
      type: Number,
      default: 0.8
    },
    background: {
      type: Boolean,
      default: true
    },
    center: {
      type: Boolean,
      default: false
    },
    cropType: {
      type: String,
      default: 'base64'
    },
    cropvisible: {
      type: Boolean,
      default: false
    },
    dragMode: {
      type: String,
      default: 'crop'
    },
    guides: {
      type: Boolean,
      default: true
    },
    maxSize: {
      type: String,
      default: '1M'
    },

    minContainerHeight: {
      type: Number,
      default: 300
    },
    // 同上
    minContainerWidth: {
      type: Number,
      default: 652
    },
    minCropBoxHeight: {
      type: Number,
      default: 0
    },
    minCropBoxWidth: {
      type: Number,
      default: 0
    },
    modal: {
      type: Boolean,
      default: true
    },
    movable: {
      type: Boolean,
      default: true
    },
    plugin: {
      type: [Object, Function],
      default: () => Cropper
    },
    quality: {
      type: Number,
      default: 0.92,
      validator: (value: number) => value <= 1 && value > 0
    },
    rotatable: {
      type: Boolean,
      default: true
    },
    src: {
      type: String,
      default: ''
    },
    viewMode: {
      type: Number,
      default: 0
    },
    wheelZoomRatio: {
      type: Number,
      default: 0.1
    },
    zoomOnWheel: {
      type: Boolean,
      default: true
    },
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
