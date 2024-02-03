import { test, expect } from '@playwright/test'

test('上下面板插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('split#top-bottom-slot')
  const topDiv = page.locator('.tiny-split-pane').first()
  await expect(topDiv).toHaveText('自定义上面板')
  const bottomDiv = page.locator('.tiny-split-vertical > div:nth-child(3)')
  await expect(bottomDiv).toHaveText('自定义下面板')
})
