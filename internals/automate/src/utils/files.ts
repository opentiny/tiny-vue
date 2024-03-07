import path from 'node:path'
import { readdir, stat, readFile } from 'node:fs/promises'

/**
 * @description 遍历目标文件夹，返回文件夹中浅层文件或者文件夹
 * @param dirPath {String} 文件夹路径
 * @param getTarget {String} 传file返回所有文件，dir返回文件夹，all返回两者
 */
export async function scanDir(dirPath, getTarget = 'file'): Promise<string[]> {
  const dirArr: string[] = []
  const dirs = await readdir(dirPath)
  return new Promise((resolve) => {
    dirs.forEach(async (name: string, index) => {
      const info = await stat(path.join(dirPath, name))
      const isDir = info.isDirectory()
      if (getTarget === 'all') {
        dirArr.push(name)
      } else if (isDir && getTarget === 'dir') {
        dirArr.push(name)
      } else if (!isDir && getTarget === 'file') {
        dirArr.push(name)
      }
      if (index === dirs.length - 1) {
        resolve(dirArr)
      }
    })
  })
}

// 官方弃用exists api，推荐直接catch错误
export function safeReadFile(filePath): Promise<string | undefined> {
  return readFile(filePath, { encoding: 'utf-8' })
    .then((res) => res)
    .catch(() => undefined)
}
