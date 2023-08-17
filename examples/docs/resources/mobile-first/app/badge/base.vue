<template>
  <div class="w-3/5">
    <span>数字标记 : </span>
    <tiny-badge :value="0"></tiny-badge>
    <tiny-badge is-dot></tiny-badge>
    <div class="flex items-center my-4">
      <tiny-badge>点标记 :</tiny-badge>
      <div class="flex justify-between items-center w-80">
        <tiny-badge is-dot> 我的待办 </tiny-badge>
        <tiny-badge type="icon" is-dot>
          <tiny-user-head type="icon"></tiny-user-head>
        </tiny-badge>
        <tiny-badge type="icon" is-dot>
          <tiny-user-head class="head-item" type="label" round v-model="text"></tiny-user-head>
        </tiny-badge>
        <tiny-badge type="icon" is-dot>
          <tiny-user-head type="icon" :value="IconSmile"></tiny-user-head>
        </tiny-badge>
      </div>
    </div>
    <div class="flex items-center my-4">
      <span>数字标记 : </span>
      <div class="flex justify-between items-center w-80">
        <tiny-badge :value="0"> 我的待办 </tiny-badge>
        <tiny-badge :value="0" type="icon">
          <tiny-user-head type="icon" round></tiny-user-head>
        </tiny-badge>
        <tiny-badge :value="0" type="icon">
          <tiny-user-head class="head-item" type="label" round v-model="text"></tiny-user-head>
        </tiny-badge>
        <tiny-badge :value="0" type="icon">
          <tiny-user-head type="icon" :value="IconSmile"></tiny-user-head>
        </tiny-badge>
        <tiny-badge :value="0" type="icon">
          <tiny-user-head type="icon"></tiny-user-head>
        </tiny-badge>
      </div>
    </div>
  </div>
</template>

<script>
import { Badge } from '@opentiny/vue'
import { UserHead } from '@opentiny/vue'
import { UserContact } from '@opentiny/vue'
import { IconSmile } from '@opentiny/vue-icon'

export default {
  components: {
    TinyBadge: Badge,
    TinyUserHead: UserHead,
    TinyUserContact: UserContact
  },
  data() {
    return {
      text: '文字',
      IconSmile: IconSmile()
    }
  }
}
</script>
