import { test, expect } from '@playwright/test'

test('Collapse 折叠面板事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('collapse#events')

  const header = page.locator('.tiny-collapse-item__header')
  const modal = page.locator('.tiny-modal')

  // 点击标题，事件执行
  await header.first().click()
  await expect(modal).toBeVisible()
})
