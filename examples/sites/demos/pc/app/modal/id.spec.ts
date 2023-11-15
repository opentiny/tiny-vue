import { test, expect } from '@playwright/test'

test('防止重复提示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('modal#id')

  await page.getByRole('button', { name: '不允许重复点击' }).click()
  await page.getByRole('button', { name: '不允许重复点击' }).click()
  await page.getByRole('button', { name: '不允许重复点击' }).click()
  await expect(page.locator('.tiny-modal')).toHaveCount(1)
})
