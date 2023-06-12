import { test, expect } from '@playwright/test'

test('自动获取焦点', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/input/autofocus')
  const input = page.locator('.demo-input > .tiny-input > input')
  await expect(input).toHaveAttribute('autofocus', '')
})
