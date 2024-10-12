<template>
  <tiny-carousel arrow="never" height="300px" indicator-position="none" ref="carouselRef" :initial-index="index - 1">
    <div class="btn-layout">
      <div>
        <tiny-button type="text" @click="prev" :disabled="disabledLeft" :icon="TinyIconChevronLeft"> </tiny-button>
      </div>
      <div>
        <tiny-button type="text" @click="next" :disabled="disabledRight" :icon="TinyIconChevronRight"></tiny-button>
      </div>
    </div>
    <tiny-carousel-item class="carousel-item-demo" v-for="(item, pos) in state.cardData" :key="item">
      <template #default>
        <div class="card-layout" v-for="num in state.cardData.length" :key="num">
          <div v-if="num === pos + 1" :class="['card-dsp']">
            <tiny-card
              v-for="(child, childIndex) in item.children"
              :key="childIndex"
              :title="child.cardTitle"
              :type="child.cardType"
              :src="child.cardSrc"
              custom-class="card-demo"
              @click="curIndex = childIndex"
            >
              <div>{{ child.content }}</div>
            </tiny-card>
          </div>
        </div>
      </template>
    </tiny-carousel-item>
  </tiny-carousel>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import {
  Carousel as TinyCarousel,
  CarouselItem as TinyCarouselItem,
  Card as TinyCard,
  Button as TinyButton
} from '@opentiny/vue'
import { IconChevronRight, IconChevronLeft } from '@opentiny/vue-icon'

const TinyIconChevronRight = IconChevronRight()
const TinyIconChevronLeft = IconChevronLeft()

let curIndex = ref(0)
const index = ref(1)
let disabledLeft = ref(false)
let disabledRight = ref(false)
const carouselRef = ref()
const dsj = ref(`${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/dsj.png`)
const userHead = ref(`${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/user-head.png`)
const state = reactive({
  cardData: [
    {
      children: [
        {
          cardTitle: '1-1',
          cardType: 'text',
          cardSrc: '',
          content: '1-1-content'
        },
        {
          cardTitle: '1-2',
          cardType: 'image',
          cardSrc: `${dsj.value}`,
          content: '1-2-content'
        },
        {
          cardTitle: '1-3',
          cardType: 'logo',
          cardSrc: `${userHead.value}`,
          content: '1-3-content'
        },
        {
          cardTitle: '1-4',
          cardType: 'logo',
          cardSrc: `${userHead.value}`,
          content: '1-4-content'
        }
      ]
    },
    {
      children: [
        {
          cardTitle: '2-1',
          cardType: 'text',
          cardSrc: '',
          content: '1-1-content'
        },
        {
          cardTitle: '2-2',
          cardType: 'image',
          cardSrc: `${dsj.value}`,
          content: '1-2-content'
        },
        {
          cardTitle: '2-3',
          cardType: 'logo',
          cardSrc: `${userHead.value}`,
          content: '1-3-content'
        },
        {
          cardTitle: '2-4',
          cardType: 'logo',
          cardSrc: `${userHead.value}`,
          content: '2-4-content'
        }
      ]
    }
  ]
})

onMounted(() => {
  disableStatus()
})

const next = () => {
  index.value = Math.min(index.value + 1, 8)
  carouselRef.value.next()
  disableStatus()
}

const prev = () => {
  index.value = Math.max(index.value - 1, 0)
  carouselRef.value.prev()
  disableStatus()
}

const disableStatus = () => {
  disabledRight.value = false
  disabledLeft.value = false
  if (index.value === 1) {
    disabledLeft.value = true
    disabledRight.value = false
  }
  if (index.value === state.cardData.length) {
    disabledRight.value = true
    disabledLeft.value = false
  }
}
</script>

<style lang="less" scoped>
.carousel-item-demo {
  display: flex;
  justify-content: center;
}
.card-dsp {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
}
.mb {
  margin-bottom: 20px;
}
.card-demo {
  width: 25%;
  margin-right: 8px;
  height: 200px;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    border-color: #1476ff;
  }
}
.btn-layout {
  position: relative;
  display: flex;
  justify-content: space-between;
  top: 45%;
  z-index: 10;
  padding: 0 76px;
}
/deep/ .tiny-button.tiny-button--text.tiny-button.is-only-icon {
  font-size: 16px;
  border: none;
  .tiny-svg {
    fill: #808080;
  }
  &.is-disabled {
    .tiny-svg {
      fill: #c2c2c2;
    }
  }
  &:hover {
    background-color: transparent;
  }
  &:not(.is-disabled) {
    .tiny-svg:hover {
      fill: #191919;
    }
  }
}
</style>
