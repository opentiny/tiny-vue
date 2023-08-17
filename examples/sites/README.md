## @opentiny/tiny-toolkit-docs 套件说明  2023.3.11

### 1.项目技术架构
1.  vite + vue3 + naive UI
2.  特色：
    - 支持 md 格式文档！
    - 国际化切换、主题切换、配置/非配置化文档切换！
    - 支持组件的 demo 导航，API 属性向 demo 跳转！
    - 支持单列 demo 及 2 列 demo 展示！

### 2. 启动命令说明：
`tiny start` -----> 启动新官网

### 4.项目部署

tiny build之后，套件前台工程部署完成后

在server仓库中配置相应路由 仓库： https://codehub-g.huawei.com/Tiny/tiny-club/tinyui-design-server/files?ref=master    
                        
再部署 tinyui-design-server 流水线： https://fuxi.huawei.com/mine/components/10089577/pipeline/list/259496

测试环境验证： https://tinyuidesign-alpha.cloudbu.huawei.com/

内网环境验证： https://tinyuidesign.cloudbu.huawei.com/



### 5. 更换环境时

1、检查 env 中的context变量
2、检查 viteconfig 中的base路径


### Angular官网 自适应方案 2023.1.4 

#### 1.屏幕宽度为`1920px`以下时

a. 总览组件单行显示4个

#### 2.屏幕宽度为`1280px`以下时

a. 组件示例和文档页面，隐藏快速导航

b. 总览组件单行显示2个

#### 3.屏幕宽度为`1024px`以下时

a. 页面整体隐藏左侧菜单

#### 4.屏幕宽度为`768px`以下时

a. 组件示例页面，代码示例单行显示

#### 图片说明：

![layout](public/images/layout.png)