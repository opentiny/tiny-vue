import { test, expect } from '@playwright/test'

test('垂直方向偏离距离', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('notify#verticalOffset')
  await page.getByRole('button', { name: '弹出提示框' }).click()
  const notify = page.locator('.tiny-notify')
  const offset = await notify.getAttribute('verticalOffset')
  await expect(offset).toEqual('100')
})
