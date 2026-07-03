<template>
  <div>
    <tiny-flowchart :data="data" :config="config">
      <template #content="{ node, config: cfg }">
        <div
          v-if="node.info.items && node.info.items.length > cfg.listThreshold"
          class="person-list"
          :style="{ width: cfg.listWidth + 'px' }"
        >
          <div v-for="item in node.info.items" :key="item.key" class="person-item">
            <div class="person-avatar">
              <img
                v-if="cfg.headUrl"
                :src="cfg.headUrl"
                :style="{ width: cfg.headSize + 'px', height: cfg.headSize + 'px' }"
              />
              <div
                v-else
                class="avatar-placeholder"
                :style="{ width: cfg.headSize + 'px', height: cfg.headSize + 'px' }"
              >
                {{ item.name.charAt(0) }}
              </div>
              <!-- 状态指示点 -->
              <span class="status-dot" :style="{ background: cfg.colors[item.status] }"></span>
            </div>
            <div class="person-info">
              <div class="person-name">{{ item.name }}</div>
              <div class="person-role">{{ item.role }}</div>
              <div class="person-comment" :style="{ color: cfg.colors[item.status] }">{{ item.comment }}</div>
            </div>
          </div>
        </div>
      </template>
    </tiny-flowchart>
  </div>
</template>

<script setup>
import { TinyFlowchart } from '@opentiny/vue'
import { reactive } from 'vue'

const { createNode, createLink, createItem, createConfig } = TinyFlowchart

const config = createConfig()
config.width = 860
config.height = 360
config.rows = 4
config.cols = 8
config.listWidth = 120 // 加宽容器，内容更舒展
config.listThreshold = 0 // createItem存在，items数组长度大于此值时显示列表,默认值是1。items数组长度等于1，不显示，所以设置成0。
config.listBorderColor = '#e8e8e8'
config.listIconColor = '#bfbfbf'
config.listIconSize = 22
config.headSize = 28 // 头像稍大，更大气

const data = reactive({
  nodes: [
    createNode(
      'apply',
      1,
      '提交申请',
      '2024-06-01',
      [
        createItem('1', '张三', '申请人', 1, '已提交', '2024-06-01'),
        createItem('2', '李四', '协助人', 1, '已确认', '2024-06-01')
      ],
      1,
      1
    ),
    createNode(
      'dept',
      2,
      '部门审批',
      '2024-06-02',
      [createItem('3', '王五', '部门经理', 2, '审批中', '2024-06-02')],
      1,
      3
    ),
    createNode(
      'finance',
      3,
      '财务审批',
      '',
      [createItem('4', '赵六', '财务主管', 3, '待审批', ''), createItem('5', '孙七', '出纳', 3, '待处理', '')],
      1,
      5
    ),
    createNode('done', 3, '流程结束', '', null, 1, 7)
  ],
  links: [
    createLink('apply', 'dept', '0 r2', 1, 'solid'),
    createLink('dept', 'finance', '0 r2', 2, 'solid'),
    createLink('finance', 'done', '0 r2', 3, 'solid')
  ]
})
</script>

<style scoped>
/* 人员列表容器 */
.person-list {
  position: absolute;
  bottom: 10px;
  left: 48%;
  transform: translateX(-45%);
  min-width: 100px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  padding: 8px;
  background: #ffffff;
  z-index: 10;
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.05),
    0 1px 3px rgba(0, 0, 0, 0.04);
  transition: box-shadow 0.3s ease;
}

/* 单个人员项 */
.person-item {
  display: flex;
  align-items: flex-start;
  padding: 8px 6px;
  border-radius: 6px;
  transition: all 0.25s ease;
  position: relative;
}

.person-item:not(:last-child) {
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
}

.person-item:hover {
  background: rgba(24, 144, 255, 0.04);
}

/* 头像区域 */
.person-avatar {
  margin-right: 10px;
  flex-shrink: 0;
  position: relative;
}

.avatar-placeholder {
  border-radius: 50%;
  background: linear-gradient(135deg, #e6f7ff 0%, #f0f9ff 100%);
  color: #1890ff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  box-shadow: inset 0 0 0 1px rgba(24, 144, 255, 0.15);
}

/* 状态指示圆点 */
.status-dot {
  position: absolute;
  bottom: -1px;
  right: -1px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 2px solid #ffffff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

/* 信息区域 */
.person-info {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.person-name {
  font-size: 13px;
  font-weight: 600;
  color: #1f1f1f;
  line-height: 1.4;
  letter-spacing: 0.2px;
}

.person-role {
  font-size: 11px;
  color: #8c8c8c;
  line-height: 1.3;
  font-weight: 400;
}

.person-comment {
  font-size: 11px;
  line-height: 1.3;
  margin-top: 2px;
  font-weight: 500;
}
</style>
