import { test, expect } from '@playwright/test'

test('按钮内容', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('radio#radio-button')
  const radio1 = page.getByText('日度')
  const radio2 = page.getByText('月度')
  const radio3 = page.getByText('年度')
  await expect(radio1).toBeVisible()
  await expect(radio2).toBeVisible()
  await expect(radio3).toBeVisible()
})
