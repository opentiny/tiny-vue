import { test, expect } from '@playwright/test'

test('可选数量限制', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('checkbox#min-max')
  const preview = page.locator('#preview')
  const labels = preview.locator('.tiny-checkbox-group > label')
  const disabledLabels = labels.locator('.is-disabled')
  const checkedLabels = labels.locator('.is-checked')
  await expect(disabledLabels).toHaveCount(2)
  await expect(labels.locator('.is-checked.is-disabled')).toHaveCount(0)
  await page.locator('label').filter({ hasText: '北京' }).locator('span').nth(1).click()
  await expect(disabledLabels).toHaveCount(1)
  await expect(checkedLabels).toHaveCount(1)
  await expect(labels.locator('.is-checked.is-disabled')).toHaveCount(1)
})
