import { test, expect } from '@playwright/test'

test('测试禁用状态是否生效', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('button#dynamic-disabled')

  await page.getByRole('button', { name: '点击禁用按钮' }).click()
  await expect(page.locator('div:nth-child(2) > button').first()).toBeDisabled()
  await expect(page.getByRole('button', { name: '默认按钮' }).first()).toBeDisabled()
  await expect(page.getByRole('button', { name: '主要按钮' }).first()).toBeDisabled()
  await expect(page.getByRole('button', { name: '成功按钮' }).first()).toBeDisabled()

  await page.getByRole('button', { name: '点击启用按钮' }).click()
  await expect(page.locator('div:nth-child(2) > button').first()).not.toBeDisabled()
  await expect(page.getByRole('button', { name: '默认按钮' }).first()).not.toBeDisabled()
  await expect(page.getByRole('button', { name: '主要按钮' }).first()).not.toBeDisabled()
  await expect(page.getByRole('button', { name: '成功按钮' }).first()).not.toBeDisabled()
})
