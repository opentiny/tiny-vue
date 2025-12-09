/* eslint-disable no-console */
/** 拷贝文件 ----------------------------------------- 此脚本为临时文件，使用时记得修改路径
 * 1、将设计师提供的 IconXxxYyy.svg 放到 svgs-raw 目录
 * 2、执行本命令，把每一个图标名转驼峰后，放到svgs目录。 存在则覆盖。
 * */

import fg from 'fast-glob'
import fs from 'node:fs'

const rawPath = '../../packages/theme-saas/src/svgs-raw'
const svgsPath = '../../packages/theme-saas/src/svgs'

const camelize = (str) => str.replace(/-(\w)/g, (_, c) => (c ? c.toUpperCase() : ''))
const hyphenate = (str) => str.replace(/\B([A-Z])/g, '-$1').toLowerCase()

const svgsFiles = await fg(['**/*.svg'], { dot: true, cwd: rawPath })
const linedSvgs = svgsFiles.filter((filename) => !filename.endsWith('Filled.svg'))
const filledSvgs = svgsFiles.filter((filename) => filename.endsWith('Filled.svg'))

validName()
validNewIcon()
await validOldIcon()
copyRaws()

// console.log(
//   linedSvgs
//     .map((n) => n.replace('.svg', ''))
//     .map((n) => `"${n}"`)
//     .join(',')
// )

// 1、校验文件名是否成对：  IconAdd.svg----> IconAddFilled.svg
function validName() {
  let count = 0
  linedSvgs.forEach((filename) => {
    if (!filename.startsWith('Icon')) {
      console.log(`线性图标：${filename} 名称不对，没有 Icon 打头`)
    }

    const fillName = filename.replace('.svg', 'Filled.svg')
    if (!filledSvgs.includes(fillName)) {
      console.log(`线性图标：${filename} 没有找到对应的面图标`)
    }
  })
}

// 2、判断哪些是新增图标， 原来svgs中不存在的线图标
function validNewIcon() {
  let count = 0
  linedSvgs.forEach((filename) => {
    const name = hyphenate(filename).replace('icon-', '')
    if (!fs.existsSync(svgsPath + '/' + name)) {
      console.log(`${++count} 线性图标 ${filename} ---> ${name} 是新增图标 `)
    }
  })
}

// 3、判断所有的旧图标，不在新图标中
async function validOldIcon() {
  const oldSvgs = await fg(['**/*.svg'], { dot: true, cwd: svgsPath })
  let count = 0
  oldSvgs.forEach((filename) => {
    if (filename.includes('-filled.svg')) {
      return
    }

    let name = 'Icon' + camelize('-' + filename)
    if (!linedSvgs.includes(name)) {
      console.log(`${++count} 原有图标 ${filename} ---> ${name} 需要梳理，不在新图标范围中 `)
    }
  })
}

// 4、复制 svgs-raw中的文件到 svgs中
function copyRaws() {
  svgsFiles.forEach((filename) => {
    const name = hyphenate(filename).replace('icon-', '')
    // console.log(`from : ${rawPath}/${filename}  ---> to: ${svgsPath}/${name}   `)
    // fs.copyFileSync(`${rawPath}/${filename}`, `${svgsPath}/${name}`)
    // 不能直接复制，需要做 #191919 -> var(--tiny-first-color, #191919)  #AEAEAE -> var(--tiny-second-color, #aeaeAE)
    editFile(
      `${rawPath}/${filename}`,
      (content) => {
        return content
          .replaceAll('#191919', 'var(--tiny-first-color, #191919)')
          .replaceAll('#AEAEAE', 'var(--tiny-second-color, #aeaeAE)')
          .replaceAll('#aeaeae', 'var(--tiny-second-color, #aeaeAE)')
      },
      `${svgsPath}/${name}`
    )
  })
}

// 替换文件内容
function editFile(filename: string, editFn: (content: string) => string, saveTo?: string) {
  try {
    fs.accessSync(filename, fs.constants.O_RDWR)
    let content = fs.readFileSync(filename, 'utf-8')

    fs.writeFileSync(saveTo || filename, editFn(content), 'utf-8')
  } catch {
    console.log(`${filename} 访问失败！`)
  }
}
