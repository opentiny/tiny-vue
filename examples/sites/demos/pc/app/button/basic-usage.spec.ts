import { test, expect } from '@playwright/test'

test('测试默认按钮', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('button#basic-usage')
  await expect(page.locator('.tiny-button').first()).toHaveClass(/tiny-button--default/)
  await expect(page.getByRole('button', { name: '主要按钮' }).first()).toHaveClass(/tiny-button--primary/)
  await expect(page.getByRole('button', { name: '成功按钮' }).first()).toHaveClass(/tiny-button--success/)
  await expect(page.getByRole('button', { name: '信息按钮' }).first()).toHaveClass(/tiny-button--info/)
  await expect(page.getByRole('button', { name: '警告按钮' }).first()).toHaveClass(/tiny-button--warning/)
  await expect(page.getByRole('button', { name: '危险按钮' }).first()).toHaveClass(/tiny-button--danger/)
})

test('测试朴素按钮', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('button#basic-usage')
  await expect(page.getByRole('button', { name: '朴素按钮' })).toHaveClass(/is-plain/)
  await expect(page.getByRole('button', { name: '主要按钮' }).nth(1)).toHaveClass(/tiny-button--primary\s+is-plain/)
  await expect(page.getByRole('button', { name: '成功按钮' }).nth(1)).toHaveClass(/tiny-button--success\s+is-plain/)
  await expect(page.getByRole('button', { name: '信息按钮' }).nth(1)).toHaveClass(/tiny-button--info\s+is-plain/)
  await expect(page.getByRole('button', { name: '警告按钮' }).nth(1)).toHaveClass(/tiny-button--warning\s+is-plain/)
  await expect(page.getByRole('button', { name: '危险按钮' }).nth(1)).toHaveClass(/tiny-button--danger\s+is-plain/)
})

test('测试圆角按钮', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('button#basic-usage')
  await expect(page.getByRole('button', { name: '圆角按钮' })).toHaveClass(/is-round/)
  await expect(page.getByRole('button', { name: '主要按钮' }).nth(2)).toHaveClass(/tiny-button--primary\s+is-round/)
  await expect(page.getByRole('button', { name: '成功按钮' }).nth(2)).toHaveClass(/tiny-button--success\s+is-round/)
  await expect(page.getByRole('button', { name: '信息按钮' }).nth(2)).toHaveClass(/tiny-button--info\s+is-round/)
  await expect(page.getByRole('button', { name: '警告按钮' }).nth(2)).toHaveClass(/tiny-button--warning\s+is-round/)
  await expect(page.getByRole('button', { name: '危险按钮' }).nth(2)).toHaveClass(/tiny-button--danger\s+is-round/)
})

test('测试是否是圆形按钮', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('button#basic-usage')
  await expect(page.locator('.tiny-button').first()).toHaveClass(/tiny-button--default/)
  await expect(page.locator('button:nth-child(2)').first()).toHaveClass(/tiny-button--primary/)
  await expect(page.locator('button:nth-child(3)').first()).toHaveClass(/tiny-button--success/)
  await expect(page.locator('button:nth-child(4)').first()).toHaveClass(/tiny-button--info/)
  await expect(page.locator('button:nth-child(5)').first()).toHaveClass(/tiny-button--warning/)
  await expect(page.locator('button:nth-child(6)').first()).toHaveClass(/tiny-button--danger/)
})
