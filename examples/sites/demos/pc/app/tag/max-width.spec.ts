import { test, expect } from '@playwright/test'

test('测试最大宽度', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('tag#max-width')

  const normal = page.getByLabel('示例', { exact: true }).locator('span').first()

  await expect(normal).toHaveCSS('max-width', '80px')
})
