import { test, expect } from '@playwright/test'

test('option-slot', async ({ page }) => {
  await page.goto('select#custom-options')
  const input = page.locator('#preview .tiny-input__inner')

  await input.click()
  expect(page.getByText('选项1')).toHaveCSS('float', 'right')
  await page.getByText('黄金糕选项1').click()
  await expect(input).toHaveValue('黄金糕')
})
