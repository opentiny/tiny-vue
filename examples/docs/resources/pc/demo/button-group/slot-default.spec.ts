import { test, expect } from '@playwright/test'

test('测试按钮默认插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/button-group/slot-default')
  const preview = page.locator('#preview')
  const buttonGroup = preview.locator('.tiny-button-group').first()
  await expect(buttonGroup.getByRole('button', { name: 'Button1' })).toHaveCSS('background-color', 'rgb(94, 124, 224)')
  await expect(buttonGroup.getByRole('button', { name: 'Button2' })).toHaveCSS('background-color', 'rgb(80, 212, 171)')
  await expect(buttonGroup.getByRole('button', { name: 'Button3' })).toHaveClass(/is-disabled/)
})
