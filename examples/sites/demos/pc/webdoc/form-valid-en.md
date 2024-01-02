## Form Verification Configuration

<br>
<br>

Form validation is based on`async-validator`Encapsulated, mainly used`validate`Function and`rules`Configuration rules of the.

### API

#### validate

When submitting a form, the system verifies the fields to be verified in the entire form to obtain the verification result. The following is an example:

```js
this.$refs[formName].validate((valid, error) => {})
```

Parameter description:

- `valid`: Boolean type. The value is`true`When, it indicates that all fields in the form are verified and the form can be submitted. The value is`false`indicates that some fields are not verified.

- `error`: Array type, including fields that do not pass the verification.

### Rules

Used to set the verification rules for each field to be verified in the form, including the verification type of each field, whether it is mandatory, and the prompt information indicating that the verification fails.

#### type

through`type`Set the verification type of the field to be verified. With this function, we can verify some specific fields without writing regular rules and making judgments. The following is an example:

```js
rules: {
  name: { type: 'string', required: true }
}
```

The values that can be set are as follows:

- `string`: character string type (default value)

- `number`: number type

- `boolean`: Boolean type

- `method`: function type

- `regexp`: regular expression

- `integer`: integer

- `float`: double-precision floating-point number

- `array`: array type

- `object`: object type

- `enum`: enumerated value

- `date`: Value must be a valid value determined by date

- `url`: URL format

- `hex`: hexadecimal number

- `email`: email type

- `any`: any type

#### required

`required`The attribute value of is of the Boolean type, which is used to set whether a field is mandatory, that is, non-empty verification.

- `true`: Set to`true`, indicates that the field is mandatory and the label is marked with a red asterisk \*.

- `false`: default value, indicating that the field is not mandatory. The label does not contain red asterisks \*.

#### pattern

Configure the regular expression used to verify the field. The following is an example:

```js
rules: {
  name: { required: true, pattern: /^[a-z]+$/ }
}
```

#### min

For the string and array types, the lengths are compared. For the number type, the number cannot be less than`min`. An example is as follows:

```js
rules: {
  users: { min: 2, message: 'The length must be greater than or equal to 2' }
}
```

#### max

For the string and array types, the lengths are compared. For the number type, the number cannot be greater than`max`. An example of the use is as follows:

```js
rules: {
  users: { max: 11, message: 'The length cannot exceed 11' }
}
```

#### len

To verify the exact length of the field, specify`len`Property. For string and array types, the length property is compared. For type number, this property indicates an exact match for that number, that is, it can only be strictly equal to`len`. If`len`Attribute vs.`min`and`max`Attributes are used together, then`len`Preferred. Examples of usage are as follows:

```js
rules: {
  users: { len: 2, message: 'The length must be 2.' }
}
```

#### trigger

Configure the way to trigger the verification rules through `trigger`. When it is `change`, the verification is triggered when the input box value changes. When it is `blur`,
the verification is triggered after the input box value is out of focus. Can be set to an array `['change', 'blur']` to trigger both scenarios. The default is to trigger both scenarios.
If it is only triggered when the verification method is actively called, it can be set to an empty array `[]`. An example of usage is as follows:

```js
rules: {
  users: { len: 2, message: 'The length must be 2', trigger: 'change' },
  password: { len: 2, message: 'The length must be 2', trigger: ['change', 'blur'] },
  nickname: { len: 10, message: 'Duplicate name already exists', trigger: [] }
}
```

````

The configurable values are as follows:

- `blur`: The verification is triggered after the focus is out of focus.

- `change`: The verification is triggered when the value in the input box changes.

#### enum

Enumerated value validation, which verifies whether the value of the field is in`enum`Attribute configuration array`['admin', 'user', 'guest']`Medium. For example:

```js
rules: {
  role: { type: 'enum', enum: ['admin', 'user', 'guest'] }
}
````

#### whitespace

Verify that mandatory fields have only spaces. Mandatory fields that contain only blanks are generally considered an error. To treat a string consisting only of spaces as an error, you can set`whitespace`for`true`If this parameter is not configured, the input value of all spaces is valid.

```js
rules: {
  name: { required: true, whitespace: true, message: 'The relative name cannot be empty' }
}
```

#### fields

deep rule. If you need to validate deep object properties, you can assign nested rules to the rule's`fields`Attribute to validate an object or array validation rule. Note that if you do not specify on the parent rule`required`Property, the field is not declared to be fully valid on the source object, and the deep validation rule will not be enforced because there are no verifiable objects. For example:

- Object type:

```js
rules: {
  address: {
    type: 'object', required: true, //Required must be set to true for the parent rule.
    fields: {
      street: { type: 'string', required: true },
      city: { type: 'string', required: true },
      zip: { type: 'string', required: true, len: 8, message: 'invalid zip' }
    }
  },
  name: { type: 'string', required: true }
}
```

- Array type:

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

`defaultField`Attributes can be used with array or object types to validate all values of the container. It can be an object or an array containing validation rules. For example:

```js
rules: {
  urls: {
    type: 'array', required: true,
    defaultField: { type: 'url' }
  }
}
```

#### transform

Sometimes it is necessary to convert values before validation to force or in some way clean them up.`transform`, add a feature to the validation rule. Before validation, the attribute is converted and then reassigned to the source object to change the value of the attribute. For example, the space entered by the user is removed.

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

This parameter is used to configure the message displayed when field verification fails. Internationalization is supported.

- The easiest way to do this is to assign messages to rules.

```js
rules: {
  name: { type: 'string', required: true, message: 'Name is required' }
}
```

- Messages can be of any type, such as jsx format.

```js
rules: {
  name: { type: 'string', required: true, message: '<b>Name is required</b>' }
}
```

- A message can also be a function, for example, if you use vue-i18n

```js
rules: {
  name: { type: 'string', required: true, message: () => this.$t( 'name is required' ) }
}
```

#### validator

By`validator`The options are customized for a field.`callback`Must be invoked.

As shown below, the first`methods`Define a user-defined verification method in the object.

```js
// User-defined password verification method
validatePass(rule, value, callback) {
  if (!/^(?=._[a-z])(?=._[A-Z])(?=.\*\\d)[a-zA-Z\d]{8,}$/.test(value)) {
    callback(new Error('At least eight characters, including at least one uppercase letter, one lowercase letter, and one digit'))
  } else {
    callback()
  }
}
```

Then configure the rules to be verified.`validator: this.validatePass`:

```js
rules: {
  password: [
    { required: true, message: 'Required', trigger: 'blur' },
    { validator: this.validatePass, trigger: 'blur' }
  ]
}
```

#### asyncValidator

By`asyncValidator`The option is to perform custom asynchronous validation for a field.`callback`Must be invoked.

As shown below, the first`methods`Define a user-defined asynchronous verification method in the object.

```js
// Customizing asynchronous password verification method
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

Configure the rules to be verified.`asyncValidator: this.promiseField`:

```js
rules: {
  password: [
    { required: true, message: 'Required', trigger: 'blur' },
    { asyncValidator: this.promiseField, trigger: 'blur' }
  ]
}
```
