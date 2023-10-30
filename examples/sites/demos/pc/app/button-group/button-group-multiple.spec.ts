import { test, expect } from '@playwright/test'

test('测试按钮组点击功能', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('button-group#button-group-multiple')

  const preview = page.locator('#preview')
  const buttonGroup = preview.locator('.tiny-button-group').first()
  await page.getByRole('button', { name: 'Button3' }).click()
  await expect(buttonGroup.locator('li').nth(2)).toHaveClass('active')
  await page.getByRole('button', { name: 'Button2' }).click()
  await expect(buttonGroup.locator('li').nth(1)).toHaveClass('active')
  await page.getByRole('button', { name: 'Button5' }).click()
  await expect(buttonGroup.locator('li').nth(4)).toHaveClass('active')
})

test('测试按钮是否换行', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('button-group#button-group-multiple')

  // 测试两行场景
  page.setViewportSize({
    width: 1400,
    height: 700
  })
  page.waitForTimeout(200)
  const preview = page.locator('#preview')
  const buttonGroup = preview.locator('.tiny-button-group').first()
  const button = buttonGroup.locator('button').first()
  const bottomSpace = 4
  let groupBox = await buttonGroup.boundingBox()
  let buttonBox = await button.boundingBox()
  expect(groupBox?.height).toBe(((buttonBox?.height || 0) + bottomSpace) * 2)

  // 测试三行场景
  page.setViewportSize({
    width: 1000,
    height: 700
  })
  page.waitForTimeout(200)
  groupBox = await buttonGroup.boundingBox()
  buttonBox = await button.boundingBox()
  expect(groupBox?.height).toBe(((buttonBox?.height || 0) + bottomSpace) * 3)
})
