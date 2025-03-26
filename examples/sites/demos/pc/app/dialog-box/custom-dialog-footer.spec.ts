import { test, expect } from '@playwright/test'

test('dialogBox 自定义底部', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dialog-box#custom-dialog-footer')
  const demo = page.locator('#custom-dialog-footer')
  await demo.getByRole('button', { name: /Dialog/ }).click()
  await expect(demo.locator('.tiny-dialog-box__footer > div')).toHaveText(/自定义/)
  await demo.getByLabel('Close').click()
})
