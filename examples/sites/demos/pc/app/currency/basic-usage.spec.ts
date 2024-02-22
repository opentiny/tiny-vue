import { test, expect } from '@playwright/test'

test('基础用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('currency#basic-usage')
  await page.getByPlaceholder('请选择').click()
  const inputBox = page.locator('.tiny-input input').nth(1)
  await expect(inputBox).toHaveAttribute('placeholder', 'VUV')
})
