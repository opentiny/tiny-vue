import { test, expect } from '@playwright/test'

test('单页时隐藏', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('pager#hide-on-single-page')

  const demo = page.locator('#hide-on-single-page')
  const pager = demo.locator('.tiny-pager')
  const prev = pager.locator('.tiny-pager__btn-prev')
  const next = pager.locator('.tiny-pager__btn-next')

  await expect(prev).toBeDisabled()
  await expect(next).toBeDisabled()
  await expect(pager).toBeVisible()
  await demo.locator('.tiny-switch').click()
  await expect(pager).not.toBeVisible()
})
