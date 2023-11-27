import { test, expect } from '@playwright/test'

test('每页显示数量', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('pager#page-size')

  const preview = page.locator('#page-size')
  const pager = preview.locator('.tiny-pager')
  const total = 100
  const initPageSize = 5
  const getPageCount = (pageSize: number) => String(Math.ceil(total / pageSize))
  const sizeChange = pager.locator('.tiny-pager__page-size')
  const sizeSelect = page.locator('.tiny-pager__selector')
  const pageItem = pager.locator('.tiny-pager__pages li')

  await expect(pageItem.last()).toHaveText(getPageCount(initPageSize))
  await sizeChange.click()
  await sizeSelect.getByText('20').click()
  await expect(pageItem.last()).toHaveText(getPageCount(20))
  await sizeSelect.getByText('50').click()
  await expect(pageItem.last()).toHaveText(getPageCount(50))
})
