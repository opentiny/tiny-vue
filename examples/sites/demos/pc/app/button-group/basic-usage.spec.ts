import { test, expect } from '@playwright/test'

test('按钮组基本示例', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('button-group#basic-usage')

  const demo = page.locator('#basic-usage')

  const buttonGroup = demo.locator('.tiny-button-group').first()
  const button3 = demo.getByRole('button', { name: 'Button3' })

  await button3.click()
  await demo.getByRole('button', { name: 'Button2' }).hover()
  await expect(buttonGroup.locator('li').nth(2)).toHaveClass('active')
  await expect(button3).toHaveCSS('background-color', 'rgb(94, 124, 224)')
  await expect(button3).toHaveCSS('border-bottom-color', 'rgb(94, 124, 224)')
  await expect(button3).toHaveCSS('color', 'rgb(255, 255, 255)')
  await demo.getByRole('button', { name: 'Button2' }).click()
  await expect(buttonGroup.locator('li').nth(1)).toHaveClass('active')
  await demo.getByRole('button', { name: 'Button1' }).click()
  await expect(buttonGroup.locator('li').nth(0)).toHaveClass('active')
})
