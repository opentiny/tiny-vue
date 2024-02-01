// 推荐色组
const group = [
  '#1f55b5', // rgba(31 ,85 ,181,1)
  '#278661', // rgba(39 ,134,97 ,1)
  '#8a21bc', // rgba(138,33 ,188,1)
  '#26616b', // rgba(38 ,97 ,107,1)
  '#b98c1d', // rgba(185,140,29 ,1)
  '#745ef7' // rgba(116,94 ,247,1)
]

// 图表基础色组
const base = {
  // 主色
  main: '#191919',
  // 主文本色
  font: '#f5f5f5',
  // 次级文本色
  subfont: '#4e4e4e',
  // 刻度线
  axis: 'rgba(238,238,238,0.1)',
  // 次级刻度线
  subaxis: 'rgba(255,255,255,0.2)',
  // 刻度文本
  axislabel: '#bbbbbb',
  // 初级底色，颜色最亮
  bg: '#272727',
  // 次级底色，颜色稍亮
  subg: '#2e2e2e'
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
  success: '#0D9458',
  // 提示色
  prompt: '#5990FD',
  // 失效
  fail: '#818181'
}

const theme = {
  color: {
    group,
    base,
    state
  }
}

export default theme
