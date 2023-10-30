import { test, expect } from '@playwright/test'

test('测试移除校验是否成功', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('form#form-clear-validate')

  const preview = page.locator('#preview')
  const form = preview.locator('.tiny-form')
  const submitButton = form.getByRole('button', { name: '提交' })
  const cleanButton = form.getByRole('button', { name: '移除表单校验' })
  // 必填的tooltip提示
  const requiredTip = page.locator('.tiny-tooltip').getByText('必填')
  // 日期校验tooltip提示
  const dateTip = page.locator('.tiny-tooltip').getByText('不符合规则的日期格式')

  await submitButton.click()
  await expect(requiredTip.first()).toBeVisible()
  await expect(requiredTip.nth(1)).toBeVisible()
  await expect(requiredTip.nth(2)).toBeVisible()
  await expect(requiredTip.nth(3)).toBeVisible()
  await expect(dateTip).toBeVisible()

  await cleanButton.click()
  await expect(requiredTip.first()).not.toBeVisible()
  await expect(requiredTip.nth(1)).not.toBeVisible()
  await expect(requiredTip.nth(2)).not.toBeVisible()
  await expect(requiredTip.nth(3)).not.toBeVisible()
  await expect(dateTip).not.toBeVisible()
})
