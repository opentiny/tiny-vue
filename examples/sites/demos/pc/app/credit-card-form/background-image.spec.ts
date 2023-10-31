import { test, expect } from '@playwright/test'

test('背景图片', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('credit-card-form#background-image')
  await expect(page.locator('.-front > .credit-card-item__cover > img')).toHaveAttribute(
    'src',
    '/static/images/mountain.png'
  )
})
