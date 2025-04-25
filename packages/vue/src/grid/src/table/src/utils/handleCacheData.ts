// 创建快速缓存
export const buildCache = (tableData, { treeConfig, treeOrdered }) => {
  // 使用WeakMap存储原始数据和备份数据的映射关系,WeakMap的key是对象的弱引用,可以被垃圾回收
  const backupMap = new WeakMap()
  // 从treeConfig中解构children和temporaryIndex配置,temporaryIndex默认为'_$index_'
  const { children, temporaryIndex = '_$index_' } = treeConfig || {}
  // 判断是否为树形结构且未排序
  const isTreeOrderedFalse = treeConfig && !treeOrdered

  /**
   * 递归遍历数组,为每个节点创建备份
   * @param {Array} arr - 要遍历的数组
   * @param {number} rowLevel - 当前行的层级
   * @param {string} parentIndex - 父节点的索引
   * @returns {Array} 备份数据数组
   */
  const traverse = (arr, rowLevel, parentIndex) => {
    // 存储当前层级所有节点的备份数据
    const backup = []

    if (Array.isArray(arr) && arr.length > 0) {
      arr.forEach((row, rowIndex) => {
        // 如果是未排序的树形结构,生成临时索引,格式为:父索引.当前索引
        if (isTreeOrderedFalse) {
          row[temporaryIndex] = `${parentIndex ? `${parentIndex}.` : ''}${rowIndex + 1}`
        }

        // 深拷贝当前行数据,children置为null避免循环引用
        const backupRow = structuredClone({ ...row, [children]: null })

        // 将备份数据加入备份数组
        backup.push(backupRow)
        // 建立原始数据和备份数据的映射关系
        backupMap.set(row, backupRow)

        // 如果存在子节点,递归处理子节点
        if (row[children]) {
          backupRow[children] = traverse(row[children], rowLevel + 1, isTreeOrderedFalse ? row[temporaryIndex] : '')
        }
      })
    }

    return backup
  }

  // 从根节点开始遍历,生成备份数据
  const backupData = traverse(tableData, 0, '')

  // 返回备份数据和映射关系
  return { backupData, backupMap }
}
