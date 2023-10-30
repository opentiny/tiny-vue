import { test, expect } from '@playwright/test'

test('自定义加载提示文本', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('loading#loading-tip-text')
  const loadingText = page.locator('.tiny-loading__text')
  await expect(loadingText).toBeVisible()
})
