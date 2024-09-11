import { test, expect } from '@playwright/test'

test('测试默认按钮', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('button#base')
  await expect(page.getByRole('button', { name: '次要按钮' }).first()).toHaveClass(/tiny-button--default/)
  await expect(page.getByRole('button', { name: '主要按钮' }).first()).toHaveClass(/tiny-button--primary/)
  await expect(page.getByRole('button', { name: '成功按钮' }).first()).toHaveClass(/tiny-button--success/)
  await expect(page.getByRole('button', { name: '信息按钮' }).first()).toHaveClass(/tiny-button--info/)
  await expect(page.getByRole('button', { name: '警告按钮' }).first()).toHaveClass(/tiny-button--warning/)
  await expect(page.getByRole('button', { name: '危险按钮' }).first()).toHaveClass(/tiny-button--danger/)
})

test('测试朴素按钮', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('button#base')
  await expect(page.getByRole('button', { name: '次要按钮' }).nth(1)).toHaveClass(/is-plain/)
  await expect(page.getByRole('button', { name: '主要按钮' }).nth(1)).toHaveClass(/tiny-button--primary is-plain/)
  await expect(page.getByRole('button', { name: '成功按钮' }).nth(1)).toHaveClass(/tiny-button--success is-plain/)
  await expect(page.getByRole('button', { name: '信息按钮' }).nth(1)).toHaveClass(/tiny-button--info is-plain/)
  await expect(page.getByRole('button', { name: '警告按钮' }).nth(1)).toHaveClass(/tiny-button--warning is-plain/)
  await expect(page.getByRole('button', { name: '危险按钮' }).nth(1)).toHaveClass(/tiny-button--danger is-plain/)
})
