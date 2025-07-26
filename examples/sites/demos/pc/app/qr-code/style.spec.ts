import { test, expect } from '@playwright/test'

test('自定义样式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('qr-code#style')

  const canvas = page.locator('.tiny-qr-code canvas')
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
  await page.locator('.tiny-color-picker__inner').click()
  await page.locator('.black').click()
  await page.locator('.tiny-color-select-panel__inner__hue-select').click()
  await page.getByRole('button', { name: '选择' }).click()
  const backgroundColor1 = await page.locator('.tiny-color-picker__inner').evaluate((el) => {
    return window.getComputedStyle(el).backgroundColor
  })

  const backgroundColor2 = await canvas.evaluate(
    (el: any, { x, y }) => {
      const ctx = el.getContext('2d')
      const pixel = ctx.getImageData(x, y, 1, 1).data

      return `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`
    },
    { x: 1, y: 1 }
  )

  expect(backgroundColor1 === backgroundColor2).toBeTruthy()
})
