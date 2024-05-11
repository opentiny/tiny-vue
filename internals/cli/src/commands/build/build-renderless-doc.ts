import { join } from 'node:path'
import type {
  Symbol,
  ts,
  TypeChecker,
  TypeElementTypes,
  VariableDeclaration,
  Node,
  ArrowFunction,
  FunctionDeclaration
} from 'ts-morph'
import type { SourceFile } from 'ts-morph'
import { Project, SyntaxKind } from 'ts-morph'
import { existsSync, readdirSync } from 'node:fs'
import { logRed, logYellow } from '../../shared/utils'

let ident = 0

const warn = (compName: string, msg: string) => logYellow(`${' '.repeat(ident)}[${compName}]: ${msg}`)
const error = (compName: string, msg: string) => logRed(`${' '.repeat(ident)}[${compName}]: ${msg}`)
let tc: TypeChecker

interface RenderlessDocsData {
  [component: string]: RenderlessTableData
}
interface RenderlessApiData {
  description: {
    zh: string
    en: string
  }
  returnType: string
}

type Lang = 'zh' | 'en'

interface RenderlessTableData {
  exposedApi: string[] // 暴露的api
  api: {
    [apiName: string]: RenderlessApiData
  }
}

const isTsFile = (str: string) => str.endsWith('.ts')
const isEntryFile = (str: string) => str === 'vue.ts'

