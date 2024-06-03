import { test, expect } from '@playwright/test'

test('弹窗展示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('carousel#dialog-show')
  const preview = page.locator('#dialog-show')
  await preview.getByRole('button', { name: '弹出轮播' }).click()
  await preview.locator('.tiny-carousel__container > button:nth-child(2)').click()
  await preview.getByLabel('Close').click()
})
