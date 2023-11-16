import { test, expect } from '@playwright/test'

test('显示标题', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('carousel#show-title')
  const preview = page.locator('#preview')
  const carouselItems = preview.locator('div.tiny-carousel__item')
  const indicators = preview.getByRole('list').getByRole('button')
  await expect(carouselItems.first().locator('span')).toHaveText('幻灯片 - 1')
  await indicators.nth(1).hover()
  await expect(carouselItems.nth(1).locator('span')).toHaveText('幻灯片 - 2')
})
