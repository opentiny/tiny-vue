import { test, expect } from '@playwright/test'

test('总条数加载中', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('pager#show-total-loading')

  const demo = page.locator('#show-total-loading')
  const pager = demo.locator('.tiny-pager')
  const switchBtn = demo.locator('.tiny-switch')
  const total = pager.locator('.tiny-pager__total')
  const totalLoading = total.locator('.tiny-loading__spinner')

  await expect(total).toHaveText('加载总条数…')
  await expect(totalLoading).toBeVisible()
  await expect(totalLoading.locator('svg.circular')).toBeVisible()
  await switchBtn.click()
  await expect(totalLoading).not.toBeVisible()
  await switchBtn.click()
  await expect(totalLoading).toBeVisible()
  await expect(totalLoading.locator('svg.circular')).toBeVisible()
})
