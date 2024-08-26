import { test, expect } from '@playwright/test'

test('基本示例', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('input#basic-usage')
  const input = page.locator('.demo-input > .tiny-input > .tiny-input-display-only > input')

  await expect(input).toBeVisible()
  await expect(input).toHaveAttribute('placeholder', 'Please input')

  await input.focus()
  await expect(input).toHaveCSS('border', '1px solid rgb(94, 124, 224)')

  await input.fill('hello')
  await expect(input).toHaveValue('hello')
})
