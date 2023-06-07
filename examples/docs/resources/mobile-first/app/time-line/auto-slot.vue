<template>
  <div style="display: flex; justify-content: space-between">
    <tiny-time-line :data="data">
      <template #left="data">
        <div style="margin-top: -14px; margin-left: 10px">
          <tiny-user-head type="image" round v-model="imgUrl" scale="0.8"></tiny-user-head>
        </div>
        <span style="margin-left: 6px; display: inline-block; font-size: 12px">
          {{ data.slotScope.title }}
        </span>
      </template>
    </tiny-time-line>

    <tiny-time-line :data="data1">
      <template #left="data1">
        <div style="margin-top: -14px; margin-left: 10px">
          <tiny-user-head type="image" round v-model="imgUrl" scale="0.8"></tiny-user-head>
        </div>
        <span style="margin-left: 6px; display: inline-block; font-size: 12px"> {{ data1.slotScope.title }} </span>
      </template>
    </tiny-time-line>
  </div>
</template>

<script>
import { TimeLine, UserHead } from '@opentiny/vue'
import { IconLoading } from '@opentiny/vue-icon'

export default {
  components: {
    TinyTimeLine: TimeLine,
    TinyUserHead: UserHead
  },
  data() {
    return {
      imgUrl: 'https:/webnova/static/img/tiny3bg.b5dd307.jpg',
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
