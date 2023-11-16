import { test, expect } from '@playwright/test'

test('设置数据源', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('user-contact#data-source')
  const partBox = page.locator('.dropdown-part')
  await partBox.hover()
  const imageUrl = page.locator('.tiny-user-head div').first()
  await expect(imageUrl).toHaveCSS(
    'background-image',
    'url("user-contact#static/images/fruit.jpg")'
  )
})
