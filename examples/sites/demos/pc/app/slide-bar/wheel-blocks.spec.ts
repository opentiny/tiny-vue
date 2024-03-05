import { test, expect } from '@playwright/test'

test('每次滚动块数', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('slide-bar#wheel-blocks')
  const slideBarContainer = page.locator('.tiny-slide-bar__content')
  const slideBarList = slideBarContainer.locator('.tiny-slide-bar__list')

  await slideBarList.first().click()
  await page.locator('.icon-chevron-right').click()
  // 单个滚动块的宽度固定为196px，所以应为 196px * 2
  await expect(slideBarList).toHaveCSS('left', '-360px')
  await page.locator('.icon-chevron-right').click()
  await expect(slideBarList).toHaveCSS('left', '-720px')
  await page.locator('.icon-chevron-left').click()
  await expect(slideBarList).toHaveCSS('left', '-360px')
})
