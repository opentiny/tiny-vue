import { test, expect } from '@playwright/test'

test('测试表单尺寸', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('form#size')

  const demo = page.locator('#size')
  const form = demo.locator('.tiny-form')
  const getBtnByText = (text: string) => demo.locator('.tiny-button-group').getByRole('button', { name: text })
  const submitBtn = form.getByRole('button', { name: '提交' })
  const input = form.locator('.tiny-numeric__input')
  const firstLabel = form.locator('.tiny-form-item__label').first()

  // mini表单
  const miniHeight = '24px'
  await getBtnByText('mini').click()
  await expect(form.locator('.tiny-form-item--mini')).toHaveCount(7)
  await expect(submitBtn).toHaveClass(/tiny-button--mini/)
  await expect(input).toHaveClass(/tiny-input-mini/)
  await expect(submitBtn).toHaveCSS('height', miniHeight)
  await expect(input).toHaveCSS('height', miniHeight)
  await expect(firstLabel).toHaveCSS('height', miniHeight)
  await expect(firstLabel).toHaveCSS('line-height', miniHeight)

  // small表单
  const smallHeight = '28px'
  await getBtnByText('small').click()
  await expect(form.locator('.tiny-form-item--small')).toHaveCount(7)
  await expect(submitBtn).toHaveClass(/tiny-button--small/)
  await expect(input).toHaveClass(/tiny-input-small/)
  await expect(submitBtn).toHaveCSS('height', smallHeight)
  await expect(input).toHaveCSS('height', smallHeight)
  await expect(firstLabel).toHaveCSS('height', smallHeight)
  await expect(firstLabel).toHaveCSS('line-height', smallHeight)

  // medium表单
  const mediumHeight = '40px'
  await getBtnByText('medium').click()
  await expect(form.locator('.tiny-form-item--medium')).toHaveCount(7)
  await expect(submitBtn).toHaveClass(/tiny-button--medium/)
  await expect(input).toHaveClass(/tiny-input-medium/)
  await expect(submitBtn).toHaveCSS('height', mediumHeight)
  await expect(input).toHaveCSS('height', mediumHeight)
  await expect(firstLabel).toHaveCSS('height', mediumHeight)
  await expect(firstLabel).toHaveCSS('line-height', mediumHeight)
})
