// 推荐色组
const group = [
  '#6d8ff0', // rgba(109,143,240,1)
  '#00a874', // rgba(0  ,168,116,1)
  '#bd72f0', // rgba(189,114,240,1)
  '#c6e5ec', // rgba(198,229,236,1)
  '#fdc000', // rgba(253,192,0  ,1)
  '#9185f0' // rgba(145,133,240,1)
]

// 图表基础色组
const base = {
  // 主色
  main: '#FFFFFF',
  // 主文本色
  font: '#191919',
  // 次级文本色
  subfont: '#bbbbbb',
  // 刻度线
  axis: '#eeeeee',
  // 次级刻度线
  subaxis: 'rgba(0,0,0,0.08)',
  // 刻度文本
  axislabel: '#4e4e4e',
  // 初级底色，颜色最亮
  bg: '#ffffff',
  // 次级底色，颜色稍亮
  subg: '#e8e8e8'
}

// 图表状态色组
const state = {
  // 错误色
  error: '#F43146',
  // 告警色
  warning: '#EC6F1A',
  // 次要告警色
  subwarning: '#EEBA18',
  // 成功色
  success: '#2DA769',
  // 提示色
  prompt: '#5990FD',
  // 失效
  fail: '#939393'
}

const theme = {
  color: {
    group,
    base,
    state
  }
}

export default theme
