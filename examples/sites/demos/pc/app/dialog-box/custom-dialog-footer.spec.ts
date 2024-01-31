import { test, expect } from '@playwright/test'

test('dialogBox 自定义底部', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dialog-box#custom-dialog-footer')
  await page.getByRole('button', { name: /Dialog/ }).click()
  await expect(page.locator('.tiny-dialog-box__footer > div')).toHaveText('自定义footer区域')
  await page.getByLabel('Close').click()
})
