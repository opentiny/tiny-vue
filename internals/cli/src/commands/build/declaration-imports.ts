import ts from 'typescript'

const vueAlias = /^vue(?:2(?:\.7)?|3)(\/.*)?$/

const publicVueModule = (specifier: string): string => {
  const normalized = specifier.replace(/\\/g, '/')
  const nodeModules = normalized.lastIndexOf('/node_modules/')
  const isFilePath = /^(?:\.{1,2}\/|\/|[a-z]:\/)/i.test(normalized)
  const moduleName =
    isFilePath && nodeModules !== -1 ? normalized.slice(nodeModules + '/node_modules/'.length) : normalized

  if (vueAlias.test(moduleName)) return moduleName.replace(vueAlias, 'vue$1')

  if (isFilePath && nodeModules !== -1) {
    if (/^@vue\/runtime-(?:core|dom)(?:\/dist\/runtime-(?:core|dom)(?:\.d\.ts)?)?$/.test(moduleName)) return 'vue'
    if (/^vue(?:\/dist\/vue(?:\.d\.ts)?)?$/.test(moduleName)) return 'vue'
    if (/^@vue\/composition-api(?:\/dist\/vue-composition-api(?:\.d\.ts)?)?$/.test(moduleName)) {
      return '@vue/composition-api'
    }
  }

  return specifier
}

/** Keep declaration imports independent of the build workspace and its pnpm layout. */
export const rewriteDeclarationImports = (content: string): string => {
  const source = ts.createSourceFile('index.d.ts', content, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS)
  const edits: { start: number; end: number; text: string }[] = []

  const visit = (node: ts.Node) => {
    if (ts.isStringLiteral(node)) {
      const parent = node.parent
      const isModuleSpecifier =
        ((ts.isImportDeclaration(parent) || ts.isExportDeclaration(parent)) && parent.moduleSpecifier === node) ||
        (ts.isExternalModuleReference(parent) && parent.expression === node) ||
        (ts.isModuleDeclaration(parent) && parent.name === node) ||
        (ts.isLiteralTypeNode(parent) && ts.isImportTypeNode(parent.parent) && parent.parent.argument === parent)

      if (isModuleSpecifier) {
        const moduleName = publicVueModule(node.text)
        if (moduleName !== node.text) {
          const start = node.getStart(source)
          const quote = content[start]
          edits.push({ start, end: node.getEnd(), text: `${quote}${moduleName}${quote}` })
        }
      }
    }
    ts.forEachChild(node, visit)
  }

  visit(source)
  return edits
    .reverse()
    .reduce((result, edit) => result.slice(0, edit.start) + edit.text + result.slice(edit.end), content)
}
