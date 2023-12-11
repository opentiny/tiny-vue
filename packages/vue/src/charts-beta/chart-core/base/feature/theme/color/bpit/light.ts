import gray from './gray'

// 图表的状态颜色
const colorState = {
  // 紧急色
  errorColor: '#E02128',
  // 重要告警色
  warningColor: '#F4840C',
  // 次要告警色
  subwarningColor: '#FCC800',
  // 成功色
  successColor: '#09AA71',
  // 提示色
  infoColor: '#2070F3',
  // 失效 '#AEAEAE'
  disabledColor: gray.colorGray30
}

// 图表内置的颜色组
const colorGroup = ['#2070F3', '#55CCD9', '#715AFB', '#8AC8F3', '#EB74DF', '#87C859', '#D19F00']

const light = {
  ...gray,
  colorGroup,
  colorState
}

export default light
export { colorGroup, colorState }
