import { test, expect } from '@playwright/test'

test('测试表单尺寸', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('form#size')

  const preview = page.locator('#preview')
  const form = preview.locator('.tiny-form')

  // mini表单
  await expect(form.first().locator('.tiny-form-item--mini')).toHaveCount(7)
  await expect(form.first().getByRole('button', { name: '提交' })).toHaveClass(/tiny-button--mini/)
  await expect(form.first().locator('.tiny-numeric__input')).toHaveClass(/tiny-input-mini/)
  // small表单
  await expect(form.nth(1).locator('.tiny-form-item--small')).toHaveCount(7)
  await expect(form.nth(1).getByRole('button', { name: '提交' })).toHaveClass(/tiny-button--small/)
  await expect(form.nth(1).locator('.tiny-numeric__input')).toHaveClass(/tiny-input-small/)
  // medium表单
  await expect(form.nth(2).locator('.tiny-form-item--medium')).toHaveCount(7)
  await expect(form.nth(2).getByRole('button', { name: '提交' })).toHaveClass(/tiny-button--medium/)
  await expect(form.nth(2).locator('.tiny-numeric__input')).toHaveClass(/tiny-input-medium/)
})
