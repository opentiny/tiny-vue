import { test, expect } from '@playwright/test'

test('分页事件size-change', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('pager#pager-events')

  const preview = page.locator('#preview')
  const pager = preview.locator('.tiny-pager')
  const sizeSelect = page.locator('.tiny-pager__selector')
  const sizeChange = pager.locator('.tiny-pager__page-size')
  const modalBox = page.locator('.tiny-modal__box')

  await sizeChange.click()
  await sizeSelect.getByText('50').click()
  await expect(modalBox.filter({ hasText: 'size-change 事件，每页 50 条' })).toBeVisible()
  await sizeChange.click()
  await sizeSelect.getByText('100').click()
  await expect(modalBox.filter({ hasText: 'size-change 事件，每页 100 条' })).toBeVisible()
})
