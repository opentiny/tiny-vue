// "child:"        child:f16  child:box32
export default (matcher) => {
  if (!matcher.startsWith('child:')) return matcher
  return {
    matcher: matcher.slice(6),
    selector: (s) => `${s}>*`,
    body: (s) => s
  }
}
