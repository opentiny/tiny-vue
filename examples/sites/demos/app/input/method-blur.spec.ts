import { test, expect } from '@playwright/test'

test('失去焦点', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/input/method-blur')
  const input = page.locator('.demo-input > .tiny-input > .tiny-input-display-only > input')
  await page.getByPlaceholder('通过 input 事件调用 blur()，请输入').click()
  await expect(input).toHaveCSS('border-color', 'rgb(94, 124, 224)')
  await page.getByPlaceholder('通过 input 事件调用 blur()，请输入').fill('1')
  await expect(input).toHaveCSS('border-color', 'rgb(87, 93, 108)')
})
