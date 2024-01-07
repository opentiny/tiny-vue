import { test, expect } from '@playwright/test'

test('dialogBox 弹窗的宽度', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dialog-box#dialog-width')

  const dialogBox = page.locator('.tiny-dialog-box')
  await page.getByRole('button', { name: '宽度 30%' }).click()
  await page.getByRole('button', { name: 'Close' }).click()
  await page.getByRole('button', { name: '宽度 60%' }).click()
  await expect(dialogBox.nth(1)).toBeVisible()
  await page.getByRole('button', { name: '确 定' }).nth(1).click()
})
