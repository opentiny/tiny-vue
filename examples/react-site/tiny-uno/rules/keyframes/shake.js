import help from './help';
/**
 * 指定范围的上下10%的幅度，进行摆动
 */
export function shake(prop, from, to) {
  // eslint-disable-next-line no-unused-vars
  const { min, max, unit, mid } = help(from, to);
  return `
  from,to {
      ${prop}: ${from};
  }
  10%,30%,50%,70%,90%{
    ${prop}: ${mid(-10) + unit};  
  }
  20%,40%,60%,80% {
      ${prop}: ${mid(110) + unit};  
  }
  `;
}
