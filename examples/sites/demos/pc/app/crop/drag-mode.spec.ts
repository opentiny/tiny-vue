import { test, expect } from '@playwright/test'

test('拖拽模式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('crop#drag-mode')

  const demo = page.locator('#drag-mode')
  await demo.getByRole('button', { name: /图片裁剪/ }).click()

  await demo.locator('.iconButton').nth(7).click() // 去掉剪切框

  const crops = demo.locator('.cropper-wrap-box').boundingBox()
  const { x, y } = await crops
  // 开始拖拽50px
  await page.mouse.move(x, y)
  await page.mouse.down()
  await page.mouse.move(x + 50, y)
  await page.mouse.up()

  // 验证css是否存在
  expect(demo.locator('.cropper-wrap-box .cropper-canvas')).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 109.333, 0)')
})
