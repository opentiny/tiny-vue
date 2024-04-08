// 处理数据：如果存在value为0或未定义的情况
export function handleEmptyData(nodes, links) {
  let flag = false
  const virtualData = []
  nodes.forEach((itemn) => {
    itemn.value = itemn.value - 0
    if (itemn.value === 0) {
      itemn.value = 5
      virtualData.push(itemn.name)
      flag = true
    }
  })
  // 如果存在value为0的情况，则生成一头一尾两条虚拟数据，用来遮盖掉value为0的数据连接线
  if (flag) {
    nodes.unshift({ name: 'virtical', value: 0, itemStyle: { color: 'transparent' } })
    nodes.push({ name: 'empty', value: 0, itemStyle: { color: 'transparent' } })
    virtualData.unshift('virtical')
  }
  virtualData.forEach((item) => {
    links.push({
      source: item,
      target: 'empty',
      // value设置为负值且足够大，能够盖掉value为0的数据连接线
      value: -9999999999
    })
  })
}
