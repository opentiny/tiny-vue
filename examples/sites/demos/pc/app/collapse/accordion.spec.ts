import { test, expect } from '@playwright/test'

test('Collapse 手风琴模式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('collapse#accordion')

  const header = page.locator('.tiny-collapse-item__header')
  const content = page.locator('.tiny-collapse-item__wrap')

  // 内容折叠时点击标题展开，该项内容展开，其他内容折叠
  await expect(content.first()).not.toHaveCSS('display', 'none')
  await header.nth(1).click()
  await expect(header.nth(1)).toHaveClass(/is-active/)
  await expect(content.nth(1)).not.toHaveCSS('display', 'none')
  await expect(content.first()).toHaveCSS('display', 'none')
})
