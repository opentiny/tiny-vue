import { test, expect } from '@playwright/test'

test('节点描述信息插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('steps#slot-description')

  const steps = page.locator('#preview .tiny-steps')
  const nodes = steps.locator('.tiny-timeline-item')

  await expect(nodes.first().locator('.my-description')).toBeVisible()
  await expect(nodes.first().locator('.my-description')).toHaveText('基本信息必填')
  await expect(nodes.nth(1).locator('.my-description')).toBeVisible()
  await expect(nodes.nth(1).locator('.my-description')).toHaveText('第二步描述信息')
})
