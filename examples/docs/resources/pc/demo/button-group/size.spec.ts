import { test, expect } from '@playwright/test'

test('测试按钮尺寸', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/button-group/size')

  const miniHeight = '24px'
  const smallHeight = '36px'
  const mediumHeight = '42px'
  const preview = page.locator('#preview')
  const buttonGroup = preview.locator('.tiny-button-group').first()
  await buttonGroup.getByRole('button', { name: 'Button3' }).click()
  await expect(buttonGroup.locator('li').nth(2)).toHaveClass('active')
  await buttonGroup.getByRole('button', { name: 'Button2' }).click()
  await expect(buttonGroup.locator('li').nth(1)).toHaveClass('active')
  await buttonGroup.getByRole('button', { name: 'Button1' }).click()
  await expect(buttonGroup.locator('li').nth(0)).toHaveClass('active')

  await expect(preview.getByRole('button', { name: 'Button1' }).first()).toHaveCSS('height', miniHeight)
  await expect(preview.getByRole('button', { name: 'Button1' }).nth(1)).toHaveCSS('height', smallHeight)
  await expect(preview.getByRole('button', { name: 'Button1' }).nth(2)).toHaveCSS('height', mediumHeight)
})
