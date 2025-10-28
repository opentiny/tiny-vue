import { test, expect } from '@playwright/test'

test('对齐方式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('pager#align')

  const demo = page.locator('#align')
  const pager = demo.locator('.tiny-pager')

  await expect(pager).toHaveCSS('text-align', 'left')

  await page.click('text=center')
  await expect(pager).toHaveCSS('text-align', 'center')
  await page.click('text=right')
  await expect(pager).toHaveCSS('text-align', 'right')
  await page.click('text=left')
  await expect(pager).toHaveCSS('text-align', 'left')
})
