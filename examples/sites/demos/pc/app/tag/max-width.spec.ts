import { test, expect } from '@playwright/test'

test('各型号尺寸是否正常', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('tag#max-width')

  const normal = page.getByText('文本超长超长的标签')

  await expect(normal).toHaveCSS('max-width', '80px')
})
