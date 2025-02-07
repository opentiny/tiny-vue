import { test, expect } from '@playwright/test'

test('[DatePanel] 测试快捷选项', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('date-panel#shortcuts')

  const valueDom = page.locator('.value')
  await page.getByRole('button', { name: '今天' }).click()
  await page.getByRole('button', { name: '昨天' }).click()
  await page.getByRole('button', { name: '一周前' }).click()

  await expect(valueDom).not.toHaveText('')
})
