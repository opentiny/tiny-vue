import help from './help';

export function bounce(prop, from, to) {
  // eslint-disable-next-line no-unused-vars
  const { min, max, unit, mid } = help(from, to);
  return `
  from,20%,53%,80%,to {
      ${prop}: ${from};
  }
  40%,43% {
      ${prop}: ${to}; 
  }
  70%{
    ${prop}: ${mid(50) + unit};  
  }
  90%{
    ${prop}: ${mid(13.2) + unit};  
  }
  `;
}
