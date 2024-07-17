<template>
  <div class="flex justify-between">
    <tiny-time-line :data="data">
      <template #left="data">
        <div class="ml-1.5 -mt-1.5">
          <tiny-user-head type="image" round v-model="imgUrl" :size="32"></tiny-user-head>
        </div>
        <span class="ml-2 inline-block text-xs leading-5 mb-6">
          {{ data.slotScope.title }}
        </span>
      </template>
    </tiny-time-line>

    <tiny-time-line :data="data1">
      <template #left="data1">
        <div class="ml-1.5 -mt-1.5">
          <tiny-user-head type="image" round v-model="imgUrl" :size="32"></tiny-user-head>
        </div>
        <span class="ml-2 inline-block text-xs leading-5 mb-6">
          {{ data1.slotScope.title }}
        </span>
      </template>
    </tiny-time-line>
  </div>
</template>

<script>
import { TimeLineNew, UserHead } from '@opentiny/vue'
import { IconLoading } from '@opentiny/vue-icon'

export default {
  components: {
    TinyTimeLine: TimeLineNew,
    TinyUserHead: UserHead
  },
  data() {
    return {
      imgUrl: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/1.jpg`,
      data: [{ title: '节点标题1' }, { title: '节点标题2' }, { title: '节点标题3' }, { title: '节点标题4' }],
      data1: [
        { title: '节点标题1' },
        { title: '节点标题2' },
        { title: '节点标题3' },
        { title: '节点标题4' },
        { title: '节点标题5', autoColor: IconLoading() }
      ]
    }
  }
}
</script>
