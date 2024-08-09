import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  await page.goto('logout#basic-usage')
  const button = page.locator('.tiny-logout')
  const status = page.locator('.demo-logout')
  await button.click()
  await page.getByRole('button', { name: /确定/ }).click()
  await page.waitForTimeout(1000)
  await button.click()
  await page.waitForTimeout(1000)
  await expect(button).toHaveText(/登录/)
  await expect(status).toContainText('true')
})
