import { test, expect } from '@playwright/test'

test('卡片模式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('carousel#card-mode')
  const preview = page.locator('#card-mode')
  const carouselItems = page.locator(
    '.tiny-carousel > .tiny-carousel__container > .tiny-carousel__item > .tiny-carousel__mask'
  )
  await page.locator('div').filter({ hasText: /^1$/ }).click()
  await preview.locator('.tiny-carousel__container > button:nth-child(2)').click()
  await preview.locator('.tiny-carousel__container > button:nth-child(2)').click()
  await preview.locator('.tiny-carousel__container > button:nth-child(2)').click()
  await preview.locator('.tiny-carousel__container > button:nth-child(2)').click()
  await preview.locator('.tiny-carousel__arrow').first().click()
  await preview.locator('.tiny-carousel__arrow').first().click()
  await preview.locator('.tiny-carousel__arrow').first().click()
  await preview.locator('.tiny-carousel__arrow').first().click()
  await expect(carouselItems).toHaveCount(4)
  await preview.getByRole('list').getByRole('button').nth(1).click()
  await preview.getByRole('list').getByRole('button').nth(2).click()
  await preview.getByRole('list').getByRole('button').nth(3).click()
})
