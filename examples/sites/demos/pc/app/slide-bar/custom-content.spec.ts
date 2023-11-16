import { test, expect } from '@playwright/test'

test('自定义滚动块内容', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('slide-bar#custom-content')
  const preview = page.locator('#preview')
  const slideBarContainer = preview.locator('.tiny-slide-bar__content')
  const slideBarList = slideBarContainer.locator('.tiny-slide-bar__list')
  await expect(slideBarList.first().locator('li span').first()).toContainText('标题')
  await expect(slideBarList.first().locator('li div').first()).toContainText('语言')
})
