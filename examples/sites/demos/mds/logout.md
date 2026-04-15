## logout

### Props

| 属性名         | 类型       | 默认值                | 说明                                   |
| -------------- | ---------- | --------------------- | -------------------------------------- |
| before-logout  | () => void |                       | 注销前的回调函数                       |
| get-logout-url | () => void |                       | 自定义获取注销服务接口                 |
| is-guest-user  | boolean    |                       | 自定义是否访客用户                     |
| is-local       | boolean    | service.setting.local | 是否本地注销                           |
| is-mock        | boolean    |                       | 是否开启 mock 模拟服务，默认值为 false |
| redirect-url   | string     |                       | 自定义配置注销后跳转地址               |
| show-login     | () => void |                       | 自定义登录方法                         |
