import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/input/basic-usage')
  const placeholder = page.getByPlaceholder('请输入内容', { exact: true })
  const input = page.locator('.demo-input > .tiny-input > .tiny-input-display-only > input')
  await expect(placeholder).toBeVisible()
  await page.getByPlaceholder('请输入内容', { exact: true }).focus()
  await expect(input).toHaveCSS('border', '1px solid rgb(94, 124, 224)')
})
