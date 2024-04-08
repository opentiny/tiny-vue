import { test, expect } from '@playwright/test'

test('输入框禁用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('input#disabled')

  const input = page.locator('.demo-input .tiny-mobile-input')
  const textarea = page.locator('.demo-input .tiny-mobile-textarea')

  await expect(input).toHaveClass(/is-disabled/)
  await input.click()
  await expect(input).not.toHaveClass(/is-focus/)

  await expect(textarea).toHaveClass(/is-disabled/)
  await textarea.click()
  await expect(textarea).not.toHaveClass(/is-focus/)
})
