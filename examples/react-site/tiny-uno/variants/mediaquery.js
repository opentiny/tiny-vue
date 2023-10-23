// mediaQuery ,  xs:w120  sm:w60 md:w80 lg:w120   md:w240 lg:w480
export default (matcher, context) => {
  const reg = '^(xs|sm|md|lg):';
  const [, mediaQuery = ''] = matcher.match(new RegExp(reg)) ?? [];

  if (!mediaQuery) {
    return matcher;
  }
  let bp = context.theme.breakpoints;
  return {
    matcher: matcher.replace(/^.+?:(.*)$/, '$1'),
    parent: `@media (min-width: ${bp[mediaQuery]})`,
  };
};
