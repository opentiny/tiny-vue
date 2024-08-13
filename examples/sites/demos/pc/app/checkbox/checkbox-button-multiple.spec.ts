import { test, expect } from '@playwright/test'

test('多行按钮', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('checkbox#checkbox-button-multiple')

  const demo = page.locator('#checkbox-button-multiple')

  // 测试两行场景
  page.setViewportSize({
    width: 700,
    height: 700
  })
  await page.waitForTimeout(200)

  const checkboxGroup = demo.locator('.tiny-checkbox-group')
  const checkboxButton = checkboxGroup.locator('.tiny-checkbox-button').first()
  const bottomSpace = 8
  let groupBox = await checkboxGroup.boundingBox()
  let checkboxButtonBox = await checkboxButton.boundingBox()
  expect(groupBox?.height).toBe(((checkboxButtonBox?.height || 0) + bottomSpace) * 2)
})
