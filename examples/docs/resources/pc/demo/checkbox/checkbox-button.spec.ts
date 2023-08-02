import { test, expect } from '@playwright/test'

test('按钮形式的复选框选中时', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/checkbox/checkbox-button')
  const preview = page.locator('#preview')
  const buttonCheck = preview.locator('.tiny-checkbox-button')
  await expect(buttonCheck).toHaveClass(/is-checked/)
  await expect(buttonCheck.locator('.tiny-checkbox-button__inner')).toHaveCSS('background-color', 'rgb(64, 158, 255)')
  await page.getByRole('button', { name: '获取文本' }).click()
  await expect(page.getByText(/真文本/)).toBeVisible()
})

test('按钮形式的复选框未选中时', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/checkbox/checkbox-button')
  const preview = page.locator('#preview')
  const buttonCheck = preview.locator('.tiny-checkbox-button')
  await buttonCheck.click()
  await expect(buttonCheck).not.toHaveClass(/is-checked/)
  await page.getByRole('button', { name: '获取文本' }).click()
  await expect(page.getByText(/假文本/)).toBeVisible()
})
