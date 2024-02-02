import { test, expect } from '@playwright/test'

test('横向单链型步骤条', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('steps#line-vertical')

  const steps = page.locator('.pc-demo .tiny-steps-line')
  const nodes = steps.locator('.tiny-steps-block')

  await expect(nodes.first()).not.toHaveClass(/not-vertical/)
  await expect(nodes.nth(1)).toHaveClass(/done/)
  await expect(nodes.nth(1)).toHaveClass(/active/)
  await expect(nodes.nth(2)).toHaveClass(/doing/)
  await expect(nodes.nth(3)).toHaveClass(/fault/)
  await expect(nodes.nth(4)).toHaveClass(/disabled/)
  await nodes.first().click()
  await expect(nodes.first()).toHaveClass(/active/)
})
