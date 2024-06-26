import { test, expect } from '@playwright/test'

test('重载数据时不清除过滤', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-filter#filter-request-service-reload-filter')
  const filterSvg = page.locator('.tiny-grid-filter-wrapper > .tiny-svg').first()
  await filterSvg.click()
  await page.locator('ul').filter({ hasText: '确定重置取消' }).getByRole('textbox').click()
  await page.locator('ul').filter({ hasText: '确定重置取消' }).getByRole('textbox').press('CapsLock')
  await page.locator('ul').filter({ hasText: '确定重置取消' }).getByRole('textbox').fill('G')
  await page.getByRole('button', { name: '确定' }).click()
  await page
    .locator('div')
    .filter({ hasText: /^前端过滤示例Relaod数据$/ })
    .getByRole('button')
    .click()

  expect(filterSvg).toHaveClass(/has__Filter/)
})
