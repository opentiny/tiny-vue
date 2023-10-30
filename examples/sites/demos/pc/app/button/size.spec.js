import { test, expect } from '@playwright/test'

test('测试按钮尺寸', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('button#size')
  await expect(page.getByRole('button', { name: '超大按钮' }).first()).toHaveClass(/tiny-button--large/)
  await expect(page.getByRole('button', { name: '中等按钮' }).first()).toHaveClass(/tiny-button--medium/)
  await expect(page.getByRole('button', { name: '小型按钮' }).first()).toHaveClass(/tiny-button--small/)
  await expect(page.getByRole('button', { name: '超小按钮' }).first()).toHaveClass(/tiny-button--mini/)
})
