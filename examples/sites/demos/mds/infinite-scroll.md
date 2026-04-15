## infinite-scroll

### Props

| 属性名                    | 类型     | 默认值 | 说明                                         |
| ------------------------- | -------- | ------ | -------------------------------------------- |
| infinite-scroll-delay     | number   | 200    | 加载延时，单位为 ms                          |
| infinite-scroll-disabled  | boolean  | false  | 是否禁用滚动                                 |
| infinite-scroll-distance  | number   | 0      | 加载触发距离阈值，单位为 px                  |
| infinite-scroll-immediate | boolean  | true   | 是否立即加载，以防初始状态下内容无法撑满容器 |
| v-infinite-scroll         | Function |        | 无限滚动加载指令，指定加载方法               |
