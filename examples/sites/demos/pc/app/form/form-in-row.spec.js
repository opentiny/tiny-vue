import { test, expect } from '@playwright/test'

test('测试行内表单', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('form#form-in-row')

  const preview = page.locator('#preview')
  const form = preview.locator('.tiny-form')
  const item1 = form.locator('.tiny-form-item').first()
  const item2 = form.locator('.tiny-form-item').nth(1)

  // 测试单行情况
  await page.setViewportSize({
    width: 1400,
    height: 700
  })
  await page.waitForTimeout(200)
  let box1 = await item1.boundingBox()
  let box2 = await item2.boundingBox()
  expect(box1.y).toEqual(box2.y)

  // 测试换行情况
  await page.setViewportSize({
    width: 900,
    height: 700
  })
  await page.waitForTimeout(200)
  box1 = await item1.boundingBox()
  box2 = await item2.boundingBox()
  expect(box1.y).toBeLessThan(box2.y)
})
