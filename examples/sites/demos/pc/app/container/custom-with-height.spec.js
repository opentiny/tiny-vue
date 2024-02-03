import { test, expect } from '@playwright/test'

test('自定义宽度和高度', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('container#custom-with-height')

  const preview = page.locator('.pc-demo-container')
  const header = preview.locator('.tiny-container__header')
  const aside = preview.locator('.tiny-container__aside')
  const main = preview.locator('.tiny-container__main')
  const footer = preview.locator('.tiny-container__footer')

  await expect(header).toHaveCSS('height', '80px')
  await expect(aside).toHaveCSS('width', '200px')
  await expect(main).toHaveCSS('top', '80px')
  await expect(footer).toHaveCSS('height', '80px')
})
