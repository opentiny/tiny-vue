// 推荐色组
const group = [
  '#2070F3',
  '#55CCD9',
  '#715AFB',
  '#8AC8F3',
  '#EB74DF',
  '#87C859',
  '#D19F00',
  '#36C18D',
  '#CB8EFB',
  '#ED448A',
  '#F7C45C',
  '#E7434A'
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
  error: '#E02128',
  // 告警色
  warning: '#F4840C',
  // 次要告警色
  subwarning: '#FCC800',
  // 成功色
  success: '#09AA71',
  // 提示色
  prompt: '#2070F3',
  // 失效
  fail: '#AEAEAE'
}

const theme = {
  color: {
    group,
    base,
    state
  }
}

export default theme
