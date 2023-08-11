// select:c-primary  select:bg-black             ::selection只可以应用于少数的CSS属性：color, background
export default (matcher) => {
  if (!matcher.startsWith('select:')) return matcher
  return {
    matcher: matcher.slice(7),
    selector: (s) => `${s} ::selection`,
    body: (body) => {
      body.forEach((e) => {
        e[1] && (e[1] += '!important')
      })
      return body
    }
  }
}
