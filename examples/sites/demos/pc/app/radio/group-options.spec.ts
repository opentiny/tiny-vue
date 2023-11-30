import { test, expect } from '@playwright/test'

test('配置式单选组', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('radio#group-options')
  const radio1Label = page.locator('.tiny-radio__label').nth(0)
  const radio2Label = page.locator('.tiny-radio__label').nth(1)
  const radio1 = page.locator('.tiny-radio').nth(0)
  const radio2 = page.locator('.tiny-radio').nth(1)
  await expect(radio1).toHaveClass('tiny-radio is-checked')
  await expect(radio1Label).toHaveText('很好')
  await expect(radio2Label).toHaveText('一般')
  await page.getByRole('radio', { name: '一般' }).click()
  await expect(radio2).toHaveClass('tiny-radio is-focus is-checked')
})
