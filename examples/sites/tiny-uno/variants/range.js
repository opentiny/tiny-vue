// range:  配合 range 使用   range:c-error
export default (matcher) => {
  if (!matcher.startsWith('range:')) return matcher
  return {
    matcher: matcher.slice(6),
    selector: (s) => `.range:hover ${s}`,
    body: (body) => {
      body.push(['transition', 'all var(--trans-time)'])
      return body
    }
  }
}
