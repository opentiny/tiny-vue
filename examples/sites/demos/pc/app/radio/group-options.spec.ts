import { test, expect } from '@playwright/test'

test('配置式单选组', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('radio#group-options')
  const demo = page.locator('#group-options')
  const radio1Label = demo.locator('.tiny-radio__label').nth(0)
  const radio2Label = demo.locator('.tiny-radio__label').nth(1)
  const radio1 = demo.locator('.tiny-radio').nth(0)
  const radio2 = demo.locator('.tiny-radio').nth(1)
  await expect(radio1).toHaveClass('tiny-radio is-checked')
  await expect(radio1Label).toHaveText('很好')
  await expect(radio2Label).toHaveText('一般')
  await demo.locator('label').filter({ hasText: '一般' }).click()
  await expect(radio2).toHaveClass('tiny-radio is-focus is-checked')
})
