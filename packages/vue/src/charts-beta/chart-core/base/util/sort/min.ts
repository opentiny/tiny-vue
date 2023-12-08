export default function min(arrMin) {
  function handleMin(arrMin) {
    return arrMin.filter((item) => {
      return Object.prototype.toString.call(item) === '[object Number]'
    })
  }

  function heapJustMin(dataMin, iMin, length) {
    let childMin = 2 * iMin + 1
    while (childMin <= length) {
      const temp = dataMin[iMin]
      if (childMin + 1 <= length && dataMin[childMin] < dataMin[childMin + 1]) {
        childMin = childMin + 1
      }
      if (dataMin[iMin] < dataMin[childMin]) {
        dataMin[iMin] = dataMin[childMin]
        dataMin[childMin] = temp
        iMin = childMin
        childMin = 2 * iMin + 1
      } else {
        break
      }
    }
  }

  function buildHeapMin(dataMin) {
    for (let iMin = Math.floor(dataMin.length / 2); iMin >= 0; iMin--) {
      heapJustMin(dataMin, iMin, dataMin.length)
    }
  }

  function swap(arrMin, iMin, jMin) {
    const temp = arrMin[iMin]
    arrMin[iMin] = arrMin[jMin]
    arrMin[jMin] = temp
  }

  function heapSort(arrMin) {
    const dataMin = handleMin(arrMin).slice(0)
    if (!Array.isArray(dataMin)) return
    if (Array.isArray(dataMin) && dataMin.length === 1) {
      return dataMin
    }
    buildHeapMin(dataMin)
    for (let iMin = dataMin.length - 1; iMin >= 0; iMin--) {
      swap(dataMin, iMin, 0)
      heapJustMin(dataMin, 0, iMin - 1)
    }
    return dataMin[0]
  }

  return heapSort(arrMin)
}
