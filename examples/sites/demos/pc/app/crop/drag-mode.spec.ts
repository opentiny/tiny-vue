import { test, expect } from '@playwright/test'

test('拖拽模式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('crop#drag-mode')
  await page.getByRole('button', { name: '图片裁剪' }).click()
  await page.locator('.tiny-crop__dialog-content__handle__button > div:nth-child(3)').click()
  const crops = page.locator('#drag-mode').getByRole('img').nth(1).boundingBox()
  const { x, y } = await crops
  // 开始拖拽
  await page.mouse.move(x, y)
  await page.mouse.down()
  await page.mouse.move(x + 50, y - 100)
  await page.mouse.move(x - 50, y + 150)
  await page.mouse.up()
})
