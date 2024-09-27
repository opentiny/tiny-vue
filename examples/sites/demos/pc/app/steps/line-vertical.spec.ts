import { test, expect } from '@playwright/test'

test('横向单链型步骤条', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('steps#line-vertical')

  const container = page.locator('#line-vertical')
  const steps = container.locator('.pc-demo .tiny-steps-line')
  const nodes = steps.locator('.tiny-steps-block')

  await expect(nodes.first()).not.toHaveClass(/not-vertical/)
  await expect(nodes.nth(1)).toHaveClass(/doing/)
  await expect(nodes.nth(1)).toHaveClass(/active/)
  await expect(nodes.nth(2)).toHaveClass(/fault/)
  await expect(nodes.nth(4)).toHaveClass(/disabled/)
  await nodes.first().click()
  await expect(nodes.first()).toHaveClass(/active/)
})
