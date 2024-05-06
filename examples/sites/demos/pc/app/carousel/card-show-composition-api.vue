<template>
  <tiny-carousel height="300px" arrow="always" indicator-position="outside">
    <tiny-carousel-item class="carousel-item-demo" v-for="(item, pos) in state.cardData" :key="item">
      <template #default>
        <div v-for="num in state.cardData.length" :key="num">
          <div v-if="num === pos + 1" :class="['card-dsp']">
            <tiny-card
              v-for="(child, childIndex) in item.children"
              :key="childIndex"
              :title="child.cardTitle"
              :type="child.cardType"
              :src="child.cardSrc"
              custom-class="card-demo"
              @click="curIndex = childIndex"
              :status="curIndex === childIndex ? 'success' : ''"
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
import { ref, reactive } from 'vue'
import { Carousel as TinyCarousel, CarouselItem as TinyCarouselItem, Card as TinyCard } from '@opentiny/vue'

let curIndex = ref(0)
const dsj = ref(`/static/images/dsj.png`)
const userHead = ref(`/static/images/user-head.png`)
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
        }
      ]
    }
  ]
})
</script>

<style scoped>
.card-dsp {
  display: flex;
  justify-content: space-between;
}
.mb {
  margin-bottom: 20px;
}
.card-demo {
  width: 30%;
  height: 300px;
}
.card-demo:hover {
  border-color: #1476ff;
}
</style>