const createSourceFiles = (project: Project) => (path: string) => project.addSourceFileAtPath(path)
const getAllExportBySourceFile = (sourcefile: SourceFile, compName: string = 'Sourcefile') => {
  const globalSymbol = sourcefile.getSymbol()
  if (!globalSymbol) {
    error(compName, '无法找到全局符号, 请检查代码完整性')
    return []
  }
  const allExport = getAllExport(globalSymbol)
  return allExport
}
const getAllExport = (symbol: Symbol) => symbol.getExports()
const isApiDecl = (varDecl: Symbol) => varDecl.getName().toLowerCase() === 'api'
const getExposedApiName = (compName: string, varDecl: VariableDeclaration) => {
  const init = varDecl.getInitializer()
  if (!init) {
    return []
  }
  if (!init.isKind(SyntaxKind.ArrayLiteralExpression)) {
    warn(compName, 'api不为数组, 请检查api设置')
    return []
  }
  return init.getElements().map((ele) => ele.getText().replace(/\'/gim, ''))
}

const collectExposedApi = (compName: string, sourcefile: SourceFile) => {
  const allExport = getAllExportBySourceFile(sourcefile, compName)
  let exposedApi: string[] = []
  for (const exportNode of allExport) {
    if (isApiDecl(exportNode)) {
      const [decl] = exportNode.getDeclarations()
      if (!decl) {
        warn(compName, 'api为undefined')
        continue
      }
      if (!decl.isKind(SyntaxKind.VariableDeclaration)) {
        warn(compName, 'api不是变量')
        continue
      }
      exposedApi = getExposedApiName(compName, decl)
    }
  }
  return exposedApi
}

const collectRenderlessApiType = (compName: string, sourcefile: SourceFile) => {
  const globalSymbol = sourcefile.getSymbol()
  if (!globalSymbol) {
    error(compName, '无法找到全局符号, 请检查代码完整性')
    return null
  }
  const arrowFunctions: [string | undefined, ArrowFunction][] = sourcefile
    .getDescendantsOfKind(SyntaxKind.ArrowFunction)
    .map((f) => [f.getParentIfKind(SyntaxKind.VariableDeclaration)?.getName(), f])
  const functionDecls: [string | undefined, FunctionDeclaration][] = sourcefile
    .getDescendantsOfKind(SyntaxKind.FunctionDeclaration)
    .map((f) => [f.getName(), f])
  const rendelressFns = [...arrowFunctions, ...functionDecls]
    .filter(([name]) => name === 'renderless')
    .map(([, f]) => f)
  if (!rendelressFns.length) {
    error(compName, '无法找到renderless')
    return null
  }
  const rendelressFn = rendelressFns[0]
  const renderlessBlock = rendelressFn.forEachDescendant((node) => {
    if (node.isKind(SyntaxKind.Block)) {
      return node
    }
  })
  if (!renderlessBlock || renderlessBlock.getKind() !== SyntaxKind.Block) {
    error(compName, '没有找到Block, 请检查代码完整性')
    return null
  }

  const retStmt = renderlessBlock.getDescendantsOfKind(SyntaxKind.ReturnStatement).at(-1)
  if (!retStmt) {
    error(compName, 'renderless 没有导出')
    return null
  }

  const [, unknownStruct] = retStmt.getChildren()

  if (!unknownStruct) {
    error(compName, '未找到导出变量')
    return null
  }
  let typeName = ''
  if (!(unknownStruct.isKind(SyntaxKind.AsExpression) || unknownStruct.isKind(SyntaxKind.Identifier))) {
    error(compName, `返回应该为变量, 但是却找到了${unknownStruct.getKindName()}`)
    return null
  }
  const apiVarName = unknownStruct.getText()
  let apiVariable
  if (unknownStruct.isKind(SyntaxKind.Identifier)) {
    apiVariable = renderlessBlock.forEachDescendant((node) => {
      if (node.getKind() === SyntaxKind.VariableDeclaration) {
        const symbol = node.getSymbol()
        if (!symbol) {
          return
        }
        if (symbol.getEscapedName() === apiVarName) {
          return node
        }
      }
    })
    if (!apiVariable) {
      error(compName, 'api变量没有被声明')
      return
    }
  }
  const apiType = unknownStruct.isKind(SyntaxKind.Identifier) ? apiVariable.getType() : unknownStruct.getType()
  const typeAliasSymbol = apiType.getAliasSymbol()
  if (!apiType || !typeAliasSymbol) {
    typeName = 'any'
    return typeName
  }
  typeName = typeAliasSymbol.getEscapedName()
  return typeName
}

const collectTableData = (members: TypeElementTypes[], decl: Node<ts.Node>) => {
  const tableData: {
    [key: string]: RenderlessApiData
  } = {}
  for (const member of members) {
    const apiData: RenderlessApiData = {
      description: {
        zh: '',
        en: ''
      },
      returnType: 'any'
    }
    const memberType = member.getType()
    const type = tc.getTypeText(memberType, decl.getSourceFile(), undefined)
    const symbol = member.getSymbol()
    const tags = symbol?.getJsDocTags()
    for (const tag of tags ?? []) {
      const name = tag.getName() as Lang
      const description = tag
        .getText()
        .filter(({ kind }) => kind === 'text')
        .map((value) => value.text.trim())
        .join(' ')
      apiData.description[name] = description
    }
    apiData.returnType = type
    const memberSymbol = member.getSymbol()
    const key = memberSymbol?.getEscapedName() ?? ''
    tableData[key] = {
      ...apiData
    }
  }
  return tableData
}
const collectDocData = (compName: string, typeName: string, exposedApi: string[], sourcefile: SourceFile) => {
  const allExport = getAllExportBySourceFile(sourcefile, compName)
  if (!allExport.length) {
    error(compName, '没有类型导出, 请检查代码完整性')
    return {} // 没有导出
  }
  const apiType = allExport.filter((symbol) => symbol.getEscapedName() === typeName)[0]
  if (!apiType) {
    error(compName, `${typeName} 不存在`)
    return {}
  }
  // const symbolTable = getSymbolTable(allExport)
  const decl = apiType.getDeclarations()[0]
  if (!decl.isKind(SyntaxKind.InterfaceDeclaration) && !decl.isKind(SyntaxKind.TypeAliasDeclaration)) {
    error(compName, `${typeName} 只允许interface声明或type声明`)
    return {}
  }
  let members: TypeElementTypes[] | null = null
  if (decl.isKind(SyntaxKind.InterfaceDeclaration)) {
    members = decl.getMembers()
  }
  if (decl.isKind(SyntaxKind.TypeAliasDeclaration)) {
    const declTypeNode = decl.getTypeNodeOrThrow(`${compName} 无法找到有效的类型`)
    if (!declTypeNode.isKind(SyntaxKind.TypeLiteral)) {
      error(compName, `${typeName} 不是合法的类型, 需要的是TypeLiteral可收到的是${declTypeNode.getKindName()}`)
      error(compName, declTypeNode.getFullText())
      return {}
    }
    members = declTypeNode.getMembers()
  }
  if (!members || !members.length) {
    return {}
  }
  return collectTableData(members, decl)
}

export const buildDoc = () => {
  const project = new Project()
  tc = project.getTypeChecker()
  const RENDERLESS_ROOT = join(__dirname, '../../../../../packages/renderless/src')
  const RENDERLESS_TYPE_ROOT = join(__dirname, '../../../../../packages/renderless/types')
  const components = readdirSync(RENDERLESS_ROOT)
  const renderlessEntry = {}
  for (const compName of components) {
    const subFiles = readdirSync(join(RENDERLESS_ROOT, compName))
    if (!subFiles.some(isTsFile)) {
      warn(compName, '不存在renderless文件')
      continue
    }
    if (!subFiles.some(isEntryFile)) {
      warn(compName, '不存在入口文件')
      continue
    }
    renderlessEntry[compName] = {
      entry: join(RENDERLESS_ROOT, compName, 'vue.ts'),
      type: existsSync(join(RENDERLESS_TYPE_ROOT, `${compName}.type.ts`))
        ? join(RENDERLESS_TYPE_ROOT, `${compName}.type.ts`)
        : null
    }
  }
  const sourcefiles: {
    [compName: string]: {
      entry: SourceFile
      type: SourceFile | null
    }
  } = {}
  const creater = createSourceFiles(project)
  for (const comp of components) {
    if (comp in renderlessEntry) {
      sourcefiles[comp] = {
        entry: creater(renderlessEntry[comp].entry),
        type: renderlessEntry[comp].type ? creater(renderlessEntry[comp].type) : null
      }
    }
  }
  const renderlessDocsData: RenderlessDocsData = {}
  for (const compName of components) {
    if (compName !== 'button') {
      continue
    }
    if (!(compName in sourcefiles)) {
      warn(compName, '未找到renderless文件')
      continue
    }
    const tableData: RenderlessTableData = {
      exposedApi: [],
      api: {}
    }
    const exposedApi = collectExposedApi(compName, sourcefiles[compName].entry)
    tableData.exposedApi = exposedApi
    if (!exposedApi.length) {
      warn(compName, 'api为空, 放弃后续生成')
      continue
    }
    const typeName = collectRenderlessApiType(compName, sourcefiles[compName].entry)
    if (!typeName) {
      error(compName, '类型收集失败, 因为找不到类型')
      continue
    }
    // 如果是any就放弃跟踪
    if (typeName === 'any') {
      for (const exposed of exposedApi) {
        tableData.api[exposed] = {
          description: {
            zh: '-',
            en: ''
          },
          returnType: typeName
        }
      }
    } else {
      tableData.api = {
        ...tableData.api,
        ...collectDocData(compName, typeName, exposedApi, sourcefiles[compName].type!)
      }
    }
    renderlessDocsData[compName] = tableData
  }
}
