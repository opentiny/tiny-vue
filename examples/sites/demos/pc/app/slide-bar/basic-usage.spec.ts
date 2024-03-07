import { test, expect } from '@playwright/test'

test('基础用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('slide-bar#basic-usage')
  const preview = page.locator('#basic-usage')
  const slideBarContainer = preview.locator('.tiny-slide-bar__content')
  const slideBarList = slideBarContainer.locator('.tiny-slide-bar__list')
  await slideBarList.locator('li').first().click()
  await page.mouse.wheel(0, 100)
  await expect(slideBarList.locator('li').first()).toHaveCSS('border-color', 'rgba(153, 153, 153, 0.7)')
})
