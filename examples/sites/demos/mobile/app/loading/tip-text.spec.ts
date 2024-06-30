import { test, expect } from '@playwright/test'

test('自定义加载提示文本', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('loading#tip-text')

  const loading = page.locator('#tip-text .tiny-mobile-loading')
  const loadingText = loading.locator('.tiny-mobile-loading__text')
  await expect(loadingText).toContainText('加载中...')
})
