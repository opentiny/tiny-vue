// !                   !c-error
export default matcher => {
  if (!matcher.startsWith('!')) return matcher;
  return {
    matcher: matcher.slice(1),
    body: body => {
      body.forEach(e => {
        e[1] && (e[1] += ' !important');
      });
      return body;
    },
  };
};
