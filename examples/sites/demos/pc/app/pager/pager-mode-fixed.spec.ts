import { test, expect } from '@playwright/test'

test('分页fixed模式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('pager#pager-mode-fixed')

  const preview = page.locator('#preview')
  const pager = preview.locator('.tiny-pager')
  const prev = pager.locator('.tiny-pager__btn-prev')
  const next = pager.locator('.tiny-pager__btn-next')

  // fixed 模式只有上一页、页码和下一页
  await expect(prev).toBeVisible()
  await expect(pager.locator('.tiny-pager__pages')).toBeVisible()
  await expect(next).toBeVisible()
  await expect(pager.locator('.tiny-pager__input')).not.toBeVisible()
  await expect(pager.locator('.tiny-pager__goto')).not.toBeVisible()
  await expect(pager.locator('.tiny-pager__total')).not.toBeVisible()
})
