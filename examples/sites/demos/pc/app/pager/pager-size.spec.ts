import { test, expect } from '@playwright/test'

test('分页尺寸', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('pager#pager-size')

  const preview = page.locator('#preview')
  const pager = preview.locator('.tiny-pager.tiny-pager__number')

  await expect(pager.nth(1)).toHaveClass(/tiny-pager--mini/)
})
