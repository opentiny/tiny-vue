# vue-theme 替换主题变量

- 将 `smb-theme.js` 中的变量值为默认值，smb-theme中有大量的px, 颜色值，都原样复制即可！
- 将`vars.less`中要被替换的变量收集起来，另存到`old-theme.js`中去.

- 不处理 `base/theme` 文件夹。
- 不处理 `images/mixins/svgs` 文件夹。
- 不处理 `transition` 文件夹。

## 例外处理

- 删除空样式的目录； 没有`smb-theme.js`的，忽略处理。
- `smb-theme.js`中有的， `vars.less`中没有-----------------打印警告

## 处理后待做

`base`中的变量与 `theme/smb-theme`的变量手工复制替换。
手工校对是否common变量有差异！

## 命令

npm run theme-swap
