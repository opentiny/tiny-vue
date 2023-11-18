import { test, expect } from '@playwright/test'

test('测试禁用状态是否生效', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('button#dynamic-disabled')

  const demo = page.locator('#dynamic-disabled')
  const switchBtn = demo.locator('.tiny-switch')

  await switchBtn.click()
  await expect(demo.locator('.tiny-button').first()).toBeDisabled()
  await expect(demo.getByRole('button', { name: '默认按钮' }).first()).toBeDisabled()
  await expect(demo.getByRole('button', { name: '主要按钮' }).first()).toBeDisabled()
  await expect(demo.getByRole('button', { name: '成功按钮' }).first()).toBeDisabled()

  await switchBtn.click()
  await expect(demo.locator('.tiny-button').first()).not.toBeDisabled()
  await expect(demo.getByRole('button', { name: '默认按钮' }).first()).not.toBeDisabled()
  await expect(demo.getByRole('button', { name: '主要按钮' }).first()).not.toBeDisabled()
  await expect(demo.getByRole('button', { name: '成功按钮' }).first()).not.toBeDisabled()
})
