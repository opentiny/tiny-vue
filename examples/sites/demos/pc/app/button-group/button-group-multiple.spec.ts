import { test, expect } from '@playwright/test'

test('测试按钮是否换行', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('button-group#button-group-multiple')

  // 测试两行场景
  page.setViewportSize({
    width: 1400,
    height: 700
  })
  await page.waitForTimeout(200)
  const demo = page.locator('#button-group-multiple')
  const buttonGroup = demo.locator('.tiny-button-group')
  const button = buttonGroup.locator('button').first()
  const bottomSpace = 4
  let groupBox = await buttonGroup.boundingBox()
  let buttonBox = await button.boundingBox()
  expect(groupBox?.height).toBe(((buttonBox?.height || 0) + bottomSpace) * 2)

  // 测试三行场景
  page.setViewportSize({
    width: 700,
    height: 700
  })
  await page.waitForTimeout(200)
  groupBox = await buttonGroup.boundingBox()
  buttonBox = await button.boundingBox()
  expect(groupBox?.height).toBe(((buttonBox?.height || 0) + bottomSpace) * 3)
})
