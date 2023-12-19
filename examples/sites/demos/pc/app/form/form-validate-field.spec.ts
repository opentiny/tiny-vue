import { test, expect } from '@playwright/test'

test('特定表单项校验', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('form#form-validate-field')

  const demo = page.locator('#form-validate-field')
  const getTooltipByText = (text: string) => page.locator('.tiny-tooltip').getByText(text)
  const validBtn = demo.getByRole('button', { name: '校验' }).first()

  await validBtn.click()
  await expect(getTooltipByText('不符合规则的日期格式')).toBeVisible()
  await expect(getTooltipByText('必填')).toBeVisible()
  await demo.getByRole('button', { name: '移除校验' }).click()
  await expect(getTooltipByText('不符合规则的日期格式')).not.toBeVisible()
  await expect(getTooltipByText('必填')).not.toBeVisible()
  await validBtn.click()
  await expect(getTooltipByText('不符合规则的日期格式')).toBeVisible()
  await expect(getTooltipByText('必填')).toBeVisible()
  await demo.getByRole('button', { name: '重置日期' }).click()
  await expect(getTooltipByText('不符合规则的日期格式')).not.toBeVisible()
  await expect(getTooltipByText('必填')).toBeVisible()
})
