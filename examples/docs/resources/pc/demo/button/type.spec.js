import { test, expect } from '@playwright/test'

test('测试按钮类型', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/button/type')
  await expect(page.getByRole('button', { name: '默认按钮' })).toHaveClass(/tiny-button--default/)
  await expect(page.getByRole('button', { name: '主要按钮' })).toHaveClass(/tiny-button--primary/)
  await expect(page.getByRole('button', { name: '成功按钮' })).toHaveClass(/tiny-button--success/)
  await expect(page.getByRole('button', { name: '信息按钮' })).toHaveClass(/tiny-button--info/)
  await expect(page.getByRole('button', { name: '警告按钮' })).toHaveClass(/tiny-button--warning/)
  await expect(page.getByRole('button', { name: '危险按钮' })).toHaveClass(/tiny-button--danger/)
  await expect(page.getByRole('button', { name: '文本按钮' })).toHaveClass(/tiny-button--text/)
})
