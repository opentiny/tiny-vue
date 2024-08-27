/**
 * 此文件暂时处理成这样，后续有思路再进行整改
 */
const getWindow = function () {
  return typeof window === 'undefined' ? global : window
}

const log = { logger: getWindow().console }

const xss = {
  getXssOption: (str) => str,
  setXssOption: (str) => str,
  filterHtml: (str) => str,
  setFilterHtml: (str) => str,
  filterAttrs: (str) => str,
  setFilterAttrs: (str) => str,
  filterUrl: (str) => str,
  setFilterUrl: (str) => str
}

const def = { xss, log }

export { def as default, log, xss }
