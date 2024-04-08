// 显示volume需要的grid
const VOLUMEGRID = [
  {
    left: '5%',
    right: '5%',
    height: '50%',
    top: '2%',
    containLabel: false
  },
  {
    left: '5%',
    right: '5%',
    top: '63%',
    height: '25%',
    containLabel: false
  }
]

const BASICSERIES = [
  {
    name: '日K',
    type: 'candlestick',
    data: undefined,
    itemStyle: {
      color: undefined,
      color0: undefined,
      borderColor: undefined,
      borderColor0: undefined
    }
  }
]

export { BASICSERIES, VOLUMEGRID }
