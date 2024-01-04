## 表单校验配置

<br>
<br>

表单校验是基于 `async-validator` 封装的，主要用到 `validate` 函数和 `rules` 的配置规则。

### API

#### validate

常用于提交表单的时候，对整个表单需校验字段进行校验，得到校验结果，使用示例如下所示：

```js
this.$refs[formName].validate((valid, error) => {})
```

参数说明：

- `valid`：Boolean 类型，值为 `true` 时表示表单所有字段都校验通过，可提交表单。值为 `false` 时表示有字段没校验通过。

- `error`：Array 类型，包含校验不通过的字段。

### Rules

用于设置表单每个需校验字段的校验规则，可设置每个字段的校验类型，是否必填，校验不成功的提示信息等。

#### type

通过 `type` 设置需校验字段的校验类型，使用这个，我们就可以对一些特定的字段进行校验，而不用再像以前一样写正则，做判断。使用示例如下所示：

```js
rules: {
  name: { type: 'string', required: true }
}
```

可设置的值如下：

- `string`：字符串类型（默认值）

- `number`：数字类型

- `boolean`：布尔类型

- `method`：函数类型

- `regexp`：正则表达式

- `integer`：整型

- `float`：双精度浮点型数字

- `array`：数组类型

- `object`：对象类型

- `enum`：枚举值

- `date`：值必须是由日期决定的有效值

- `url`：网址格式

- `hex`：16 进制数字

- `email`：电子邮箱类型

- `any`：任意类型

#### required

`required` 的属性值为 Boolean 类型，用于设置字段是否为必填项，即非空验证。

- `true`：设置为 `true`，表示该字段为必填项，且 label 会带红色 \* 号

- `false`：默认值，表示该字段不是必填项，label 不会带红色 \* 号

#### pattern

配置用于校验该字段的正则表达式。使用示例如下所示：

```js
rules: {
  name: { required: true, pattern: /^[a-z]+$/ }
}
```

#### min

对于 string 和 array 类型，将对长度进行比较，对于 number 类型，数字不能小于 `min`。使用示例如下所示：

```js
rules: {
  users: { min: 2, message: '长度必须不小于2' }
}
```

#### max

对于 string 和 array 类型，将对长度进行比较，对于 number 类型，数字不能大于 `max`。使用示例如下所示：

```js
rules: {
  users: { max: 11, message: '长度必须不大于11' }
}
```

#### len

要验证字段的确切长度，请指定 `len` 属性。对于 string 和 array 类型，将对 length 属性进行比较。对于 number 类型，此属性表示该数字的精确匹配，即，它只能严格等于 `len`。如果 `len` 属性与 `min` 和 `max` 属性一起使用，则 `len` 优先。使用示例如下所示：

```js
rules: {
  users: { len: 2, message: '长度必须为2' }
}
```

#### trigger

通过 `trigger` 配置触发校验规则的方式，为 `change` 时，当输入框值改变即触发校验，为 `blur` 时则失焦后触发校验。可设置成数组 `['change', 'blur']` 两种场景都触发，默认为两种场景都触发。
如果如果仅在主动调用校验方式时触发，可设置为空数组 `[]`。使用示例如下所示：

```js
rules: {
  users: { len: 2, message: '长度必须为2', trigger: 'change' },
  password: { len: 2, message: '长度必须为2', trigger: ['change', 'blur'] },
  nickname: { len: 10, message: '已存在重复名称', trigger: [] }
}
```

可配置的值如下：

- `blur`：则失焦后触发校验。

- `change`：当输入框值改变即触发校验

#### enum

枚举值验证，验证字段的值是否在 `enum` 属性配置的数组 `['admin', 'user', 'guest']` 中。例如：

```js
rules: {
  role: { type: 'enum', enum: ['admin', 'user', 'guest'] }
}
```

#### whitespace

验证必填字段是否只有空格。通常将只包含空白的必填字段视为错误。若要将仅由空格组成的字符串视为错误，则可设置 `whitespace` 为 `true` ，如果没有该配置，则全空格的输入值也是有效的。

