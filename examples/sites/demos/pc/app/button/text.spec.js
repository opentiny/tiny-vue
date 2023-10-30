import { test, expect } from '@playwright/test'

test('测试按钮文字', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('button#text')
  await expect(page.getByRole('button', { name: '文本按钮' })).toHaveClass(/tiny-button--text/)
  await expect(page.getByRole('button', { name: 'text属性' })).toHaveClass(/tiny-button--text/)
})
