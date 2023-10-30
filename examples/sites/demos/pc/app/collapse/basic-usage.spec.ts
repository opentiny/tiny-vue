import { test, expect } from '@playwright/test'

test('Collapse 基础用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('collapse#basic-usage')

  const header = page.locator('.tiny-collapse-item__header')
  const content = page.locator('.tiny-collapse-item__wrap')
  const arrow = page.locator('.tiny-collapse-item__arrow')

  // 内容折叠时点击标题展开，再次点击折叠
  await expect(content.nth(1)).toHaveCSS('display', 'none')
  await header.nth(1).click()
  await expect(header.nth(1)).toHaveClass(/is-active/)
  await expect(content.nth(1)).not.toHaveCSS('display', 'none')
  await header.nth(1).click()
  await expect(header.nth(1)).not.toHaveClass(/is-active/)
  await expect(content.nth(1)).toHaveCSS('display', 'none')

  // 内容展开时，标题箭头向上
  await expect(content.first()).not.toHaveCSS('display', 'none')
  await expect(arrow.first()).toHaveCSS('transform', 'matrix(0, -1, 1, 0, 0, 0)')
  await header.first().click()
  await expect(content.first()).toHaveCSS('display', 'none')
  await expect(arrow.first()).toHaveCSS('transform', 'matrix(0, 1, -1, 0, 0, 0)')
})
