import { test, expect } from '@playwright/test'

test('获取焦点', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/input/method-focus')
  await page.getByRole('button', { name: '输入框获取焦点' }).click()
  const input = page.locator('.demo-input > .tiny-input > .tiny-input-display-only > input')
  await expect(input).toHaveCSS('border-color', 'rgb(94, 124, 224)')
})
