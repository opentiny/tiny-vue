import { test, expect } from '@playwright/test'

test('分隔符', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tabs#tabs-separator')

  const tabs1 = page.locator('.tiny-tabs')
  const content1 = tabs1.locator('.aui-tabs__item-separator')

  await expect(content1.first()).toHaveCSS('width', '1px')
  await expect(content1.first()).toHaveCSS('height', '12px')
})
