export function line(prop, from, to) {
  return `
from {
    ${prop}: ${from};
}
to {
    ${prop}: ${to};
}
`
}
