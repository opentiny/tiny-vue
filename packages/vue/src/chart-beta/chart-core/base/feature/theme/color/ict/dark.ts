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
  successColor: '#0D9458',
  // 提示色
  infoColor: '#5990FD',
  // 失效 '#939393'
  disabledColor: gray.colorGray40
}

// 图表内置的颜色组
const colorGroup = ['#1F55B5', '#278661', '#8A21BC', '#26616B', '#B98C1D', '#745EF7', '#2A8290']

const dark = {
  ...gray,
  colorState,
  colorGroup
}

export default dark
export { colorState, colorGroup }
