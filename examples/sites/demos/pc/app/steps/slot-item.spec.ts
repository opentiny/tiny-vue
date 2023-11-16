import { test, expect } from '@playwright/test'

test('插槽的使用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('steps#slot')

  const steps = page.locator('#preview .tiny-steps')
  const nodes = steps.locator('li')

  await expect(nodes.first()).toHaveText('Basic Info')
  await expect(nodes.nth(1)).toHaveText('BOQ Info')
  await expect(nodes.nth(2)).toHaveText('Involved Parties')
  await expect(nodes.nth(3)).toHaveText('Billing')
})
