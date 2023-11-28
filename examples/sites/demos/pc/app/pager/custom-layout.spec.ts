import { test, expect } from '@playwright/test'

test('测试自定义分页布局', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('pager#custom-layout')

  const demo = page.locator('#custom-layout')
  const pager = demo.locator('.tiny-pager')
  const prev = pager.first().locator('.tiny-pager__btn-prev')
  const next = pager.first().locator('.tiny-pager__btn-next')
  const slot = pager.first().getByText('默认插槽')

  await expect(slot).toBeVisible()
  const totalBox = await pager.first().locator('.tiny-pager__total').boundingBox()
  const pageSizeBox = await pager.first().locator('.tiny-pager__page-size').boundingBox()
  const prevBox = await prev.boundingBox()
  const pagesBox = await pager.first().locator('.tiny-pager__pages').boundingBox()
  const nextBox = await next.boundingBox()
  const slotBox = await slot.boundingBox()
  const gotoBox = await pager.first().locator('.tiny-pager__goto').boundingBox()
  expect(totalBox?.x).toBeLessThan(pageSizeBox?.x || 0)
  expect(pageSizeBox?.x).toBeLessThan(prevBox?.x || 0)
  expect(prevBox?.x).toBeLessThan(pagesBox?.x || 0)
  expect(pagesBox?.x).toBeLessThan(nextBox?.x || 0)
  expect(nextBox?.x).toBeLessThan(slotBox?.x || 0)
  expect(slotBox?.x).toBeLessThan(gotoBox?.x || 0)
})
