import { test, expect } from '@playwright/test'

test('文字内容', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('radio#radio-text')

  const demo = page.locator('#radio-text')
  const radioItem = demo.locator('.tiny-radio')

  await expect(radioItem.first()).toHaveText('选项一')
  await expect(radioItem.nth(1)).toHaveText('选项二')
  await expect(radioItem.nth(2)).toHaveText('3')
})
