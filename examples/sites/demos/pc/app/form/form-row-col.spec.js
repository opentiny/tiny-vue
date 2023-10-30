import { test, expect } from '@playwright/test'

test('测试表单复杂布局', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('form#form-row-col')

  const preview = page.locator('#preview')
  const form = preview.locator('.tiny-form')
  const formItem = form.locator('.tiny-form-item')

  const item1Box = await formItem.first().boundingBox()
  const item2Box = await formItem.nth(1).boundingBox()
  const item3Box = await formItem.nth(2).boundingBox()
  const item4Box = await formItem.nth(3).boundingBox()
  const item5Box = await formItem.nth(4).boundingBox()
  // 表单第一项和第二项在同一水平线且宽度相同
  expect(item1Box.y).toEqual(item2Box.y)
  expect(item1Box.width).toEqual(item2Box.width)
  // 表单第三项和第四项在同一水平线且宽度相同
  expect(item3Box.y).toEqual(item4Box.y)
  expect(item3Box.width).toEqual(item4Box.width)
  expect(item4Box.y).toBeLessThan(item5Box.y)
})
