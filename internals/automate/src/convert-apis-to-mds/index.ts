import fs from 'node:fs/promises'
import path from 'node:path'
import * as esprima from 'esprima'
import * as estraverse from 'estraverse'
import * as escodegen from 'escodegen'

async function processApis(apisDir: string) {
  try {
    const entries = await fs.readdir(apisDir, { withFileTypes: true })
    for (const e of entries) {
      if (!e.isFile()) continue
      if (!e.name.endsWith('.js')) continue
      const full = path.join(apisDir, e.name)
      let content = await fs.readFile(full, 'utf8')

      try {
        // Parse the JS content to get the data structure
        const ast = esprima.parseModule(content, { range: true, comment: true, tokens: true })

        // Extract the default export object
        let exportData: any = null
        estraverse.traverse(ast, {
          enter(node) {
            if (node.type === 'ExportDefaultDeclaration' && node.declaration) {
              // Evaluate the AST to get the actual data
              const code = escodegen.generate(node.declaration)
              try {
                // eslint-disable-next-line no-new-func
                exportData = new Function('return ' + code)()
              } catch (err) {
                console.error('Failed to evaluate', full, err)
              }
            }
          }
        })

        if (!exportData || !exportData.apis) {
          // eslint-disable-next-line no-console
          console.log('Skipping', full, '- no apis found')
          continue
        }

        // Convert to markdown format
        const mdContent = convertToMarkdown(exportData)

        // Save as .md file
        const mdPath = full.replace('apis', 'mds').replace(/\.js$/, '.md')
        await fs.writeFile(mdPath, mdContent, 'utf8')

        // eslint-disable-next-line no-console
        console.log('Processed API', full, '->', mdPath)
      } catch (parseErr) {
        console.error('Failed to process', full, '-', parseErr instanceof Error ? parseErr.message : parseErr)
      }
    }
  } catch (err) {
    console.error('processApis failed', apisDir, err)
  }
}

function convertToMarkdown(data: any): string {
  const lines: string[] = []

  // // Add mode info if exists
  // if (data.mode && data.mode.length > 0) {
  //   lines.push(`**支持模式**: ${data.mode.join(', ')}`);
  //   lines.push('');
  // }

  // Process each API component
  if (data.apis && Array.isArray(data.apis)) {
    for (const api of data.apis) {
      lines.push(`## ${api.name}`)
      lines.push('')

      // Props table
      if (api.props && api.props.length > 0) {
        lines.push('### Props')
        lines.push('')
        lines.push('| 属性名 | 类型 | 默认值 | 说明 |')
        lines.push('|--------|------|--------|------|')
        for (const prop of api.props) {
          const name = prop.name || ''
          const type = prop.type || ''
          const defaultValue = prop.defaultValue !== undefined ? prop.defaultValue : ''
          const desc = prop.desc && prop.desc['zh-CN'] ? prop.desc['zh-CN'] : ''
          lines.push(
            `| ${escapeTableCell(name)} | ${escapeTableCell(type)} | ${escapeTableCell(
              String(defaultValue)
            )} | ${escapeTableCell(desc)} |`
          )
        }
        lines.push('')
      }

      // Events table
      if (api.events && api.events.length > 0) {
        lines.push('### Events')
        lines.push('')
        lines.push('| 事件名 | 回调参数 | 说明 |')
        lines.push('|--------|----------|------|')
        for (const event of api.events) {
          const name = event.name || ''
          const type = event.type || ''
          const desc = event.desc && event.desc['zh-CN'] ? event.desc['zh-CN'] : ''
          lines.push(`| ${escapeTableCell(name)} | ${escapeTableCell(type)} | ${escapeTableCell(desc)} |`)
        }
        lines.push('')
      }

      // Methods table
      if (api.methods && api.methods.length > 0) {
        lines.push('### Methods')
        lines.push('')
        lines.push('| 方法名 | 返回值 | 说明 |')
        lines.push('|--------|--------|------|')
        for (const method of api.methods) {
          const name = method.name || ''
          const type = method.type || ''
          const desc = method.desc && method.desc['zh-CN'] ? method.desc['zh-CN'] : ''
          lines.push(`| ${escapeTableCell(name)} | ${escapeTableCell(type)} | ${escapeTableCell(desc)} |`)
        }
        lines.push('')
      }

      // Slots table
      if (api.slots && api.slots.length > 0) {
        lines.push('### Slots')
        lines.push('')
        lines.push('| 插槽名 | 说明 |')
        lines.push('|--------|------|')
        for (const slot of api.slots) {
          const name = slot.name || ''
          const desc = slot.desc && slot.desc['zh-CN'] ? slot.desc['zh-CN'] : ''
          lines.push(`| ${escapeTableCell(name)} | ${escapeTableCell(desc)} |`)
        }
        lines.push('')
      }
    }
  }

  // Process types
  if (data.types && Array.isArray(data.types)) {
    lines.push('## Types')
    lines.push('')
    for (const type of data.types) {
      lines.push(`### ${type.name}`)
      lines.push('')
      if (type.code) {
        lines.push('```typescript')
        lines.push(type.code.trim())
        lines.push('```')
        lines.push('')
      }
    }
  }

  return lines.join('\n')
}

function escapeTableCell(text: string): string {
  if (!text) return ''
  // Escape pipe characters and newlines in table cells
  return String(text).replace(/\|/g, '\\|').replace(/\n/g, '<br>')
}

async function process() {
  const target = '../../examples/sites/demos'
  const mdsDir = path.join(target, 'mds')
  try {
    await fs.access(mdsDir)
  } catch {
    await fs.mkdir(mdsDir, { recursive: true })
  }

  const apisDir = path.join(target, 'apis')
  await processApis(apisDir)

  // eslint-disable-next-line no-console
  console.log('Done.')
}

process().catch((err) => {
  console.error(err)
  process.exit(1)
})
