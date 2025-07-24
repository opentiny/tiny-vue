import { test, expect } from '@playwright/test'

test('横向单链型步骤条', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('steps#line-horizontal')

  const container = page.locator('#line-horizontal')
  const steps = container.locator('.pc-demo .tiny-steps-line').first()
  const nodes = steps.locator('.tiny-steps-block')

  await expect(nodes.first()).toHaveClass(/done/)
  await expect(nodes.first()).toHaveClass(/not-vertical/)
  await expect(nodes.nth(1)).toHaveClass(/doing/)
  await expect(nodes.nth(1)).toHaveClass(/active/)
  await expect(nodes.nth(2)).toHaveClass(/disabled/)
  await expect(nodes.nth(3)).toHaveClass(/fault/)
  await nodes.first().click()
  await expect(nodes.first()).toHaveClass(/active/)
})
