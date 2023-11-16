import { test, expect } from '@playwright/test'

test('PopEditor 输入框的 tabindex', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popeditor#tabindex')

  const preview = page.locator('#preview')
  const textBox = preview.getByRole('textbox')

  await expect(textBox).toHaveCount(2)
  await textBox.nth(0).click()
  await textBox.nth(0).press('Tab')
  await expect(textBox.nth(1)).toBeFocused()
})
