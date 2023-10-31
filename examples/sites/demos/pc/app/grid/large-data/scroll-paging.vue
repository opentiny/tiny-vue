<template>
  <tiny-grid :fetch-data="{ api: getData }" :scroll-load="{ isInfinity: false, pageSize: 10 }">
    <tiny-grid-column type="index" width="60"></tiny-grid-column>
    <tiny-grid-column field="name" title="公司名称"></tiny-grid-column>
    <tiny-grid-column field="employees" title="员工数"></tiny-grid-column>
    <tiny-grid-column field="city" title="所属城市"></tiny-grid-column>
    <tiny-grid-column field="manager" title="公司经理"></tiny-grid-column>
    <tiny-grid-column field="telphone" title="联系手机"></tiny-grid-column>
    <tiny-grid-column field="gender" title="性别"></tiny-grid-column>
    <tiny-grid-column field="time" title="入职时间"></tiny-grid-column>
  </tiny-grid>
</template>

<script lang="jsx">
import { Grid, GridColumn } from '@opentiny/vue'

export default {
  components: {
    TinyGrid: Grid,
    TinyGridColumn: GridColumn
  },
  data() {
    return {}
  },
  methods: {
    getData({ page }) {
      return new Promise((resolve) => {
        this.getRandomGridData({ pageSize: page.pageSize }).then((data) => {
          resolve({ result: data.result, page: { total: 100 } })
        })
      })
    },
    // 生成模拟数据
    getRandomGridData({ pageSize, delay = 500 }) {
      const citys = ['福州', '深圳', '中山', '龙岩', '韶关', '黄冈', '赤壁', '厦门', '广州', '长沙', '青岛', '杭州']
      const fristName = ['王', '陈', '刘', '张', '吴', '唐', '李', '崔', '郭', '周', '林', '匡', '何', '黄']
      const names = [
        '智',
        '璐',
        '项',
        '华',
        '兰',
        '富',
        '凯',
        '幂',
        '桑',
        '航',
        '明',
        '坤',
        '平',
        '秀',
        '思',
        '鹏',
        '会',
        '之',
        '瑞',
        '伟',
        '彤',
        '秀',
        '欣',
        '董'
      ]
      const randomChar = Array.from({ length: 26 }).map((item, index) => String.fromCharCode(65 + index))
      const tels = ['131', '151', '150', '132', '169', '159', '191', '172', '185', '181', '134']
      const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      const now = new Date()

      const randomArrayToString = (arr, len, isRundomLen) => {
        const name = []
        const ranLen = (isRundomLen === false ? len : Math.floor(Math.random() * len)) || 1

        for (let i = 0; i < ranLen; i++) {
          name.push(arr[Math.floor(Math.random() * arr.length)])
        }

        return name.join('')
      }

      return new Promise((resolve) => {
        setTimeout(() => {
          const result = []

          for (let i = 0; i < pageSize; i++) {
            result.push({
              id: Math.ceil(Math.random() * 100000),
              name: randomArrayToString(randomChar, 5) + '科技公司',
              employees: Math.floor(Math.random() * 10000),
              city: randomArrayToString(citys, 1),
              manager: randomArrayToString(fristName, 1) + randomArrayToString(names, 3),
              telphone: randomArrayToString(tels, 1) + ('' + Math.floor(Math.random() * 1000000000)).substring(0, 8),
              gender: randomArrayToString(['男', '女'], 1),
              char: randomArrayToString(randomChar, 5),
              char1: randomArrayToString(randomChar, 4),
              char2: randomArrayToString(randomChar, 7),
              char3: randomArrayToString(randomChar, 12),
              num: randomArrayToString(nums, 8),
              num1: randomArrayToString(nums, 6),
              num2: randomArrayToString(nums, 12),
              time: now.getFullYear() + '-' + Math.ceil(11 * Math.random()) + '-' + Math.ceil(27 * Math.random())
            })
          }

          resolve({ result })
        }, Math.ceil(Math.random() * delay))
      })
    }
  }
}
</script>
