import { test, expect } from '@playwright/test'

test('消息类型', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('notify#type')
  await page.getByRole('button', { name: 'info类型' }).click()
  const info = page.locator('.tiny-notify--info')
  await expect(info).toBeVisible()

  await page.getByRole('button', { name: 'success类型' }).click()
  const success = page.locator('.tiny-notify--success')
  await expect(success).toBeVisible()

  await page.getByRole('button', { name: 'error类型' }).click()
  const error = page.locator('.tiny-notify--error')
  await expect(error).toBeVisible()

  await page.getByRole('button', { name: 'warning类型' }).click()
  const warning = page.locator('.tiny-notify--warning')
  await expect(warning).toBeVisible()
})
