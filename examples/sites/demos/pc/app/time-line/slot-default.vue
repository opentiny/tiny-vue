<template>
  <div class="demo-timeline">
    <tiny-time-line vertical shape="dot">
      <template #default>
        <ol>
          <li v-for="(item, index) in items" :key="index" :class="item.status">
            <div>
              <div class="index-icon">{{ index + 1 }}</div>
              <hr />
            </div>
            <div>{{ item.desc }}</div>
            <div v-if="item.user">{{ item.user }}</div>
            <div v-if="item.datetime">{{ item.datetime }}</div>
          </li>
        </ol>
      </template>
    </tiny-time-line>
  </div>
</template>

<script>
import { TinyTimeLine } from '@opentiny/vue'

export default {
  components: {
    TinyTimeLine
  },
  data() {
    return {
      items: [
        {
          desc: '提交申请',
          user: '张三',
          datetime: new Date(Date.now() - 60 * 60 * 1e3).toLocaleString(),
          status: 'done'
        },
        { desc: '直接主管', user: '李四', datetime: new Date().toLocaleString(), status: 'done' },
        { desc: '部门主管', user: '王五' },
        { desc: '完成' }
      ]
    }
  }
}
</script>

<style scoped lang="less">
.demo-timeline {
  --color: #d3d5d6;
  .done {
    --color: #5073e5;
  }
  --size: 20px;
}

ol {
  display: flex;
}

li {
  margin: 10px 0;
  color: var(--color);
  min-width: 200px;
}

div {
  position: relative;
  color: var(--active-color);
  &:not(:first-of-type) {
    margin: 5px 0;
    display: flex;
    justify-content: center;
  }
}

hr {
  position: absolute;
  top: 15%;
  width: 100%;
  height: 5px;
  background-color: var(--color);
}

.index-icon {
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  background-color: var(--color);
  color: #fff;
  padding: 1px;
  font-size: calc(var(--size) - 2px);
  text-align: center;
  z-index: 1;
  margin: auto;
}
</style>
