import { test, expect } from '@playwright/test'

test('自定义空数据文本', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/tree/custom-empty-text')

  const emptyText = '没有提供有效数据'
  await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div/div[1]')).toHaveText(emptyText)
})
