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
    <tiny-carousel-item class="carousel-item-demo" v-for="(item, pos) in cardData" :key="item">
      <template #default>
        <div class="card-layout" v-for="num in cardData.length" :key="num">
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

<script>
import { Carousel, CarouselItem, Card, Button } from '@opentiny/vue'
import { IconChevronRight, IconChevronLeft } from '@opentiny/vue-icon'

export default {
  components: {
    TinyCarousel: Carousel,
    TinyCarouselItem: CarouselItem,
    TinyCard: Card,
    TinyButton: Button
  },
  data() {
    return {
      TinyIconChevronRight: IconChevronRight(),
      TinyIconChevronLeft: IconChevronLeft(),
      curIndex: 0,
      index: 1,
      disabledLeft: false,
      disabledRight: false,
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
              cardSrc: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/dsj.png`,
              content: '1-2-content'
            },
            {
              cardTitle: '1-3',
              cardType: 'logo',
              cardSrc: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/user-head.png`,
              content: '1-3-content'
            },
            {
              cardTitle: '1-4',
              cardType: 'logo',
              cardSrc: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/user-head.png`,
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
              cardSrc: `/static/images/dsj.png`,
              content: '1-2-content'
            },
            {
              cardTitle: '2-3',
              cardType: 'logo',
              cardSrc: `/static/images/user-head.png`,
              content: '1-3-content'
            },
            {
              cardTitle: '2-4',
              cardType: 'logo',
              cardSrc: `/static/images/user-head.png`,
              content: '2-4-content'
            }
          ]
        }
      ]
    }
  },
  mounted() {
    this.disableStatus()
  },
  methods: {
    next() {
      this.index = Math.min(this.index + 1, 8)
      this.$refs.carouselRef.next()
      this.disableStatus()
    },
    prev() {
      this.index = Math.max(this.index - 1, 0)
      this.$refs.carouselRef.prev()
      this.disableStatus()
    },
    disableStatus() {
      this.disabledRight = false
      this.disabledLeft = false
      if (this.index === 1) {
        this.disabledLeft = true
        this.disabledRight = false
      }
      if (this.index === this.cardData.length) {
        this.disabledRight = true
        this.disabledLeft = false
      }
    }
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
