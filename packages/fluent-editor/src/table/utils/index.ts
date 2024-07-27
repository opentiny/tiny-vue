export function css(domNode, rules) {
  if (typeof rules === 'object') {
    for (const prop in rules) {
      if (prop) {
        if (Array.isArray(rules[prop])) {
          // 兼容IE11浏览器
          rules[prop].forEach(val => {
            domNode.style[prop] = val;
          });
        } else {
          domNode.style[prop] = rules[prop];
        }
      }
    }
  }
}

/**
 * getRelativeRect
 * @param  targetRect  rect data for target element  {Object}
 * @param   container  container element {Element}
 * @return             an object with rect data {Object}
 */
export function getRelativeRect(targetRect, container) {
  const containerRect = container.getBoundingClientRect();

  return { // ie浏览器中getBoundingClientRect输出为left、right、top、bottom，与chrome的x、y不同
    x: (targetRect.x || targetRect.left) - (containerRect.x || containerRect.left) - container.scrollLeft,
    y: (targetRect.y || targetRect.top) - (containerRect.y || containerRect.top) - container.scrollTop,
    x1: (targetRect.x || targetRect.left) - (containerRect.x || containerRect.left) - container.scrollLeft + targetRect.width,
    y1: (targetRect.y || targetRect.top) - (containerRect.y || containerRect.top) - container.scrollTop + targetRect.height,
    width: targetRect.width,
    height: targetRect.height
  };
}


export const elementRemove = function (node) {
  node && node.parentNode && node.parentNode.removeChild(node)
}

export const arrayFrom = function (arrayLike, mapFn?, thisArg?) {
  if (!arrayLike) {
    throw new TypeError(
      'Array.from requires an array-like object - not null or undefined'
    )
  }

  let length = arrayLike.length
  let resArray = []

  for (let i = 0; i < length; i++) {
    if (typeof mapFn === 'function') {
      resArray.push(mapFn.call(thisArg, arrayLike[i]))
    } else {
      resArray.push(arrayLike[i])
    }
  }

  return resArray
}