```js
rules: {
  name: { required: true, whitespace: true, message: '相对人名称不能为空' }
}
```

#### fields

深层规则。如果需要验证深层对象属性，可以通过将嵌套规则分配给规则的 `fields` 属性来验证 object 或 array 类型的验证规则。请注意，如果不在父规则上指定 `required` 属性，则不在源对象上声明字段是完全有效的，并且深度验证规则将不会执行，因为没有任何可验证的对象。例如：

- object 类型：

```js
rules: {
  address: {
    type: 'object', required: true, // 父规则上必须指定 required 为 true
    fields: {
      street: { type: 'string', required: true },
      city: { type: 'string', required: true },
      zip: { type: 'string', required: true, len: 8, message: 'invalid zip' }
    }
  },
  name: { type: 'string', required: true }
}
```

- array 类型：

```js
rules: {
  roles: {
    type: 'array', required: true, len: 3,
    fields: {
      0: { type: 'string', required: true },
      1: { type: 'string', required: true },
      2: { type: 'string', required: true }
    }
  }
}
```

#### defaultField

`defaultField` 属性可与 array 或 object 类型一起使用，以验证容器的所有值。它可以是包含验证规则的 object 或 array。例如：

```js
rules: {
  urls: {
    type: 'array', required: true,
    defaultField: { type: 'url' }
  }
}
```

#### transform

有时有必要在验证之前转换值，以强制或以某种方式对其进行清理。为此 `transform` ，向验证规则添加一个功能。在验证之前，先转换属性，然后将其重新分配给源对象，以更改该属性的值。使用场景比如：去除用户输入的空格。

```js
rules: {
  name: {
    type: 'string',
    required: true,
    pattern: /^[a-z]+$/,
    transform(value) {
      return value.trim();
    }
  }
}
```

#### messages

用于配置字段校验不成功时的提示信息，支持国际化。

- 实现此目的最简单的方法是将消息分配给规则

```js
rules: {
  name: { type: 'string', required: true, message: 'Name is required' }
}
```

- 消息可以是任何类型，例如 jsx 格式

```js
rules: {
  name: { type: 'string', required: true, message: '<b>Name is required</b>' }
}
```

- 消息也可以是一个函数，例如，如果使用 vue-i18n

```js
rules: {
  name: { type: 'string', required: true, message: () => this.$t( 'name is required' ) }
}
```

#### validator

通过 `validator` 选项为某个字段进行自定义校验，校验方法中 `callback` 必须被调用。

如下所示，先在 `methods` 对象中定义一个自定义校验的方法：

```js
// 自定义的校验password的方法
validatePass(rule, value, callback) {
  if (!/^(?=._[a-z])(?=._[A-Z])(?=.\*\\d)[a-zA-Z\d]{8,}$/.test(value)) {
    callback(new Error('最少八个字符，至少包含一个大写字母，一个小写字母和一个数字'))
  } else {
    callback()
  }
}
```

然后在对应的需要校验的规则中配置 `validator: this.validatePass`：

```js
rules: {
  password: [
    { required: true, message: '必填', trigger: 'blur' },
    { validator: this.validatePass, trigger: 'blur' }
  ]
}
```

#### asyncValidator

通过 `asyncValidator` 选项为某个字段进行自定义异步校验，校验方法中 `callback` 必须被调用。

如下所示，先在 `methods` 对象中定义一个自定义的异步校验的方法：

```js
// 自定义异步校验password的方法
promiseField(rule, value, callback) {
  ajax({
    url: 'xx',
    value: value
  }).then(function(data) {
    callback();
  }, function(error) {
    callback(new Error(error))
  })
}
```

然后在对应的需要校验的规则中配置 `asyncValidator: this.promiseField`：

```js
rules: {
  password: [
    { required: true, message: '必填', trigger: 'blur' },
    { asyncValidator: this.promiseField, trigger: 'blur' }
  ]
}
```
