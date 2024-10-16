import { test, expect } from '@playwright/test'

test('disabled', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('input#disabled')
  const demo = page.locator('#disabled')
  const input = demo.getByRole('textbox', { name: 'input' })
  const textarea = page.getByRole('textbox', { name: 'textarea' })
  await expect(input).toHaveAttribute('disabled', '')
  await expect(textarea).toHaveAttribute('disabled', '')
})
