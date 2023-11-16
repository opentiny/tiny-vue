import { test, expect } from '@playwright/test'

test('测试自定义分页布局', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('pager#custom-layout')

  const preview = page.locator('#preview')
  const pager = preview.locator('.tiny-pager')
  const prev = pager.locator('.tiny-pager__btn-prev')
  const next = pager.locator('.tiny-pager__btn-next')
  const slot = pager.getByText('我是插槽')

  await expect(slot).toBeVisible()
  const pageSizeBox = await pager.locator('.tiny-pager__page-size').boundingBox()
  const slotBox = await slot.boundingBox()
  expect(pageSizeBox.x).toBeLessThan(slotBox.x)
  const prevBox = await prev.boundingBox()
  expect(slotBox.x).toBeLessThan(prevBox.x)
  const pagesBox = await pager.locator('.tiny-pager__pages').boundingBox()
  expect(prevBox.x).toBeLessThan(pagesBox.x)
  const nextBox = await next.boundingBox()
  expect(pagesBox.x).toBeLessThan(nextBox.x)
  const gotoBox = await pager.locator('.tiny-pager__goto').boundingBox()
  expect(nextBox.x).toBeLessThan(gotoBox.x)
  const totalBox = await pager.locator('.tiny-pager__total').boundingBox()
  expect(gotoBox.x).toBeLessThan(totalBox.x)
})
