import { test, expect } from '@playwright/test'

test('测试数据字段映射', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('button-group#data')

  const preview = page.locator('#preview')
  const buttonGroup = preview.locator('.tiny-button-group').first()
  await buttonGroup.getByRole('button', { name: 'Button3' }).click()
  await expect(buttonGroup.locator('li').nth(2)).toHaveClass('active')
  await buttonGroup.getByRole('button', { name: 'Button2' }).click()
  await expect(buttonGroup.locator('li').nth(1)).toHaveClass('active')
  await buttonGroup.getByRole('button', { name: 'Button1' }).click()
  await expect(buttonGroup.locator('li').nth(0)).toHaveClass('active')
})
