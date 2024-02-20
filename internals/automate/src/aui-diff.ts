import path from 'node:path'
import { readdir, stat, readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import XLSX from 'sheetjs-style'
import { difference } from 'lodash-es'
import { parseString } from './utils/parse-string'
import { methodsMap } from './config/diff-map'

const AUI = 'aui'
const TINY = 'tiny'

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

const ignoreList = [
  'common',
  'icon',
  'locale',
  'grid',
  'chart',
  'chart-beta',
  'grid-column',
  'grid-manager',
  'grid-toolbar',
  // 没有pc和mf模板的组件
  'list'
]

// 需要aurora源码包与tiny-vue源码包放在同一目录下，否则需要自行配置一下auiVueProject和auiRenderLessProject路径
const auiVueProject = path.join(__dirname, '../../../../aurora-vue')
const auiRenderLessProject = path.join(__dirname, '../../../../aurora-renderless')
const tinyTempRoot = path.join(__dirname, '../../../packages/vue/src')
const tinyRenderLessRoot = path.join(__dirname, '../../../packages/renderless/src')
const auiTempRoot = path.join(auiVueProject, './packages')
const auiRenderLessRoot = path.join(auiRenderLessProject, './src')

// 遍历demo文件夹
async function scanDir(dirPath, getTarget = 'file'): Promise<string[]> {
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

// 解析模板文件获取props
function getFileProps(rawContent: any) {
  const propsReg = /props\: (\[(.|\n)+?\])/
  const [, arrStr] = rawContent.match(propsReg) || []
  let componentProps = null
  if (arrStr) {
    componentProps = parseString(arrStr, { props: [] })
    return componentProps
  } else {
    const propsObjReg = /\n\s\sprops\: (\{(.|\n)+?\n\s\s\})/
    let [, objStr] = rawContent.match(propsObjReg) || []
    if (!objStr) return null
    objStr = objStr.replace(/as\s.+?\>/g, '')
    objStr = objStr.replace(/\(.+\:.+?\) =\>/g, '() =>')
    objStr = objStr.replace(/Array\<.*?\>/g, 'Array')
    const scope = {
      props: {},
      $props: {},
      t: () => {},
      $constants: {},
      loadingImg: {}
    }
    const propObj = parseString(objStr, scope)
    const porpsArr = Object.keys(propObj)
    if (porpsArr.length > 0) {
      return porpsArr
    }
  }
  return null
}

// 官方弃用exists api，推荐直接catch错误
function safeReadFile(filePath): Promise<string | undefined> {
  return readFile(filePath, { encoding: 'utf-8' })
    .then((res) => res)
    .catch(() => undefined)
}

// 获取组件的pc props和mobile-first props
async function getProps(type, component) {
  const root = type === TINY ? tinyTempRoot : auiTempRoot
  let pcProps
  let mfProps
  const pcPath = path.join(root, component, './src/pc.vue')
  const mfPath = path.join(root, component, './src/mobile-first.vue')
  const pcContent = await safeReadFile(pcPath)
  const mfContent = await safeReadFile(mfPath)
  if (pcContent) {
    pcProps = getFileProps(pcContent)
  }
  if (mfContent) {
    mfProps = getFileProps(mfContent)
  }
  return {
    pcProps,
    mfProps
  }
}

async function getMethods(type, component) {
  const root = type === TINY ? tinyRenderLessRoot : auiRenderLessRoot
  const filename = type === TINY ? 'index.ts' : 'index.js'
  const indexPath = path.join(root, component, filename)
  const content = await safeReadFile(indexPath)
  if (content) {
    const reg = /export const (.+?) =/g
    let methods = content.match(reg)?.map((str) => str.match(/export const (.+?)(:.+?)? =/)?.[1]) || []
    if (type === AUI && methodsMap[component]) {
      const mapping = methodsMap[component]
      methods = methods.map((method) => mapping[method] || method)
    }
    return methods
  }
  return null
}

async function getExposeMethods(type, component) {
  const root = type === TINY ? tinyRenderLessRoot : auiRenderLessRoot
  const filename = type === TINY ? 'vue.ts' : 'vue.js'
  const indexPath = path.join(root, component, filename)
  const content = await safeReadFile(indexPath)
  if (content) {
    let api = []
    const reg = /export const api = (\[(.|\n)+?\])/
    const apiStr = content.match(reg)?.[1]
    if (apiStr) {
      api = parseString(apiStr)
    }

    return api
  }
  return null
}

async function getEvents(type, component) {
  const root = type === TINY ? tinyRenderLessRoot : auiRenderLessRoot
  const filename = type === TINY ? 'index.ts' : 'index.js'
  const indexPath = path.join(root, component, filename)
  const content = await safeReadFile(indexPath)
  if (content) {
    const reg = /emit\(.+?\)/g
    const events = content.match(reg)?.map((str) => str.match(/emit\('(.+?)'(.+?)?\)/)?.[1]) || []
    return Array.from(new Set(events))
  }
  return null
}

async function getComponentsInfo() {
  const tinyComponents = (await scanDir(tinyTempRoot, 'dir')).filter((i) => !ignoreList.includes(i))
  const auiComponents = (await scanDir(auiTempRoot, 'dir')).filter((i) => !ignoreList.includes(i))
  const tinyInfo = await Promise.all(
    tinyComponents.map(async (name) => {
      const { pcProps, mfProps } = await getProps(TINY, name)
      const methods = await getMethods(TINY, name)
      const exposeMethods = await getExposeMethods(TINY, name)
      const events = await getEvents(TINY, name)
      return { name, pcProps, mfProps, methods, exposeMethods, events }
    })
  )

  const auiInfo = await Promise.all(
    auiComponents.map(async (name) => {
      const { pcProps, mfProps } = await getProps(AUI, name)
      const methods = await getMethods(AUI, name)
      const exposeMethods = await getExposeMethods(AUI, name)
      const events = await getEvents(AUI, name)
      return { name, pcProps, mfProps, methods, exposeMethods, events }
    })
  )

  return { tinyInfo, auiInfo }
}

// 生成两边特有组件的sheet
function generateCompSheet(tinyInfo, auiInfo) {
  const compData: any = [['tiny特有组件', 'aui特有组件']]
  const auiComps = auiInfo.map((i) => i.name)
  const tinyComps = tinyInfo.map((i) => i.name)
  const tinyUniqueComps = difference(tinyComps, auiComps)
  const auiUniqueComps = difference(auiComps, tinyComps)
  const len = Math.max(auiUniqueComps.length, tinyUniqueComps.length)
  for (let index = 0; index < len; index++) {
    compData.push([tinyUniqueComps[index] || '', auiUniqueComps[index] || ''])
  }
  const compSheetHeader = ['A1', 'B1']
  const compSheet = XLSX.utils.aoa_to_sheet(compData)
  compSheet['!cols'] = [{ wpx: 100 }, { wpx: 100 }]
  Object.keys(compSheet).forEach((key) => {
    // 设置单元格属性
    if (key?.indexOf('!') < 0) {
      compSheet[key].s = {
        alignment: {
          horizontal: 'center'
        },
        font: {
          bold: compSheetHeader.includes(key)
        }
      }
    }
  })
  return compSheet
}

function getDiffData(tinyInfo, auiInfo) {
  const data = tinyInfo.map((item) => {
    const auiItem = auiInfo.find((i) => i.name === item.name)
    if (!auiItem) {
      return null
    }
    const { name, pcProps, mfProps, methods, events } = item
    const { pcProps: auiPcProps, mfProps: auiMfProps, methods: auiMethods, events: auiEvents } = auiItem
    const tinyPcSpecialProps = difference(pcProps, auiPcProps)
    const auiPcSpecialProps = difference(auiPcProps, pcProps)
    const commonProps = difference(pcProps, tinyPcSpecialProps)

    const tinyMfSpecialProps = difference(mfProps, auiMfProps)
    const auiMfSpecialProps = difference(auiMfProps, mfProps)
    const commonMfProps = difference(mfProps, tinyMfSpecialProps)

    const tinySpecialMethods = difference(methods, auiMethods)
    const auiSpecialMethods = difference(auiMethods, methods)
    const commonMethods = difference(methods, tinySpecialMethods)

    const tinySpecialEvents = difference(events, auiEvents)
    const auiSpecialEvents = difference(auiEvents, events)
    const commonEvents = difference(events, tinySpecialEvents)
    return {
      name,
      tinyPcProps: tinyPcSpecialProps?.join(','),
      auiPcSpecialProps: auiPcSpecialProps?.join(','),
      commonProps: commonProps?.join(','),
      tinyMfSpecialProps: tinyMfSpecialProps?.join(','),
      auiMfSpecialProps: auiMfSpecialProps?.join(','),
      commonMfProps: commonMfProps?.join(','),
      tinySpecialEvents: tinySpecialEvents?.join(','),
      auiSpecialEvents: auiSpecialEvents?.join(','),
      commonEvents: commonEvents?.join(','),
      tinySpecialMethods: tinySpecialMethods?.join(','),
      auiSpecialMethods: auiSpecialMethods?.join(','),
      commonMethods: commonMethods?.join(',')
    }
  })
  const diffData = data.filter((i) => i)
  return diffData
}

function generateDiffSheet(data) {
  const diffData = data.sort((a, b) => a.name.localeCompare(b.name))
  const worksheet = XLSX.utils.aoa_to_sheet([[]])
  XLSX.utils.sheet_add_aoa(worksheet, [
    ['               特性\n   组件', 'pc属性', '', '', 'mobile-first属性', '', '', '事件', '', '', '方法', '', ''],
    [
      '',
      'tiny特有属性',
      'aui特有属性',
      '共有属性',
      'tiny特有属性',
      'aui特有属性',
      '共有属性',
      'tiny特有事件',
      'aui特有事件',
      '共有事件',
      'tiny特有方法',
      'aui特有方法',
      '共有方法'
    ]
  ])
  worksheet['!merges'] = [
    { s: { c: 0, r: 0 }, e: { c: 0, r: 1 } },
    { s: { c: 1, r: 0 }, e: { c: 3, r: 0 } },
    { s: { c: 4, r: 0 }, e: { c: 6, r: 0 } },
    { s: { c: 7, r: 0 }, e: { c: 9, r: 0 } },
    { s: { c: 10, r: 0 }, e: { c: 12, r: 0 } }
  ]
  XLSX.utils.sheet_add_json(worksheet, diffData, { skipHeader: true, origin: 'A3' })

  worksheet['!cols'] = Object.keys(diffData[0] || []).map((key) => {
    if (key === 'name') {
      return { wpx: 80 }
    } else {
      return { wpx: 140 }
    }
  })

  worksheet['!rows'] = diffData.map((item, index) => ({ hpx: index < 2 ? 30 : 60 }))
  Object.keys(worksheet).forEach((key) => {
    const isCell = key?.indexOf('!') < 0
    const isHeader = /^[A-Z](1|2)$/.test(key)
    const isStart = ['A1'].includes(key)
    // 设置单元格属性
    if (isCell) {
      worksheet[key].s = {
        alignment: {
          vertical: 'center',
          horizontal: 'center',
          wrapText: true
        }
      }
    }

    if (isHeader) {
      worksheet[key].s.font = {
        bold: true
      }
    }
    if (isStart) {
      worksheet[key].s.alignment.horizontal = 'left'
      worksheet[key].s.border = {
        diagonal: {
          style: 'thin',
          color: {
            rgb: '000000'
          }
        },
        diagonalDown: true
      }
    }
  })
  return worksheet
}

async function diff() {
  const { tinyInfo, auiInfo } = await getComponentsInfo()

  const workbook = XLSX.utils.book_new()
  const diffSheet = generateDiffSheet(getDiffData(tinyInfo, auiInfo))
  XLSX.utils.book_append_sheet(workbook, diffSheet, '组件特性差异对比')

  const compSheet = generateCompSheet(tinyInfo, auiInfo)
  XLSX.utils.book_append_sheet(workbook, compSheet, '两边特有组件')
  XLSX.writeFile(workbook, '组件对比.xlsx', { cellStyles: true })
}

diff()
