import { test, expect } from '@playwright/test'

test('测试圆角按钮', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/button/round')
  await expect(page.getByRole('button', { name: '默认按钮' })).toHaveClass(/is-round/)
  await expect(page.getByRole('button', { name: '主要按钮' })).toHaveClass(/is-round/)
  await expect(page.getByRole('button', { name: '成功按钮' })).toHaveClass(/is-round/)
  await expect(page.getByRole('button', { name: '信息按钮' })).toHaveClass(/is-round/)
  await expect(page.getByRole('button', { name: '警告按钮' })).toHaveClass(/is-round/)
  await expect(page.getByRole('button', { name: '危险按钮' })).toHaveClass(/is-round/)
})
