import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('virtual-scroll#show-status')
  const virtualScroll = page.locator('#show-status .tiny-virtual-scroll')
  const toggleButton = page.locator('.check .tiny-button')
  const virtualScrollItem = virtualScroll.locator('.tiny-virtual-scroll-item')
  await expect(virtualScroll).toBeVisible()
  await expect(virtualScrollItem.nth(0)).toBeVisible()

  const visibilityTest = async (isVisible) => {
    if (isVisible) {
      await expect(virtualScroll).toBeVisible()
      await expect(virtualScrollItem.nth(0)).toBeVisible()
    } else {
      await expect(virtualScroll).toBeHidden()
      await expect(virtualScrollItem.nth(0)).toBeHidden()
    }
  }
  await visibilityTest(true)
  await page.waitForTimeout(1000)
  await toggleButton.click()
  await visibilityTest(false)
  await page.waitForTimeout(1000)
  await toggleButton.click()
  await visibilityTest(true)
})
