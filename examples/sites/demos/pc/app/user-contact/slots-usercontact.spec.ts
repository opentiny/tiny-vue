import { test, expect } from '@playwright/test'

test('自定义默认插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('user-contact#slots-usercontact')
  const partBox = page.locator('.dropdown-part')
  await partBox.hover()
  await page.waitForTimeout(300)
  const slotDiv = page.locator('.tiny-card-template__body')
  await expect(slotDiv).toHaveText('自定义插槽内容')
})
