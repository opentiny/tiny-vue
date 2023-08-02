import { test, expect } from '@playwright/test'

test('测试按钮是否禁用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/button-group/disabled')
  await expect(page.getByRole('button', { name: 'Button1' }).first()).toHaveClass(/disabled/)
  await expect(page.getByRole('button', { name: 'Button2' }).first()).toHaveClass(/disabled/)
  await expect(page.getByRole('button', { name: 'Button2' }).first()).toHaveClass(/disabled/)
  await expect(page.getByRole('button', { name: 'Button1' }).nth(1)).toHaveClass(/disabled/)
  await expect(page.getByRole('button', { name: 'Button2' }).nth(1)).toHaveClass(/disabled/)
  await expect(page.getByRole('button', { name: 'Button3' }).nth(1)).toHaveClass(/disabled/)
})
