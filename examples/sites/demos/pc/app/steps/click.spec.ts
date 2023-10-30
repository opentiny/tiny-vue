import { test, expect } from '@playwright/test'

test('点击事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('steps#click')

  const nodes = page.locator('#preview .tiny-steps').locator('li')
  const tips = page.locator('#preview .tiny-steps ~ div span')

  await nodes.nth(2).click()
  await expect(tips.first()).toContainText('index:2')
  await expect(tips.nth(1)).toContainText('{"name":"Involved Parties","count":10,"status":"doing"}')
  await expect(nodes.nth(2)).toHaveClass(/current/)
  await nodes.nth(3).click()
  await expect(tips.first()).toContainText('index:3')
  await expect(tips.nth(1)).toContainText('{"name":"Billing","count":0,"status":"done"}')
  await expect(nodes.nth(3)).toHaveClass(/current/)
  await expect(nodes.nth(2)).not.toHaveClass(/current/)
})
