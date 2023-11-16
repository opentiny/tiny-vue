import { test, expect } from '@playwright/test'

test('测试隐藏表单项校验提示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('form#novalid-tip')

  const preview = page.locator('#preview')
  const form = preview.locator('.tiny-form')
  const tooltip = page.locator('.tiny-tooltip')
  const submitButton = form.getByRole('button', { name: '注册' })

  await expect(form.locator('.tiny-form-item').first().locator('input')).toHaveAttribute('novalid-tip', '')
  await submitButton.click()
  await expect(tooltip.getByText('必填')).toHaveCount(1)
})
