import { describe, expect, test } from 'vitest'
import { rewriteDeclarationImports } from '../src/commands/build/declaration-imports'

describe('portable Vue declaration imports', () => {
  test.each([
    ['../../../node_modules/@vue/runtime-core', 'vue'],
    ['../../../node_modules/@vue/runtime-dom', 'vue'],
    ['../../../node_modules/@vue/runtime-core/dist/runtime-core.d.ts', 'vue'],
    ['../../../../vue/node_modules/vue3', 'vue'],
    ['../../../../vue/node_modules/vue2', 'vue'],
    ['../../../../vue/node_modules/vue2.7', 'vue'],
    ['../../../node_modules/vue', 'vue'],
    ['../../../node_modules/@vue/composition-api', '@vue/composition-api'],
    ['../../node_modules/.pnpm/vue@3.5.44/node_modules/vue', 'vue'],
    ['D:/build/packages/vue/node_modules/vue3', 'vue'],
    ['vue3', 'vue'],
    ['vue2', 'vue'],
    ['vue2.7', 'vue'],
    ['vue3/jsx-runtime', 'vue/jsx-runtime']
  ])('rewrites %s in import types and re-exports', (specifier, expected) => {
    expect(rewriteDeclarationImports(`type Component = import('${specifier}').DefineComponent;`)).toBe(
      `type Component = import('${expected}').DefineComponent;`
    )
    expect(rewriteDeclarationImports(`export type { VNode } from "${specifier}";`)).toBe(
      `export type { VNode } from "${expected}";`
    )
  })

  test('handles import declarations, require aliases, augmentations and Windows separators', () => {
    expect(rewriteDeclarationImports("import type { VNode } from '../../../node_modules/@vue/runtime-core';")).toBe(
      "import type { VNode } from 'vue';"
    )
    expect(rewriteDeclarationImports("import Vue = require('vue2');")).toBe("import Vue = require('vue');")
    expect(rewriteDeclarationImports("declare module 'vue3' { interface GlobalComponents {} }")).toBe(
      "declare module 'vue' { interface GlobalComponents {} }"
    )
    expect(
      rewriteDeclarationImports(String.raw`type Component = import('..\\..\\node_modules\\vue3').DefineComponent;`)
    ).toBe("type Component = import('vue').DefineComponent;")
  })

  test('preserves unrelated modules, comments, string literals and public Vue imports', () => {
    const declaration = [
      "import type { PropType } from 'vue';",
      "import type { VNode } from '@vue/runtime-core';",
      "export type { ButtonProps } from './button';",
      "type Foreign = import('../../../node_modules/other-library').Props;",
      "type Text = '../../../node_modules/vue3';",
      "// import('../../../node_modules/vue3') is documentation"
    ].join('\n')
    expect(rewriteDeclarationImports(declaration)).toBe(declaration)
  })
})
