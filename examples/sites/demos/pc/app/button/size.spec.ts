import { test, expect } from '@playwright/test'

test('测试按钮尺寸', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('button#size')

  const demo = page.locator('#size')
  // 判断类名是否正确
  await expect(demo.getByRole('button', { name: '超大按钮' }).first()).toHaveClass(/tiny-button--large/)
  await expect(demo.getByRole('button', { name: '中等按钮' }).first()).toHaveClass(/tiny-button--medium/)
  await expect(demo.getByRole('button', { name: '小型按钮' }).first()).toHaveClass(/tiny-button--small/)
  await expect(demo.getByRole('button', { name: '超小按钮' }).first()).toHaveClass(/tiny-button--mini/)

  // 判断高度是否正确
  await expect(demo.getByRole('button', { name: '超大按钮' }).first()).toHaveCSS('height', '48px')
  await expect(demo.getByRole('button', { name: '中等按钮' }).first()).toHaveCSS('height', '40px')
  await expect(demo.getByRole('button', { name: '小型按钮' }).first()).toHaveCSS('height', '32px')
  await expect(demo.getByRole('button', { name: '默认按钮' }).first()).toHaveCSS('height', '28px')
  await expect(demo.getByRole('button', { name: '超小按钮' }).first()).toHaveCSS('height', '24px')
})
