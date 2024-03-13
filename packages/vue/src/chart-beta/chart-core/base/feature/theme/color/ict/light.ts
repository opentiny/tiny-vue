import gray from './gray'

// 图表的状态颜色
const colorState = {
  // 紧急色
  errorColor: '#F43146',
  // 重要告警色
  warningColor: '#EC6F1A',
  // 次要告警色
  subwarningColor: '#EEBA18',
  // 成功色
  successColor: '#2DA769',
  // 提示色
  infoColor: '#5990FD',
  // 失效 '#818181'
  disabledColor: gray.colorGray30
}

// 图表内置的颜色组
const colorGroup = ['#6D8FF0', '#00A874', '#BD72F0', '#54BCCE', '#FDC000', '#9185F0', '#00A2B5']

const light = {
  ...gray,
  colorState,
  colorGroup
}

export default light
export { colorState, colorGroup }
