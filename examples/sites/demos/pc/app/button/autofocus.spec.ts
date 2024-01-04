import { test, expect } from '@playwright/test'

test('测试是否有默认聚焦', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('button#autofocus')
  await page.getByRole('button', { name: '默认按钮' }).click()
  await page.getByRole('button', { name: '默认聚焦' }).click()
  const button = await page.getByRole('button', { name: '默认聚焦' })
  const hasAutofocus = await button.evaluate((button) => button.hasAttribute('autofocus'))
  await expect(hasAutofocus).toBe(true)
})
