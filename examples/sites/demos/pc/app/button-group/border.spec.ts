import { test, expect } from '@playwright/test'

test('测试按钮组点击功能', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/button-group/border')

  // 按钮组1
  const buttonGroup1 = page.locator('.tiny-button-group').nth(1)
  // 按钮组2
  const buttonGroup2 = page.locator('.tiny-button-group').nth(2)
  await page.getByRole('button', { name: 'Button3' }).click()
  await expect(buttonGroup1.locator('li').nth(2)).toHaveClass('active')
  await page.getByRole('button', { name: 'Button2' }).click()
  await expect(buttonGroup1.locator('li').nth(1)).toHaveClass('active')
  await page.getByRole('button', { name: 'Button1' }).click()
  await expect(buttonGroup1.locator('li').nth(0)).toHaveClass('active')
  await page.getByRole('button', { name: 'Button6' }).click()
  await expect(buttonGroup2.locator('li').nth(2)).toHaveClass('active')
  await page.getByRole('button', { name: 'Button5' }).click()
  await expect(buttonGroup2.locator('li').nth(1)).toHaveClass('active')
  await page.getByRole('button', { name: 'Button4' }).click()
  await expect(buttonGroup2.locator('li').nth(0)).toHaveClass('active')
})

test('测试按钮组有无边框', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/button-group/border')

  // 按钮组1点击前后查看有无边框
  const buttonGroup1 = page.locator('.tiny-button-group').nth(1)
  await expect(buttonGroup1.getByRole('button', { name: 'Button2' })).toHaveCSS('border-top-color', 'rgba(0, 0, 0, 0)')
  await buttonGroup1.getByRole('button', { name: 'Button2' }).click()
  await expect(buttonGroup1.getByRole('button', { name: 'Button2' })).toHaveCSS('border-top-color', 'rgba(0, 0, 0, 0)')

  // 按钮组2点击前后查看有无边框
  const buttonGroup2 = page.locator('.tiny-button-group').nth(2)
  await expect(buttonGroup2.getByRole('button', { name: 'Button5' })).toHaveCSS('border-top-color', 'rgba(0, 0, 0, 0)')
  await buttonGroup2.getByRole('button', { name: 'Button5' }).click()
  await expect(buttonGroup2.getByRole('button', { name: 'Button5' })).toHaveCSS('border-top-color', 'rgba(0, 0, 0, 0)')
})
