import { test, expect } from '@playwright/test'

test('logout-custom-service', async ({ page }) => {
  await page.goto('http://localhost:7130/pc/logout/custom-service')
  const button = page.locator('.tiny-logout')
  const status = page.locator('.status')

  await expect(button).toHaveText('登录')
  await expect(status).toContainText(['false'])
  await button.click()
  await page.getByRole('button', { name: '确认' }).click()
  await page.waitForTimeout(1000)
  await expect(button).toHaveText('注销')
  await expect(status).toContainText(['true'])
  await button.click()
  await page.waitForTimeout(1000)
  await expect(button).toHaveText('登录')
  await expect(status).toContainText(['false'])
})
