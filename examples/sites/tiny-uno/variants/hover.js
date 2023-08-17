// hover:                 h:c-error
export default (matcher) => {
  if (!matcher.startsWith('h:')) return matcher
  return {
    matcher: matcher.slice(2),
    selector: (s) => `${s}:hover`,
    body: (body) => {
      body.push(['transition', 'all var(--trans-time)'])
      return body
    }
  }
}
