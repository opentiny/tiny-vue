import { test, expect } from '@playwright/test'

test('自定义 DOM 标签', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('slide-bar#custom-tag')
  const preview = page.locator('#preview')
  const slideBarContainer = preview.locator('.tiny-slide-bar__content')
  const slideBarList = slideBarContainer.locator('.tiny-slide-bar__list')
  // 自定义的标签为 div
  await expect(slideBarList.locator('li').first().locator('div')).toHaveCount(3)
})
