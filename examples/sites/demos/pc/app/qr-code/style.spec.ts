import { test, expect } from '@playwright/test'

test('自定义样式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('qr-code#style')

  const demo = page.locator('#style')
  const wrapper = demo.locator('.tiny-qr-code')
  const canvas = demo.locator('.tiny-qr-code canvas')
  await expect(canvas).toBeVisible()

  const backgroundColor0 = await canvas.evaluate(
    (el: any, { x, y }) => {
      const ctx = el.getContext('2d')
      const pixel = ctx.getImageData(x, y, 1, 1).data
      const toHex = (num: number) => num.toString(16).padStart(2, '0')
      return `#${toHex(pixel[0])}${toHex(pixel[1])}${toHex(pixel[2])}`
    },
    { x: 1, y: 1 }
  )

  expect(backgroundColor0 === '#1677ff').toBeTruthy()

  const box = await wrapper.boundingBox()
  expect(box?.width).toEqual(250)
})
