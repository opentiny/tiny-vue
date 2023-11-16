import { test, expect } from '@playwright/test'

test('节点宽度', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('steps#space')

  const steps = page.locator('#preview .tiny-steps')
  const node = steps.locator('li').first()
  const { width } = await node.boundingBox()

  await expect(Math.round(width)).toEqual(200)
})
