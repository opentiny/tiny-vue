import { test, expect } from '@playwright/test'

test('自定义字符串长度', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('form#custom-validation-string-length')

  const demo = page.locator('#custom-validation-string-length')
  const input1 = demo.locator('input').nth(0)
  const input2 = demo.locator('input').nth(1)
  const input3 = demo.locator('input').nth(2)

  await input1.fill('1111111')
  await expect(input1).toHaveValue('111')
  await input2.fill('1111111')
  await expect(page.locator('.tiny-tooltip').getByText('不能大于 3 个字符')).toBeVisible()
  await input3.fill('1111111')
  await expect(page.locator('.tiny-tooltip').getByText('不能大于 4 个字符')).toBeVisible()
})
