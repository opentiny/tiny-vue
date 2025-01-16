## 安装

```bash
npm install --save @opentiny/utils
```

## 阻塞

```js
import { nanoid } from '@opentiny/utils'

const { api } = nanoid

model.id = api.nanoid() // => "V1StGXR8_Z5jdHi6B-myT"
```

```js
api.nanoid(10) // => "IRFa-VaY2b"
```

## 定制字母表和长度

```js
import { nanoid } from '@opentiny/utils'

const { api } = nanoid
// eslint-disable-next-line no-import-assign
const nanoid = api.customAlphabet('1234567890abcdef', 10)

model.id = nanoid() // => "4f90d13a42"
```

```js
import { nanoid } from '@opentiny/utils'

const { api } = nanoid
// eslint-disable-next-line no-import-assign
const nanoid = api.customAlphabet('1234567890abcdef', 10)

model.id = nanoid(5) // => "f01a2"
```

## 模拟 Math.random

Nano ID 可以生成随机字符串，但在某些场景下仍然需要随机数。基于 window.crypto.getRandomValues 提供函数生成随机数。

```js
import { nanoid } from '@opentiny/utils'

const { random } = nanoid
random() // => 0.3743718267358774
```
