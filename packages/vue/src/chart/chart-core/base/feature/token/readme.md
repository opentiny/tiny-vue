### globalToken

图表使用的全局变量，包含 font，border，color，space 等

### aliasToken

基于 globalToken 衍生的别名变量，取值从 globalToken 中取，实现黑白主题的色值切换和不同主题之间的差异

### modelToken

基于 aliasToken 衍生的三级变量，取值从 aliasToken 中取，实现不同主题之间的差异覆盖

### chartsToken

目前是基于 globalToken，aliasToken，modelToken 衍生的变量，用于按照图表名称的具体 option 配置
