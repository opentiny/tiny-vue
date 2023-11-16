import { test, expect } from '@playwright/test'

test('Collapse 阻止折叠面板展开/收起', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('collapse#before-close')

  const modal = page.locator('.tiny-modal')
  const header = page.locator('.tiny-collapse-item__header')
  const content = page.locator('.tiny-collapse-item__wrap')

  // 点击标题，展开的内容不折叠
  await expect(header.first()).toHaveClass(/is-active/)
  await expect(content.first()).not.toHaveCSS('display', 'none')
  await header.first().click()
  await expect(header.first()).toHaveClass(/is-active/)
  await expect(modal).toHaveText(/阻止面板关闭/)
  await expect(content.first()).not.toHaveCSS('display', 'none')
})
