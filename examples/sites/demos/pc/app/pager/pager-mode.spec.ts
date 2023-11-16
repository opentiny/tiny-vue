import { test, expect } from '@playwright/test'

test('分页complete模式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('pager#pager-mode')

  const preview = page.locator('#preview')
  const pager = preview.locator('.tiny-pager')
  const prev = pager.locator('.tiny-pager__btn-prev')
  const next = pager.locator('.tiny-pager__btn-next')

  await expect(prev).toBeVisible()
  await expect(pager.locator('.tiny-pager__pages')).toBeVisible()
  await expect(next).toBeVisible()
  await expect(pager.locator('.tiny-pager__page-size')).toBeVisible()
  await expect(pager.locator('.tiny-pager__goto')).toBeVisible()
  await expect(pager.locator('.tiny-pager__total')).toBeVisible()
})
