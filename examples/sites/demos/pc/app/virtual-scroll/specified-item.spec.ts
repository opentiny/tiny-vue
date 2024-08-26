import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('virtual-scroll#specified-item')
  const virtualScroll = page.locator('#specified-item .tiny-virtual-scroll')
  const scrollButton = page.locator('.scrollTo-demo > .footer > .tiny-button')
  const scrollInput = await page.locator('.scrollTo-demo > .footer > .tiny-input > .tiny-input-display-only > input')
  const virtualScrollItem = virtualScroll.locator('.tiny-virtual-scroll-item')
  await expect(virtualScroll).toBeVisible()
  await expect(virtualScrollItem.nth(0)).toBeVisible()
  await expect(scrollInput).toBeVisible()
  await scrollInput.fill('100')
  await scrollButton.click()
  await page.waitForTimeout(500)
  const containerBox = await virtualScroll.boundingBox()
  let firstVisibleItem = null
  const visibleItemsCount = await virtualScrollItem.count()
  for (let i = 0; i < visibleItemsCount; i++) {
    const itemBox = await virtualScrollItem.nth(i).boundingBox()
    if (itemBox && containerBox) {
      if (itemBox.y >= containerBox.y && itemBox.y + itemBox.height <= containerBox.y + containerBox.height) {
        firstVisibleItem = virtualScrollItem.nth(i)
        break
      }
    }
  }
  if (firstVisibleItem) {
    const firstVisibleItemText = await firstVisibleItem.textContent()
    expect(firstVisibleItemText).toContain('第100项')
  } else {
    throw new Error('没有找到显示区域中的第一个项目')
  }
  await scrollInput.fill('1')
  await scrollButton.click()
  await page.waitForTimeout(1000)
  const firstItem = virtualScrollItem.nth(0)
  await expect(firstItem).toBeVisible()
  await scrollInput.fill('1000') // 最大索引
  await scrollButton.click()
  await page.waitForTimeout(1000)
  const lastItem = virtualScrollItem.last()
  await expect(lastItem).toBeVisible()
})
