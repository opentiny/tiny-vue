import { test, expect } from '@playwright/test'

test('测试表单尺寸', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('form#size')

  const demo = page.locator('#size')
  const form = demo.locator('.tiny-form')
  const getBtnByText = (text: string) => demo.locator('.tiny-button-group').getByRole('button', { name: text })

  // mini表单
  await getBtnByText('mini').click()
  await expect(form.locator('.tiny-form-item--mini')).toHaveCount(7)
  await expect(form.getByRole('button', { name: '提交' })).toHaveClass(/tiny-button--mini/)
  await expect(form.locator('.tiny-numeric__input')).toHaveClass(/tiny-input-mini/)
  // small表单
  await getBtnByText('small').click()
  await expect(form.locator('.tiny-form-item--small')).toHaveCount(7)
  await expect(form.getByRole('button', { name: '提交' })).toHaveClass(/tiny-button--small/)
  await expect(form.locator('.tiny-numeric__input')).toHaveClass(/tiny-input-small/)
  // medium表单
  await getBtnByText('medium').click()
  await expect(form.locator('.tiny-form-item--medium')).toHaveCount(7)
  await expect(form.getByRole('button', { name: '提交' })).toHaveClass(/tiny-button--medium/)
  await expect(form.locator('.tiny-numeric__input')).toHaveClass(/tiny-input-medium/)
})
