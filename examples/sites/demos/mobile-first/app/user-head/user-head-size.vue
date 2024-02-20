<template>
  <div>
    <div class="inline-flex justify-around w-full mt-10 items-center">
      <tiny-user-head
        class="inline-flex flex-col items-center"
        :size="24"
        type="image"
        v-model="imgUrl"
        round
      ></tiny-user-head>
      <tiny-user-head
        class="inline-flex flex-col items-center"
        :size="32"
        type="image"
        v-model="imgUrl"
        round
      ></tiny-user-head>
      <tiny-user-head class="inline-flex flex-col items-center" type="image" v-model="imgUrl" round></tiny-user-head>
      <tiny-user-head
        class="inline-flex flex-col items-center"
        :size="48"
        type="image"
        v-model="imgUrl"
        round
      ></tiny-user-head>
      <tiny-user-head
        class="inline-flex flex-col items-center"
        :size="64"
        type="image"
        v-model="imgUrl"
        round
      ></tiny-user-head>
      <tiny-user-head
        class="inline-flex flex-col items-center"
        :size="80"
        type="image"
        v-model="imgUrl"
        round
      ></tiny-user-head>
    </div>
    <br />
    <br />
    <br />
    <br />
    <div class="inline-flex justify-around w-full mt-10 items-center">
      <tiny-user-head class="inline-flex flex-col items-center" :size="24" type="label" v-model="text"></tiny-user-head>
      <tiny-user-head class="inline-flex flex-col items-center" :size="32" type="label" v-model="text"></tiny-user-head>
      <tiny-user-head class="inline-flex flex-col items-center" type="label" v-model="text"></tiny-user-head>
      <tiny-user-head class="inline-flex flex-col items-center" :size="48" type="label" v-model="text"></tiny-user-head>
      <tiny-user-head class="inline-flex flex-col items-center" :size="64" type="label" v-model="text"></tiny-user-head>
      <tiny-user-head class="inline-flex flex-col items-center" :size="80" type="label" v-model="text"></tiny-user-head>
    </div>
  </div>
</template>

<script>
import { UserHead } from '@opentiny/vue'

export default {
  components: {
    TinyUserHead: UserHead
  },
  data() {
    return {
      text: '文字',
      imgUrl: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/1.jpg`
    }
  }
}
</script>
