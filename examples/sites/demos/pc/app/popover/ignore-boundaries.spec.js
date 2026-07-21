import { test, expect } from '@playwright/test'

test('忽略边界判断', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popover#ignore-boundaries')
  const demo = page.locator('#ignore-boundaries')
  const title = demo.getByRole('tooltip', { name: '标题', exact: true }).getByRole('heading')
  const button = page.locator('.btn-fjtc')

  await page.waitForTimeout(3000)
  const box1 = await title.boundingBox()
  const box2 = await button.boundingBox()
  await expect(box1.y).toBeLessThan(box2.y)
})
