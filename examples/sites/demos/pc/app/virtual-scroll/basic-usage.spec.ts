import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('virtual-scroll#basic-usage')
  const virtualScroll = page.locator('#basic-usage .tiny-virtual-scroll')
  const virtualScrollItem = virtualScroll.locator('.tiny-virtual-scroll-item')
  await expect(virtualScroll).toBeVisible()
  await expect(virtualScrollItem.nth(0)).toBeVisible()
  await expect(virtualScrollItem.nth(0)).toHaveText('第1项')
  await page.waitForTimeout(500)
  const containerBox = await virtualScroll.boundingBox()
  let visibleCount = 0
  let visibleItems = []
  const visibleItemsCount = await virtualScrollItem.count()
  for (let i = 0; i < visibleItemsCount; i++) {
    const itemBox = await virtualScrollItem.nth(i).boundingBox()
    if (itemBox && containerBox) {
      if (itemBox.y >= containerBox.y && itemBox.y + itemBox.height <= containerBox.y + containerBox.height) {
        visibleCount++
        const itemText = await virtualScrollItem.nth(i).textContent()
        visibleItems.push(itemText.trim())
      }
    }
  }
  console.log('Visible items:', visibleItems)
  await expect(visibleCount).toBe(6)
  for (let i = 0; i < visibleItems.length; i++) {
    console.log(`Item ${i + 1}:`, visibleItems[i])
  }
  await virtualScroll.evaluate((scroll) => scroll.scrollTo(0, 25000))
  await page.waitForTimeout(500)
  const targetItem = virtualScroll.locator('.tiny-virtual-scroll-item', { hasText: '第500项' })
  await expect(targetItem).toBeVisible()
  await virtualScroll.evaluate((scroll) => scroll.scrollTo(0, 50000))
  await expect(virtualScrollItem.last()).toHaveText('第1000项')
  let errors = []
  expect(errors.length).toBe(0)
})
