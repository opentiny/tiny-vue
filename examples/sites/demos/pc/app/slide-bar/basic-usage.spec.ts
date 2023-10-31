import { test, expect } from '@playwright/test'

test('基础用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('slide-bar#basic-usage')
  const preview = page.locator('#preview')
  const slideBarContainer = preview.locator('.tiny-slide-bar__content')
  const slideBarList = slideBarContainer.locator('.tiny-slide-bar__list')
  await slideBarList.locator('li').first().click()
  await page.mouse.wheel(0, 100)
  await expect(slideBarList.locator('li').first()).toHaveCSS('border-color', 'rgba(153, 153, 153, 0.7)')
  await preview.locator('.icon-chevron-right').click()
  // 单个滚动块的宽度为 width + marginLeft，固定值为196px
  await expect(slideBarList).toHaveCSS('left', '-196px')
  await preview.locator('.icon-chevron-left').click()
  await expect(slideBarList).toHaveCSS('left', '0px')
})
