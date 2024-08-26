import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('virtual-scroll#dynamic-height')
  const virtualScroll = page.locator('#dynamic-height .tiny-virtual-scroll')
  const virtualScrollItem = virtualScroll.locator('.tiny-virtual-scroll-item')
  await expect(virtualScroll).toBeVisible()
  await expect(virtualScrollItem.nth(0)).toBeVisible()
  await virtualScroll.evaluate((scroll) => {
    for (let i = 0; i < 50; i++) {
      scroll.scrollBy(0, 200)
    }
  })
  await expect(virtualScrollItem.last()).toBeVisible()
  const midItem = virtualScrollItem.nth(0)
  await expect(midItem).toBeVisible()
  const midItemText = await midItem.textContent()
  expect(midItemText).not.toBeNull()
  let allVisibleItems = await virtualScrollItem.all()
  await virtualScroll.evaluate((scroll) => scroll.scrollTo(0, scroll.scrollHeight))
  const lastItem = virtualScrollItem.last()
  await expect(lastItem).toBeVisible()
  const lastItemText = await lastItem.textContent()
  expect(lastItemText).not.toBeNull()
  allVisibleItems = await virtualScrollItem.all()
  for (const item of allVisibleItems) {
    await expect(item).toBeVisible()
  }
})
