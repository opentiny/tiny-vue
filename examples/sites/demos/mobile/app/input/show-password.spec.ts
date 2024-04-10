import { test, expect } from '@playwright/test'

test('密码框铭文显示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('input#show-password')

  const input = page.locator('.demo-input .tiny-mobile-input')
  await expect(input.locator('input')).toHaveAttribute('type', 'password')
  await input.locator('input').fill('123abc')
  await input.locator('.tiny-mobile-input__icon').click()
  await expect(input.locator('input')).toHaveAttribute('type', 'text')
  await expect(input.locator('input')).toHaveValue('123abc')
  await input.locator('.tiny-mobile-input__icon').click()
  await expect(input.locator('input')).toHaveAttribute('type', 'password')
  await expect(input.locator('input')).toHaveValue('123abc')
})
