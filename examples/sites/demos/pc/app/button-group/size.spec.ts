import { test, expect } from '@playwright/test'

test('测试按钮尺寸', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('button-group#size')

  const mediumHeight = '42px'
  const smallHeight = '32px'
  const miniHeight = '24px'
  const demo = page.locator('#size')
  const buttonGroup = demo.locator('.tiny-button-group').first()
  await buttonGroup.getByRole('button', { name: 'Button3' }).click()
  await expect(buttonGroup.locator('li').nth(2)).toHaveClass('active')
  await buttonGroup.getByRole('button', { name: 'Button2' }).click()
  await expect(buttonGroup.locator('li').nth(1)).toHaveClass('active')
  await buttonGroup.getByRole('button', { name: 'Button1' }).click()
  await expect(buttonGroup.locator('li').nth(0)).toHaveClass('active')

  await expect(demo.getByRole('button', { name: 'Button1' }).first()).toHaveCSS('height', mediumHeight)
  await expect(demo.getByRole('button', { name: 'Button1' }).nth(1)).toHaveCSS('height', smallHeight)
  await expect(demo.getByRole('button', { name: 'Button1' }).nth(2)).toHaveCSS('height', miniHeight)
})
