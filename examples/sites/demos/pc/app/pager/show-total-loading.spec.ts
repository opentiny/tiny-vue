import { test, expect } from '@playwright/test'

test('总条数加载中', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('pager#show-total-loading')

  const preview = page.locator('#preview')
  const pager = preview.locator('.tiny-pager')
  const changeBtn = preview.getByRole('button', { name: '改变总页数加载状态' })
  const total = pager.locator('.tiny-pager__total')
  const totalLoading = total.locator('.tiny-loading__spinner')

  await expect(total).toHaveText('加载总条数…')
  await expect(totalLoading).toBeVisible()
  await expect(totalLoading.locator('svg.circular')).toBeVisible()
  await changeBtn.click()
  await expect(totalLoading).not.toBeVisible()
  await changeBtn.click()
  await expect(totalLoading).toBeVisible()
  await expect(totalLoading.locator('svg.circular')).toBeVisible()
})
