import { defaultJoinChar } from '../defaults'

/**
 * Splits a string by a given character (default ','). Escaped characters (characters
 * preceded by a backslash) will not apply to the split, and the backslash will be
 * removed in the array element. Inverse of `joinWith`.
 *
 * @example
 * splitBy('this\\,\\,that,,the other,,,\\,')
 * // or
 * splitBy('this\\,\\,that,,the other,,,\\,', ',')
 * // would return
 * ['this,,that', '', 'the other', '', '', ',']
 */
export const splitBy = (str?: string, splitChar = defaultJoinChar) =>
  typeof str === 'string'
    ? str
        .split(`\\${splitChar}`)
        .map((c) => c.split(splitChar))
        .reduce((prev, curr, idx) => {
          if (idx === 0) {
            return curr
          }
          return [...prev.slice(0, prev.length - 1), `${prev[prev.length - 1]}${splitChar}${curr[0]}`, ...curr.slice(1)]
        }, [])
    : []

/**
 * Joins an array of strings using the given character (default ','). When the given
 * character appears in an array element, a backslash will be added just before it to
 * distinguish it from the join character. Inverse of `splitBy`.
 *
 * @example
 * joinWith(['this,,that', '', 'the other', '', '', ','])
 * // would return
 * 'this\\,\\,that,,the other,,,\\,'
 */
export const joinWith = (strArr: (string | undefined | null)[], joinChar = defaultJoinChar) =>
  strArr.map((str) => `${str ?? ''}`.replace(new RegExp(joinChar, 'g'), `\\${joinChar}`)).join(joinChar)

/**
 * Trims the value if it is a string. Otherwise returns value as-is.
 */
export const trimIfString = (val: any) => (typeof val === 'string' ? val.trim() : val)

/**
 * Splits strings by comma and trims each element. Arrays are returned as-is but
 * any string elements are trimmed.
 */
export const toArray = (v: any) =>
  Array.isArray(v)
    ? v.map(trimIfString)
    : typeof v === 'string'
      ? splitBy(v, defaultJoinChar)
          .filter((s) => !/^\s*$/.test(s))
          .map((s) => s.trim())
      : typeof v === 'number'
        ? [v]
        : []

export const nullFreeArray = <T>(arr: T[]): arr is Exclude<T, null>[] => arr.every(Boolean)

export const switchHandler = function (
  action,
  stack,
  vstack,
  lstack,
  symbol,
  lexer,
  preErrorSymbol,
  yyleng,
  yytext,
  yylineno,
  yyloc,
  recovering,
  len,
  yyval,
  ranges,
  r,
  sharedState,
  args,
  newState,
  table
) {
  switch (action[0]) {
    case 1:
      stack.push(symbol)
      vstack.push(lexer.yytext)
      lstack.push(lexer.yylloc)
      stack.push(action[1])
      symbol = null
      if (!preErrorSymbol) {
        yyleng = lexer.yyleng
        yytext = lexer.yytext
        yylineno = lexer.yylineno
        yyloc = lexer.yylloc
        if (recovering > 0) {
          recovering--
        }
      } else {
        symbol = preErrorSymbol
        preErrorSymbol = null
      }
      break
    case 2:
      len = this.productions_[action[1]][1]
      yyval.$ = vstack[vstack.length - len]
      yyval._$ = {
        first_line: lstack[lstack.length - (len || 1)].first_line,
        last_line: lstack[lstack.length - 1].last_line,
        first_column: lstack[lstack.length - (len || 1)].first_column,
        last_column: lstack[lstack.length - 1].last_column
      }
      if (ranges) {
        yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]]
      }
      r = this.performAction.apply(
        yyval,
        [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args)
      )
      if (typeof r !== 'undefined') {
        return { isResult: true, data: r }
      }
      if (len) {
        stack = stack.slice(0, -1 * len * 2)
        vstack = vstack.slice(0, -1 * len)
        lstack = lstack.slice(0, -1 * len)
      }
      stack.push(this.productions_[action[1]][0])
      vstack.push(yyval.$)
      lstack.push(yyval._$)
      newState = table[stack[stack.length - 2]][stack[stack.length - 1]]
      stack.push(newState)
      break
    case 3:
      return { isResult: true, data: true }
  }
}

export const lex = function (lexer, EOF, self) {
  let token
  token = lexer.lex() || EOF
  if (typeof token !== 'number') {
    token = self.symbols_[token] || token
  }
  return token
}

export const parse = function (input) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const self = this
  const stack = [0]
  const vstack = [null]
  const lstack = []
  const table = this.table
  const yytext = ''
  const yylineno = 0
  const yyleng = 0
  const recovering = 0
  const TERROR = 2
  const EOF = 1
  // eslint-disable-next-line prefer-rest-params
  const args = lstack.slice.call(arguments, 1)
  const lexer = Object.create(this.lexer)
  const sharedState = { yy: {} }
  for (const k in this.yy) {
    if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
      sharedState.yy[k] = this.yy[k]
    }
  }
  lexer.setInput(input, sharedState.yy)
  sharedState.yy.lexer = lexer
  sharedState.yy.parser = this
  if (typeof lexer.yylloc == 'undefined') {
    lexer.yylloc = {}
  }
  const yyloc = lexer.yylloc
  lstack.push(yyloc)
  const ranges = lexer.options && lexer.options.ranges
  if (typeof sharedState.yy.parseError === 'function') {
    this.parseError = sharedState.yy.parseError
  } else {
    this.parseError = Object.getPrototypeOf(this).parseError
  }

  let symbol
  let preErrorSymbol
  let state
  let action
  let r
  let yyval = {}
  let p
  let len
  let newState
  let expected
  while (true) {
    state = stack[stack.length - 1]
    if (this.defaultActions[state]) {
      action = this.defaultActions[state]
    } else {
      if (symbol === null || typeof symbol == 'undefined') {
        symbol = lex(lexer, EOF, self)
      }
      action = table[state] && table[state][symbol]
    }
    if (typeof action === 'undefined' || !action.length || !action[0]) {
      let errStr = ''
      expected = []
      for (p in table[state]) {
        if (this.terminals_[p] && p > TERROR) {
          expected.push("'" + this.terminals_[p] + "'")
        }
      }
      if (lexer.showPosition) {
        errStr =
          'Parse error on line ' +
          (yylineno + 1) +
          ':\n' +
          lexer.showPosition() +
          '\nExpecting ' +
          expected.join(', ') +
          ", got '" +
          (this.terminals_[symbol] || symbol) +
          "'"
      } else {
        errStr =
          'Parse error on line ' +
          (yylineno + 1) +
          ': Unexpected ' +
          (symbol === EOF ? 'end of input' : "'" + (this.terminals_[symbol] || symbol) + "'")
      }
      this.parseError(errStr, {
        text: lexer.match,
        token: this.terminals_[symbol] || symbol,
        line: lexer.yylineno,
        loc: yyloc,
        expected
      })
    }
    if (Array.isArray(action[0]) && action.length > 1) {
      throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol)
    }

    const result = switchHandler(
      action,
      stack,
      vstack,
      lstack,
      symbol,
      lexer,
      preErrorSymbol,
      yyleng,
      yytext,
      yylineno,
      yyloc,
      recovering,
      len,
      yyval,
      ranges,
      r,
      sharedState,
      args,
      newState,
      table
    )
    if (result && result.isResult) {
      return result.data
    }
  }
  return true
}
