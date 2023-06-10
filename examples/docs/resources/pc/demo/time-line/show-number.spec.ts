import { test, expect } from '@playwright/test'

test('隐藏未完成节点的序号', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/time-line/show-number')

  const nodes = page.locator('#preview .tiny-steps .normal')
  await expect(nodes.first().locator('.icon svg')).toBeVisible()
  await expect(nodes.nth(1).locator('.icon')).not.toHaveText('2')
  await expect(nodes.nth(2).locator('.icon')).not.toHaveText('3')
})