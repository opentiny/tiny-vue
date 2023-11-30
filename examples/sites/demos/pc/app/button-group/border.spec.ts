import { test, expect } from '@playwright/test'

test('测试按钮组有无边框', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('button-group#border')

  const demo = page.locator('#border')
  const buttonGroup = demo.locator('.tiny-button-group').first()
  const button3 = demo.getByRole('button', { name: 'Button3' })

  await expect(buttonGroup).toHaveClass(/tiny-button-group--borderless/)
  await button3.click()
  await demo.click()
  await expect(buttonGroup.locator('li').nth(2)).toHaveClass('active')
  await expect(button3).toHaveCSS('background-color', 'rgb(94, 124, 224)')
  await expect(button3).toHaveCSS('border-bottom-color', 'rgb(94, 124, 224)')
  await expect(button3).toHaveCSS('color', 'rgb(255, 255, 255)')
  await expect(buttonGroup.locator('li').nth(0).locator('button')).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')
  await expect(buttonGroup.locator('li').nth(0).locator('button')).toHaveCSS('border-bottom-color', 'rgba(0, 0, 0, 0)')
})
