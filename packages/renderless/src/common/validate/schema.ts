/**
* Copyright (c) 2022 - present TinyVue Authors.
* Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
*
* Use of this source code is governed by an MIT-style license.
*
* THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
* BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
* A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
*
*/

import { format, complementError, asyncMap, warning, deepMerge, convertFieldsError } from './util'
import { hasOwn, isFunction } from '../type'

function Schema(descriptor, translate) {
  Schema.getSystemMessage = () => Schema.getDefaultMessage(translate)
  Schema.messages = Schema.getSystemMessage(translate)
  Schema.systemMessages = Schema.messages

  this.rules = null
  this._messages = Schema.systemMessages
  this.define(descriptor)
}

const getCompleteFn = (validCallback) => (results) => {
  let idx
  let errors = []
  let fields = {}

  function addValid(eror) {
    if (Array.isArray(eror)) {
      errors = errors.concat(...eror)
    } else {
      errors.push(eror)
    }
  }

  for (idx = 0; idx < results.length; idx++) {
    addValid(results[idx])
  }

  if (errors.length) {
    fields = convertFieldsError(errors)
  } else {
    errors = null
    fields = null
  }

  validCallback(errors, fields)
}

const isDeep = (rule, data) => {
  let deep = (rule.type === 'object' || rule.type === 'array') && (typeof rule.fields === 'object' || typeof rule.defaultField === 'object')

  deep = deep && (rule.required || (!rule.required && data.value))

  return deep
}

const getFieldsSchema = (rule, data) => {
  let schema = {}
  function addFullfield(key, item) {
    return {
      ...item,
      fullField: `${rule.fullField}.${key}`
    }
  }

  if (rule.defaultField) {
    for (const k in data.value) {
      if (hasOwn.call(data.value, k)) {
        schema[k] = rule.defaultField
      }
    }
  }

  schema = {
    ...schema,
    ...data.rule.fields
  }

  for (const f in schema) {
    if (hasOwn.call(schema, f)) {
      const fieldSchema = Array.isArray(schema[f]) ? schema[f] : [schema[f]]

      schema[f] = fieldSchema.map(addFullfield.bind(null, f))
    }
  }

  return schema
}

const arrayed = (failds) => {
  if (!Array.isArray(failds)) {
    failds = [failds]
  }

  return failds
}

const getRequiredErrorFeilds = ({ rule, failds, options }) => {
  if (rule.message) {
    failds = [].concat(rule.message).map(complementError(rule))
  } else if (options.error) {
    failds = [options.error(rule, format(options.messages.required, rule.field))]
  } else {
    failds = []
  }

  return failds
}

const setDataRuleOptions = ({ data, options }) => {
  if (data.rule.options) {
    let { messages, error } = options

    Object.assign(data.rule.options, { messages, error })
  }
}

const getValidateCallback = ({ failds, doIt }) => (errs) => {
  const finalErrors = []

  if (failds && failds.length) {
    finalErrors.push(...failds)
  }

  if (errs && errs.length) {
    finalErrors.push(...errs)
  }

  doIt(finalErrors.length ? finalErrors : null)
}

const asyncCallback = (options, rule, errorFields, doIt, data) => (e = []) => {
  let failds = e
  const deep = isDeep(rule, data)

  failds = arrayed(failds)

  if (!options.suppressWarning && failds.length) {
    Schema.warning('async-validator:', failds)
  }

  if (failds.length && rule.message) {
    failds = [].concat(rule.message)
  }

  failds = failds.map(complementError(rule))

  if (options.first && failds.length) {
    errorFields[rule.field] = 1
    return doIt(failds)
  }

  if (deep) {
    if (rule.required && !data.value) {
      failds = getRequiredErrorFeilds({ rule, failds, options })

      return doIt(failds)
    }
    const schema = new Schema(getFieldsSchema(rule, data))
    schema.messages(options.messages)
    setDataRuleOptions({ data, options })
    schema.validate(data.value, data.rule.options || options, getValidateCallback({ failds, doIt }))
  } else {
    doIt(failds)
  }
}

