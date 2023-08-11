import { test, expect } from '@playwright/test'

test('输入时触发表单校验', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/input/validate-event')
  await page.locator('#preview').getByRole('textbox').click()
  await page
    .locator('div')
    .filter({ hasText: /^活动名称$/ })
    .first()
    .click()
  const tip = page.getByRole('tooltip', { name: '请输入活动名称' })
  await expect(tip).toBeVisible()
})
