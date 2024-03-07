import { test, expect } from '@playwright/test'

test('基础用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('carousel#basic-usage')
  const preview = page.locator('#basic-usage')
  const carousel = preview.locator('.tiny-carousel')
  await carousel.hover()
  await page.waitForTimeout(400)
  await preview.getByRole('list').getByRole('button').nth(1).click()
  await preview.locator('.tiny-carousel__arrow').first().click()
})
