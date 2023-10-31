import { test, expect } from '@playwright/test'

test('滚动分页', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-large-data#large-data-scroll-paging')
  const scrollContainer = page.locator('.tiny-grid-body__y-space.visual')
  const scrollBar = page.locator('.tiny-grid-body__y-scrollbar')
  await expect(scrollContainer).toHaveCSS('height', '420px')
  await expect(scrollBar).toHaveCSS('height', '4200px')
})
