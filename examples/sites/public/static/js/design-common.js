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
      <button id="switchTheme" style="margin-left:150px">切换主题</button>
    </div>
  </div>
</div>`

const footerHtml = `<div class="tinyui-design-footer">
  <div class="footer-content">
   <div class="footer-logo-container">
      <a href="/" class="footer-logo-link">
        <img src="/static/images/opentiny-logo.svg" title="OpenTiny" class="footer-logo">
        <span class="footer-logo-title">OpenTiny</span>
      </a>
      <div class="footer-promotional-container">
         
          <div class="footer-promotional-label">企业级设计体系</div>
         
          <div class="footer-promotional-label">追求极致体验，多种设计方法融合</div>
         
          <div class="footer-promotional-label">开箱即用的多语言组件库</div>
        
        <div class="footer-logolist-container">
          
            <a href="/pro" class="footer-logo-link footer-logo-link-list">
              <img src="/static/images/footer/pro.svg" title="TinyPro">
            </a>
          
            <a href="/designtheme/home" class="footer-logo-link footer-logo-link-list">
              <img src="/static/images/footer/theme.svg" title="TinyTheme">
            </a>
          
            <a href="/tiny-cli/home" class="footer-logo-link footer-logo-link-list">
              <img src="/static/images/footer/cli.svg" title="TinyCLI">
            </a>
          
        </div>
      </div>
      
   </div>
    
    <div class="links">
      
      <div class="link-item">
        <div class="footer-title-container">
          <img src="/static/images/footer/footer-title-resource.svg" class="footer-logo-s">
          <span class="footer-title">相关资源</span>
          <span class="icon-arrow"></span>
        </div>
        <div class="footer-text-list">
          
          
            <a href="https://angular.cn/" title="Angular - 中文网" target="_blank" rel="noopener noreferrer" class="list-item">Angular - 中文网</a>
          
            <a href="https://cn.vuejs.org/" title="Vue - 中文网" target="_blank" rel="noopener noreferrer" class="list-item">Vue - 中文网</a>
          
            <a href="https://ionic.io/ionicons" title="ionicons 图标库" target="_blank" rel="noopener noreferrer" class="list-item">ionicons 图标库</a>
                    
        </div>        
      </div>
      
      <div class="link-item">
        <div class="footer-title-container">
          <img src="/static/images/footer/footer-title-community.svg" class="footer-logo-s">
          <span class="footer-title">社区</span>
          <span class="icon-arrow"></span>
        </div>
        <div class="footer-text-list">
          
            <a href="https://mp.weixin.qq.com/s/3a6GaLY6hBGzV0nGzen2gw" title="公众号 - OpenTiny" target="_blank" rel="noopener noreferrer" class="list-item">公众号 - OpenTiny</a>
          
            <a href="https://juejin.cn/user/3808325101432983" title="掘金 - OpenTiny 社区" target="_blank" rel="noopener noreferrer" class="list-item">掘金 - OpenTiny 社区</a>
          
            <a href="https://www.zhihu.com/people/opentiny" title="知乎 - OpenTiny 社区" target="_blank" rel="noopener noreferrer" class="list-item">知乎 - OpenTiny 社区</a>
          
            <a href="https://space.bilibili.com/15284299" title="B 站 - OpenTiny 社区" target="_blank" rel="noopener noreferrer" class="list-item">B 站 - OpenTiny 社区</a>
                    
        </div>        
      </div>
      
      <div class="link-item">
        <div class="footer-title-container">
          <img src="/static/images/footer/footer-title-help.svg" class="footer-logo-s">
          <span class="footer-title">帮助</span>
          <span class="icon-arrow"></span>
        </div>
        <div class="footer-text-list">
          
            <a href="https://github.com/opentiny" title="GitHub" target="_blank" rel="noopener noreferrer" class="list-item">GitHub</a>
          
            <a href="https://gitee.com/opentiny" title="Gitee" target="_blank" rel="noopener noreferrer" class="list-item">Gitee</a>
          
            <a href="/tiny-vue/zh-CN/os-theme/docs/changelog" title="更新日志" target="_blank" rel="noopener noreferrer" class="list-item">更新日志</a>
          
            <a href="https://github.com/opentiny/tiny-vue/issues" title="讨论区" target="_blank" rel="noopener noreferrer" class="list-item">讨论区</a>
                    
        </div>        
      </div>
      
      <div class="contact">
        <div>
          <img src="/static/images/footer/footer-title-human.svg" class="footer-logo-s">
          <span class="footer-title">联系我们</span>
        </div>
        <div class="group-code">
          <img src="/static/images/footer/code-open.png">
        </div>
      </div>
    </div>
  </div>
  <div class="copyright">
  <p>Copyright © Huawei Technologies Co., Ltd. 2023. All rights reserved.</p>
  <p>粤ICP备2022156931号-1</p>
  </div>
</div>`

class DesignCommon {
  renderHeader() {
    document.getElementById('header').innerHTML = headerHtml
    const link = document.createElement('link')
    link.href = '/static/css/design-common.css'
    link.rel = 'stylesheet'
    document.head.append(link)

    document.getElementById('switchTheme').addEventListener('click', () => {
      document.querySelector('html').classList.toggle('dark')
    })
  }
  renderFooter() {
    document.getElementById('footer').innerHTML = footerHtml
  }
}
window.TDCommon = DesignCommon
