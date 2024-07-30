const headerHtml = `
<div class="tinyui-design-header" id="tinyuiDesignHeader">
  <div class="nav">
    <div class="nav-left">
      <div class="menu-collapse" id="menuCollapse">
        <img
          src="/static/images/menuCollapse.svg"
        />
        <div class="divider"></div>
      </div>

      <a class="nav-logo" href="/" title="OpenTiny">
        <img
          src="/static/images/opentiny-logo.svg"
          class="header-logo"
        />
        <span class="header-name">OpenTiny</span>
      </a>

      <div class="divider"></div>

      <img
        src="/static/images/tinyvue.svg"
        class="header-sublogo"
      />

      <span class="header-detail-name">TinyVue</span>

      <div class="nav-menus nav-menus-left"></div>
    </div>
  </div>
</div>`

class DesignCommon {
  renderHeader() {
    document.getElementById('header').innerHTML = headerHtml
    const link = document.createElement('link')
    link.href = '/static/css/design-common.css'
    link.rel = 'stylesheet'
    document.head.append(link)
  }
  renderFooter() {
    // 空方法，用于给官网执行，解决报错
  }
}
window.TDCommon = DesignCommon
