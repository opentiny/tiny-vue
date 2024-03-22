import { test, expect } from '@playwright/test'

test('错误提示插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('form#error-slot')

  const demo = page.locator('#error-slot')
  const getTooltipByText = (text: string) => page.locator('.tiny-tooltip').getByText(text)
  const validBtn = demo.getByRole('button', { name: '校验' }).first()

  await validBtn.click()
  await expect(getTooltipByText('必填')).toBeVisible()
  await expect(getTooltipByText('错误提示内容插槽')).toBeVisible()
  await expect(page.locator('.error-slot')).toBeVisible()
})
