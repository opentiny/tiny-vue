import { test, expect } from '@playwright/test'

test('自定义 icon', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('qr-code#icon')

  const canvas = page.locator('.tiny-qr-code canvas')
  const canvasImg = page.locator('.tiny-qr-code .mask-icon img')
  await expect(canvas).toBeVisible()
  await expect(canvasImg).toBeVisible()

  await page.getByLabel('示例', { exact: true }).getByRole('button').nth(1).click()
  const iconSize = await canvasImg.evaluate((el) => {
    return window.getComputedStyle(el)
  })
  const inputIconSizeWidth = await page.getByRole('spinbutton').first().inputValue()

  expect(iconSize.width === `${inputIconSizeWidth}px`).toBe(true)
  expect(iconSize.height === `${inputIconSizeWidth}px`).toBe(true)
  await page.getByLabel('示例', { exact: true }).getByRole('button').nth(3).click()
  const [qrWidth, qrHeight] = await page.locator('.tiny-qr-code').evaluate((el) => {
    const style = window.getComputedStyle(el)
    return [style.width, style.height]
  })

  const inputSizeWidth = await page.getByRole('spinbutton').nth(1).inputValue()

  expect(qrWidth === `${inputSizeWidth}px`).toBe(true)
  expect(qrHeight === `${inputSizeWidth}px`).toBe(true)
})
