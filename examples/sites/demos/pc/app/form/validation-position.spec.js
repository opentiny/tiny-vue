import { test, expect } from '@playwright/test'

test('测试检验提示出现为', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('form#validation-position')

  const preview = page.locator('#preview')
  const form = preview.locator('.tiny-form')
  const formItem = form.locator('.tiny-form-item')
  const submitButton = form.getByRole('button', { name: '提交' })
  const tooltip = page.locator('.tiny-tooltip')

  await submitButton.click()
  // 校验提示在表单项上方
  const item1Box = await formItem.first().boundingBox()
  const requiredTipBox = await tooltip.getByText('必填').boundingBox()
  expect(requiredTipBox.y).toBeLessThan(item1Box.y)
  // 校验提示在表单项下方
  const item2Box = await formItem.nth(1).boundingBox()
  const dateTipBox = await tooltip.getByText('不符合规则的日期格式').boundingBox()
  expect(item2Box.y).toBeLessThan(dateTipBox.y)
})
