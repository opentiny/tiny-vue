import { test, expect } from '@playwright/test'

test('单选框组', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('radio#radio-group')

  const demo = page.locator('#radio-group')
  const radioGroup = demo.locator('.tiny-radio-group')

  await expect(radioGroup).toHaveCount(2)
  await expect(radioGroup.first().getByText('备选项1')).toBeVisible()
  await expect(radioGroup.first().getByText('备选项2')).toBeVisible()
  await expect(radioGroup.first().getByText('备选项3')).toBeVisible()
  await expect(radioGroup.nth(1).getByText('备选项1')).toBeVisible()
  await expect(radioGroup.nth(1).getByText('备选项2')).toBeVisible()
  await expect(radioGroup.nth(1).getByText('备选项3')).toBeVisible()
})
