import { test, expect } from '@playwright/test'

test('自定义下拉图标', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-select#reference-style')

  const wrap = page.locator('#reference-style')
  const select = wrap.locator('.tiny-tree-select').nth(0)
  const suffixIconPath = select.locator('.tiny-input__suffix .tiny-base-select__caret path')

  await expect(suffixIconPath).toHaveAttribute(
    'd',
    'M2.3 7.78v.08c.02.65.561 1.17 1.221 1.17.68 0 1.229-.54 1.229-1.21 0-.672-.549-1.21-1.229-1.21-.66 0-1.2.519-1.22 1.17Zm4.241.04c0 .67.54 1.21 1.22 1.21.68 0 1.23-.54 1.23-1.21 0-.672-.55-1.21-1.23-1.21-.68 0-1.22.538-1.22 1.21Zm4.24.04v-.08c.02-.651.559-1.17 1.219-1.17.682 0 1.23.538 1.23 1.21 0 .67-.548 1.21-1.23 1.21-.66 0-1.2-.52-1.219-1.17Z'
  )
})

test('标签类型', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-select#reference-style')

  const wrap = page.locator('#reference-style')
  const select = wrap.locator('.tiny-tree-select').nth(1)
  const tag = select.locator('.tiny-tag')

  // 验证是否有对应类型的类名
  await expect(tag.nth(0)).toHaveClass(/tiny-tag--warning/)
})

test('下划线类型', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-select#reference-style')
  const wrap = page.locator('#reference-style')
  const select = wrap.locator('.tiny-tree-select').nth(2)
  const input = select.locator('.tiny-input__inner')
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const treeNode = dropdown.locator('.tiny-tree-node')

  await expect(select.locator('.tiny-input')).toHaveClass(/tiny-input-underline/)
  await expect(input).toHaveCSS('border-top-width', '0px')
  await expect(input).toHaveCSS('border-left-width', '0px')
  await expect(input).toHaveCSS('border-right-width', '0px')
  await expect(input).toHaveCSS('border-bottom-color', 'rgb(194, 194, 194)')

  await select.click()
  await treeNode.filter({ hasText: /^二级 2-1$/ }).click()
  await expect(dropdown).toBeHidden()
  await expect(input).toHaveValue('二级 2-1')
})
