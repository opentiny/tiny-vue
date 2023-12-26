const tiBaseColor1 = '#1476FF'
const tiBaseColor2 = '#0BB8B2'
const tiBaseColor3 = '#6E51E0'
const tiBaseColor4 = '#5CB300'
const tiBaseColor5 = '#FCBE1E'
const tiBaseColor6 = '#33BCF2'
const tiBaseColor7 = '#BA53E6'
const tiBaseColor8 = '#EB4696'
// 推荐色组
const group = [
  tiBaseColor1,
  tiBaseColor2,
  tiBaseColor3,
  tiBaseColor4,
  tiBaseColor5,
  tiBaseColor6,
  tiBaseColor7,
  tiBaseColor8
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
  subaxis: 'rgba(0,0,0,0.06)',
  // 刻度文本
  axislabel: '#4e4e4e',
  // 初级底色，颜色最亮
  bg: '#ffffff',
  // 次级底色，颜色稍亮
  subg: '#f2f2f2'
}

// 图表状态色组
const state = {
  // 错误色
  error: '#F23030',
  // 告警色
  warning: '#FF8800',
  // 次要告警色
  subwarning: '#F7D916',
  // 成功色
  success: '#5CB300',
  // 提示色
  prompt: '#1476FF',
  // 失效
  fail: '#EBEBEB'
}

const theme = {
  color: {
    group,
    base,
    state
  }
}

export default theme
