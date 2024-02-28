import merge from '../../util/merge'
import cloneDeep from '../../util/cloneDeep'
import { isArrayEqual } from '../../util/equal'

class mediaScreen {
  constructor(dom, option, callback) {
    // 媒体查询监听的dom
    this.dom = dom
    // 媒体查询的响应式配置
    this.option = option || []
    // 媒体查询命中时的回调函数
    this.callback = callback
    // 当前宽度下响应式配置命中的区间
    this.curRange = []
    // 图表初始配置
    this.initOption = {}
  }

  // 监听dom宽度变化
  observe() {
    if (!this.dom) return
    let domWidth = this.dom.getBoundingClientRect().width
    let range = this.getRange(domWidth, this.option)
    if (!isArrayEqual(this.curRange, range)) {
      let tempOption = cloneDeep(this.initOption)
      this.curRange = range
      this.curRange.forEach((rangeIndex) => {
        merge(tempOption, this.option[rangeIndex].option)
      })
      this.callback(tempOption)
    }
  }

  // 强制触发一次监听，(解决页面挂载就调用refresh配置的问题)
  refresh() {
    this.curRange = []
    this.observe()
  }

  // 设置图表初始配置
  setInitOption(option) {
    this.initOption = cloneDeep(option)
  }

  // 计算命中区间
  getRange(domWidth, option) {
    let range = []
    option.forEach((item, index) => {
      // maxWidth/minWidth都存在
      if (item.maxWidth !== undefined && item.minWidth !== undefined) {
        if (domWidth <= item.maxWidth && domWidth >= item.minWidth) {
          range.push(index)
        }
      }
      // maxWidth/minWidth都不存在，直接push到this.initRange
      else if (item.maxWidth === undefined && item.minWidth === undefined) {
        range.push(index)
      }
      // minWidth不存在
      else if (item.maxWidth !== undefined && item.minWidth === undefined) {
        if (domWidth <= item.maxWidth) {
          range.push(index)
        }
      }
      // maxWidth不存在
      else if (item.maxWidth === undefined && item.minWidth !== undefined) {
        if (domWidth >= item.minWidth) {
          range.push(index)
        }
      }
    })
    // 数组去重
    range = [...new Set(range)]
    return range
  }
}

export default mediaScreen
