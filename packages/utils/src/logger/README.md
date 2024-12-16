## 安装

```bash
npm install --save @opentiny/utils
```

## 使用

logger：打印日志

switchLogger：控制打印开关

setLogger：自定义打印函数

```js
import { log } from '@opentiny/utils'

const { logger, switchLogger, setLogger } = log

logger.log(123) // => log "123"

logger.warn(123) // => error "123"

switchLogger(true) // 开启打印开关

setLogger('log', () => {}) // 自定义log方法
```
