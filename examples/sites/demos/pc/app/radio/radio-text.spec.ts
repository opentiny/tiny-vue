import { test, expect } from '@playwright/test'

test('文字内容', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('radio#radio-text')
  const radio1 = page.getByText('选项一')
  const radio2 = page.getByText('选项二')
  await expect(radio1).toBeVisible()
  await expect(radio2).toBeVisible()
})
