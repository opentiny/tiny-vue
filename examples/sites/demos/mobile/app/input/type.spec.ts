import { test, expect } from '@playwright/test'

test('Input输入框类型', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('input#type')

  const inputs = page.locator('.demo-input .tiny-mobile-input input')

  await expect(inputs.first()).toHaveAttribute('type', 'text')
  await expect(inputs.nth(1)).toHaveAttribute('type', 'password')
  await expect(inputs.nth(2)).toHaveAttribute('type', 'email')
  await expect(inputs.nth(3)).toHaveAttribute('type', 'number')
  await expect(inputs.nth(4)).toHaveAttribute('type', 'tel')
  await expect(inputs.nth(5)).toHaveAttribute('type', 'url')
  await expect(inputs.nth(6)).toHaveAttribute('type', 'date')
  await expect(inputs.nth(7)).toHaveAttribute('type', 'month')
  await expect(inputs.nth(8)).toHaveAttribute('type', 'week')
  await expect(inputs.nth(9)).toHaveAttribute('type', 'datetime-local')
  await expect(inputs.nth(10)).toHaveAttribute('type', 'time')
})
