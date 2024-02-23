import { test, expect } from '@playwright/test'

test('简易模式中，双向展开', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('split#horizontal-collapse')
  await page.locator('.tiny-split-trigger-button').first().click()
  await expect(page.locator('.left-pane')).toHaveCSS('width', '0px')
  await page.locator('.tiny-split-trigger-con > div:nth-child(3)').click()
  await page.locator('.tiny-split-trigger-con > div:nth-child(3)').click()
  await expect(page.locator('.right-pane')).toHaveCSS('width', '0px')
})
