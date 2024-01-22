import { test, expect } from '@playwright/test'

test('dialogBox 自定义标题', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dialog-box#custom-dialog-title')
  await page.getByRole('button', { name: /Dialog/ }).click()
  await expect(page.locator('.tiny-dialog-box__header > div')).toHaveText('自定义title区域')
  await page.getByRole('button', { name: /确 定/ }).click()
})
