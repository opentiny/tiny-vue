import { test, expect } from '@playwright/test'

test('自定义总条数', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('pager#custom-total')

  const preview = page.locator('#preview')
  const pager = preview.locator('.tiny-pager')
  const total = pager.locator('.tiny-pager__total')

  await expect(total.first()).toHaveText('总条数：100万+')
  await expect(total.nth(1)).toHaveText('总条数：条数超出百万')
})