Schema.prototype = {
  messages(messages) {
    if (messages) {
      this._messages = deepMerge(Schema.getSystemMessage(), messages)
    }

    return this._messages
  },
  define(rules) {
    if (!rules) {
      throw new Error('Cannot configure a schema with no rules')
    }

    if (Array.isArray(rules) || typeof rules !== 'object') {
      throw new TypeError('Rules must be an object')
    }

    this.rules = {}
    let rule

    Object.keys(rules).forEach((key) => {
      if (hasOwn.call(rules, key)) {
        rule = rules[key]
        this.rules[key] = Array.isArray(rule) ? rule : [rule]
      }
    })
  },
  getSeries(options, source, source_) {
    let arr
    let value
    const series = {}
    const keys = options.keys || Object.keys(this.rules)

    keys.forEach((key) => {
      arr = this.rules[key]
      value = source[key]

      arr.forEach((r) => {
        let rule = r

        if (typeof rule.transform === 'function') {
          if (source === source_) {
            source = { ...source }
          }

          source[key] = rule.transform(value)
          value = source[key]
        }

        if (typeof rule === 'function') {
          rule = { validator: rule }
        } else {
          rule = { ...rule }
        }

        rule.validator = this.getValidationMethod(rule)
        rule.field = key
        rule.fullField = rule.fullField || key
        rule.type = this.getType(rule)

        options.custom && Object.assign(rule, options.custom)

        if (!rule.validator) {
          return
        }

        series[key] = series[key] || []
        series[key].push({ rule, value, source, field: key })
      })
    })

    return series
  },
  mergeMessage(options) {
    if (options.messages) {
      let messages = this.messages()

      if (messages === Schema.systemMessages) {
        messages = Schema.getSystemMessage()
      }

      deepMerge(messages, options.messages)

      options.messages = messages
    } else {
      options.messages = this.messages()
    }
  },
  validate(source_, o = {}, oc = () => undefined) {
    let source = source_
    let options = o
    let validCallback = oc
    if (typeof options === 'function') {
      validCallback = options
      options = {}
    }
    if (!this.rules || Object.keys(this.rules).length === 0) {
      validCallback && validCallback()
      return Promise.resolve()
    }
    const complete = getCompleteFn(validCallback)
    this.mergeMessage(options)
    const seriesData = this.getSeries(options, source, source_)
    const errorFields = {}
    return asyncMap(
      seriesData,
      options,
      (data, doIt) => {
        const rule = data.rule
        const validHandler = asyncCallback(options, rule, errorFields, doIt, data)
        let validResult
        if (rule.asyncValidator) {
          validResult = rule.asyncValidator(rule, data.value, validHandler, data.source, options)
        } else if (rule.validator) {
          validResult = rule.validator(rule, data.value, validHandler, data.source, options)
          if (validResult === true) {
            validHandler()
          } else if (validResult === false) {
            validHandler(rule.message || `${rule.field} fails`)
          } else if (Array.isArray(validResult)) {
            validHandler(validResult)
          } else if (validResult instanceof Error) {
            validHandler(validResult.message)
          }
        }
        if (validResult && validResult.then) {
          validResult.then(
            () => validHandler(),
            (e) => validHandler(e)
          )
        }
      },
      (results) => {
        complete(results)
      }
    )
  },
  getValidationMethod(rule) {
    if (isFunction(rule.validator)) {
      return rule.validator
    }

    const ruleKeys = Object.keys(rule)
    const messageIndex = ruleKeys.indexOf('message')

    if (messageIndex > -1) {
      ruleKeys.splice(messageIndex, 1)
    }

    if (ruleKeys.length === 1 && ruleKeys[0] === 'required') {
      return Schema.validators.required
    }

    return Schema.validators[this.getType(rule)] || false
  },
  getType(rule) {
    if (rule.type === undefined && rule.pattern instanceof RegExp) {
      rule.type = 'pattern'
    }

    if (typeof rule.validator !== 'function' && rule.type && !hasOwn.call(Schema.validators, rule.type)) {
      throw new Error(format('Unknown rule type %s', rule.type))
    }

    return rule.type || 'string'
  }
}

Schema.register = (type, validator) => {
  if (typeof validator !== 'function') {
    throw new TypeError('Cannot register a validator by type, validator is not a function')
  }

  Schema.validators[type] = validator
}

Schema.validators = {}

Schema.warning = warning

Schema.messages = {}

Schema.systemMessages = {}

Schema.getDefaultMessage = () => undefined

export default Schema
