import { test, expect } from '@playwright/test'

test('只有一页时隐藏分页', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('pager#hide-on-single-page')

  const preview = page.locator('#preview')
  const pager = preview.locator('.tiny-pager')
  const prev = pager.locator('.tiny-pager__btn-prev')
  const next = pager.locator('.tiny-pager__btn-next')

  await expect(prev).toBeDisabled()
  await expect(next).toBeDisabled()
  await expect(pager).toBeVisible()
  await preview.locator('.tiny-switch').click()
  await expect(pager).not.toBeVisible()
})
