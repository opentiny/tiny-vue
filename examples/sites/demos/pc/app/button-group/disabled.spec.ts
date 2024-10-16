import { test, expect } from '@playwright/test'

test('测试按钮是否禁用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('button-group#disabled')

  const demo = page.locator('#disabled')
  const buttonGroup1 = demo.locator('.tiny-button-group').first()
  const buttonGroup3 = demo.locator('.tiny-button-group').nth(1)

  // 普通按钮组禁用
  await expect(buttonGroup1.locator('button').first()).toHaveClass(/disabled/)
  await expect(buttonGroup1.locator('button').first()).toHaveCSS('background-color', 'rgb(219, 219, 219)')
  await expect(buttonGroup1.locator('button').first()).toHaveCSS('color', 'rgb(194, 194, 194)')
  await expect(buttonGroup1.locator('button').nth(1)).toHaveClass(/disabled/)
  await expect(buttonGroup1.locator('button').nth(1)).toHaveCSS('background-color', 'rgb(240, 240, 240)')
  await expect(buttonGroup1.locator('button').nth(1)).toHaveCSS('color', 'rgb(194, 194, 194)')

  // 单个按钮禁用
  await expect(buttonGroup3.locator('button').first()).not.toHaveClass(/disabled/)
  await expect(buttonGroup3.locator('button').first()).toHaveCSS('background-color', 'rgb(20, 118, 255)')
  await expect(buttonGroup3.locator('button').first()).toHaveCSS('color', 'rgb(255, 255, 255)')
  await expect(buttonGroup3.locator('button').nth(1)).toHaveClass(/disabled/)
  await expect(buttonGroup3.locator('button').nth(1)).toHaveCSS('background-color', 'rgb(240, 240, 240)')
  await expect(buttonGroup3.locator('button').nth(1)).toHaveCSS('color', 'rgb(194, 194, 194)')

  // 按钮悬浮提示
  await buttonGroup3.locator('button').nth(1).hover()
  await expect(page.getByText('因为xxx原因被禁用')).toBeVisible()
})
