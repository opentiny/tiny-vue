### baiscToken

图表使用的基础变量，包含 font，border，color，space 等

### mapToken

基于 baiscToken 衍生的二级变量，取值从 baiscToken 中取，实现黑白主题的色值切换

### modelToken

基于 mapToken 衍生的三级变量，取值从 mapToken 中取，实现不同主题之间的差异覆盖

### chartsToken

目前是基于 baiscToken，mapToken，modelToken 衍生的变量，用于按照图表名称的具体 option 配置
