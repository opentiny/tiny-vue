// 这是一个特殊的变体。 当用户需要使用缀时，传入前缀，返回一个变体函数
export default prefix => matcher => {
  if (!matcher.startsWith(prefix)) return 'nomatch';
  return {
    matcher: matcher.slice(prefix.length),
    selector: s => `${s}`,
  };
};
