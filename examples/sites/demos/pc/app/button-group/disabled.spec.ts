import { test, expect } from '@playwright/test'

test('测试按钮是否禁用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('button-group#disabled')

  const demo = page.locator('#disabled')
  const buttonGroup1 = demo.locator('.tiny-button-group').first()
  const buttonGroup2 = demo.locator('.tiny-button-group').nth(1)
  const buttonGroup3 = demo.locator('.tiny-button-group').nth(2)

  // 普通按钮组禁用
  await expect(buttonGroup1.locator('button').first()).toHaveClass(/disabled/)
  await expect(buttonGroup1.locator('button').first()).toHaveCSS('background-color', 'rgb(223, 225, 230)')
  await expect(buttonGroup1.locator('button').first()).toHaveCSS('border-bottom-color', 'rgb(173, 176, 184)')
  await expect(buttonGroup1.locator('button').first()).toHaveCSS('color', 'rgb(173, 176, 184)')
  await expect(buttonGroup1.locator('button').nth(1)).toHaveClass(/disabled/)
  await expect(buttonGroup1.locator('button').nth(1)).toHaveCSS('background-color', 'rgb(245, 245, 246)')
  await expect(buttonGroup1.locator('button').nth(1)).toHaveCSS('border-bottom-color', 'rgb(173, 176, 184)')
  await expect(buttonGroup1.locator('button').nth(1)).toHaveCSS('color', 'rgb(173, 176, 184)')

  // 无边框按钮组禁用
  await expect(buttonGroup2.locator('button').first()).toHaveClass(/disabled/)
  await expect(buttonGroup2.locator('button').first()).toHaveCSS('background-color', 'rgb(255, 255, 255)')
  await expect(buttonGroup2.locator('button').first()).toHaveCSS('border-bottom-color', 'rgba(0, 0, 0, 0)')
  await expect(buttonGroup2.locator('button').first()).toHaveCSS('color', 'rgb(173, 176, 184)')
  await expect(buttonGroup2.locator('button').nth(1)).toHaveClass(/disabled/)
  await expect(buttonGroup2.locator('button').nth(1)).toHaveCSS('background-color', 'rgb(255, 255, 255)')
  await expect(buttonGroup2.locator('button').nth(1)).toHaveCSS('border-bottom-color', 'rgba(0, 0, 0, 0)')
  await expect(buttonGroup2.locator('button').nth(1)).toHaveCSS('color', 'rgb(173, 176, 184)')

  // 单个按钮禁用
  await expect(buttonGroup3.locator('button').first()).not.toHaveClass(/disabled/)
  await expect(buttonGroup3.locator('button').first()).toHaveCSS('background-color', 'rgb(94, 124, 224)')
  await expect(buttonGroup3.locator('button').first()).toHaveCSS('border-bottom-color', 'rgb(94, 124, 224)')
  await expect(buttonGroup3.locator('button').first()).toHaveCSS('color', 'rgb(255, 255, 255)')
  await expect(buttonGroup3.locator('button').nth(1)).toHaveClass(/disabled/)
  await expect(buttonGroup3.locator('button').nth(1)).toHaveCSS('background-color', 'rgb(245, 245, 246)')
  await expect(buttonGroup3.locator('button').nth(1)).toHaveCSS('border-bottom-color', 'rgb(173, 176, 184)')
  await expect(buttonGroup3.locator('button').nth(1)).toHaveCSS('color', 'rgb(173, 176, 184)')

  // 按钮悬浮提示
  await buttonGroup3.locator('button').nth(1).hover()
  await expect(page.getByText('因为xxx原因被禁用')).toBeVisible()
})
