import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('sticky#basic-usage')

  const demo = page.locator('#basic-usage')
  const scroller = page.locator('#doc-layout-scroller')

  await scroller.evaluate((el) => {
    el.scrollTop = 400
  })
  await expect(demo.locator('.tiny-sticky--fixed')).toHaveCSS('top', '0px')
})
