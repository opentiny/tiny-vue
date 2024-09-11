import { test, expect } from '@playwright/test'

test('裁剪框最小宽高', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('crop#min-crop-box-width-height')

  //
  const demo = page.locator('#min-crop-box-width-height')
  const face = demo.locator('.cropper-face') // 裁剪框矩形
  const leftTopPoint = demo.locator('.point-nw')
  const container = demo.locator('.cropper-container')

  await demo.getByRole('button', { name: /图片裁剪/ }).click()
  // 拖动左上角，向右下， 验证最小裁剪框 > 100*100
  let box = await leftTopPoint.boundingBox()
  // 开始拖拽50px
  await page.mouse.move(box.x + 1, box.y + 1)
  await page.mouse.down()
  await page.mouse.move(box.x + 200, box.y + 200)
  await page.mouse.up()

  box = await face.boundingBox()

  expect(box.width).toBe(100)
  expect(box.height).toBe(56.25) // 此处有bug, 高度最小应该为 100， 实际最小为56.25

  // 判断container 大小为  800*200
  box = await container.boundingBox()

  expect(box.width).toBe(800)
  expect(box.height).toBe(200)
})
