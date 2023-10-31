import { test, expect } from '@playwright/test'

test('分页下拉框显示位置', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('pager#popper-append-to-body')

  const preview = page.locator('#preview')
  const pager = preview.locator('.tiny-pager')
  const sizeSelect = pager.locator('.tiny-pager__selector')

  await pager.locator('.tiny-pager__page-size').click()
  await expect(sizeSelect).toBeVisible()
  await sizeSelect.getByText('100').click()
  await expect(pager.locator('.tiny-pager__pages')).toHaveCount(1)
})
