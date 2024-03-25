import { test, expect } from '@playwright/test'

test('不显示模态背景', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('crop#no-modal')
  await page.getByRole('button', { name: '图片裁剪' }).click()
  await page.locator('div:nth-child(9) > .tiny-svg').click()
})
