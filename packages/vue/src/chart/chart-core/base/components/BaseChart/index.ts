import { insertStateDom, removeStateDom } from '../../util/init/insert'
export default class BaseChart {
  // 图表渲染容器
  dom
  // 图表渲染配置
  option

  constructor() {
    // 必须实现 init 方法，初始化图表渲染容器
    if (this.init === undefined) {
      throw new Error('This chart has not overwrite "init" callback!')
    }
    // 必须实现 setSimpleOption 方法，初始化图表渲染配置
    if (this.setSimpleOption === undefined) {
      throw new Error('This chart has not overwrite "setSimpleOption" callback!')
    }
    // 必须实现 render 方法，调用时开始渲染图表
    if (this.render === undefined) {
      throw new Error('This chart has not overwrite "render" callback!')
    }
    // 必须实现 onRenderReady 方法
    if (this.onRenderReady === undefined) {
      throw new Error('This chart has not overwrite "onRenderReady" callback!')
    }
    // 必须实现 refresh 方法，传入新的option，刷新图表
    if (this.refresh === undefined) {
      throw new Error('This chart has not overwrite "refresh" callback!')
    }
    // 必须实现 refreshData 方法，传入新的data，刷新图表
    if (this.refreshData === undefined) {
      throw new Error('This chart has not overwrite "refreshData" callback!')
    }
    // 必须实现 setResize 方法，该方法一般手动调用，实现图表自适应宽度
    if (this.setResize === undefined) {
      throw new Error('This chart has not overwrite "setResize" callback!')
    }
    // 必须实现 uninstall 方法，清空图表容器，卸载所有监听事件
    if (this.uninstall === undefined) {
      throw new Error('This chart has not overwrite "uninstall" callback!')
    }
  }

  // 加载状态
  showLoading(option) {
    insertStateDom(this.dom, 'loading', option)
  }

  hideLoading() {
    removeStateDom(this.dom, 'loading')
  }

  closeLoading() {
    removeStateDom(this.dom, 'loading')
  }

  // 错误状态
  showError(option) {
    insertStateDom(this.dom, 'error', option)
  }

  closeError() {
    removeStateDom(this.dom, 'error')
  }

  // 空数据状态
  showEmpty(option) {
    insertStateDom(this.dom, 'empty', option)
  }

  closeEmpty() {
    removeStateDom(this.dom, 'empty')
  }

  // 阶段空数据状态
  showStageEmpty(option) {
    insertStateDom(this.dom, 'stage_empty', option)
  }

  closeStageEmpty() {
    removeStateDom(this.dom, 'stage_empty')
  }

  // 自定义数据状态
  showState(option) {
    insertStateDom(this.dom, 'custom', option)
  }

  closeState() {
    removeStateDom(this.dom, 'custom')
  }

  // 传入自定义DOM
  showCustomDom(callback) {
    if (this.dom.getElementsByClassName('huicharts-custom-dom').length > 0) return
    if (getComputedStyle(this.dom).position === ('static' || '')) {
      this.dom.style.position = 'relative'
    }
    let customContainer = document.createElement('div')
    customContainer.className = 'huicharts-custom-dom'
    customContainer.setAttribute(
      'style',
      'position:absolute;width:100%;height:100%;top:0px;left:0px;display:flex;justify-content:center;align-items:center'
    )
    this.dom.appendChild(customContainer)
    callback(customContainer)
  }

  // 删除自定义DOM
  closeCustomDom() {
    let customContainer = this.dom.getElementsByClassName('huicharts-custom-dom')
    this.dom.removeChild(customContainer[0])
  }
}
