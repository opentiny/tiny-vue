import { test, expect } from '@playwright/test'

test('设定清空输入后的绑定值', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('numeric#empty-value')

  const numeric = page.locator('.tiny-numeric').first()
  const numericInput = numeric.locator('.tiny-numeric__input-inner')
  const message = page.getByText('null 1')

  await numericInput.fill('')
  await numericInput.blur()

  await expect(message).toBeVisible()
})
