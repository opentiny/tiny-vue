import { test, expect } from '@playwright/test'

test('[Input]show-password', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('input#show-password')

  const demo = page.locator('#show-password')

  const svg = demo.locator('.tiny-input__suffix > .tiny-input__suffix-inner .tiny-input__icon')
  const input = demo.locator('.tiny-input.tiny-input-suffix input')

  // 密码隐藏
  await expect(svg).toBeVisible()
  await expect(input).toHaveAttribute('type', 'password')

  // 值
  await demo.locator('input[type="password"]').fill('123123123')
  const value = await demo.locator('input[type="password"]').inputValue()
  await expect(value).toBe('123123123')

  // 密码开放显示
  await demo.locator('.tiny-input__suffix > .tiny-input__suffix-inner').click()
  await expect(input).toHaveAttribute('type', 'text')
})
