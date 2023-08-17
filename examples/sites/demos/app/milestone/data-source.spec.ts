import { test, expect } from '@playwright/test'

test('数据源', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('http://127.0.0.1:7130/pc/milestone/data-source')

  const descs = page.locator('.tiny-milestone__description')
  const nodeCount = 6

  await expect(descs).toHaveCount(nodeCount)
  for (let i = 0; i < nodeCount; i++) {
    await expect(descs.nth(i)).toHaveText(/自定义数据/)
  }
})
