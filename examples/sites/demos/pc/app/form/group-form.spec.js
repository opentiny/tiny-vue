import { test, expect } from '@playwright/test'

test('测试分组表单', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('form#group-form')

  const preview = page.locator('#preview')
  const form = preview.locator('.tiny-form')
  const requiredTip = page.locator('.tiny-tooltip').getByText('必填')
  const submitButton = preview.getByRole('button', { name: '确认' })

  await expect(form).toHaveCount(2)
  await submitButton.click()
  await expect(requiredTip).toHaveCount(2)
  await form.first().locator('input').first().fill('1111')
  await form.nth(1).locator('input').first().fill('1111')
  await submitButton.click()
  await expect(requiredTip).toHaveCount(0)
  await expect(page.locator('.tiny-modal__box').getByText('提交成功')).toBeVisible()
})
