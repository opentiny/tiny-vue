/**
 *  转义字符 防止xss攻击
 */
const matchHtmlRegExp = /["'&<>/]/;
function escapeHtml(string) {
  const str = `${string}`;
  const match = matchHtmlRegExp.exec(str);
  if (!match) {
    return str;
  }
  let escape;
  let html = '';
  let index;
  let lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34: // "
        escape = '&quot;';
        break;
      case 38: // &
        escape = '&amp;';
        break;
      case 39: // '
        escape = '&#x27;';
        break;
      case 60: // <
        escape = '&lt;';
        break;
      case 62: // >
        escape = '&gt;';
        break; // /
      case 47:
        escape = '&#x2F;';
        break;
      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
}


const defendXSS = obj => {
  if (typeof obj === 'string') {
    return escapeHtml(obj);
  } else if (typeof obj === 'number') {
    return obj;
  } else if (typeof obj === 'object') {
    for (const key in obj) {
      obj[key] = defendXSS(obj[key]);
    }
    return obj;
  } else {
    return obj;
  }
};

export default defendXSS;
export { escapeHtml };
