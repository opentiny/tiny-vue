import { test, expect } from '@playwright/test'

test('编辑器插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-slot#slot-editor-slot')
  await page.setViewportSize({
    width: 1600,
    height: 1200
  })
  await page.getByText('WWWW科技YX公司').click()
  await page.getByRole('textbox', { name: '请输入内容', exact: true }).click()
  await page.getByRole('textbox', { name: '请输入内容', exact: true }).fill('WWWWsdfd科技YX公司')
  await page
    .locator('div')
    .filter({ hasText: /^编辑器插槽$/ })
    .first()
    .click()
  await expect(page.getByRole('cell', { name: 'WWWWsdfd科技YX公司' })).toBeVisible()

  await page.getByText('17:00:00').first().click()
  await page.waitForTimeout(1000)
  await page.locator('.tiny-date-editor .tiny-input__icon-container svg').nth(1).click()
  await page
    .locator('.tiny-time-spinner__list')
    .first()
    .locator('.tiny-time-spinner__item')
    .filter({ hasText: /^19$/ })
    .first()
    .click()
  await page
    .locator('div')
    .filter({ hasText: /^编辑器插槽$/ })
    .first()
    .click()
  await expect(page.getByRole('cell', { name: '19:00:00' })).toBeVisible()
  await expect(page.locator('.tiny-modal').filter({ hasText: /下班时间编辑完成/ })).toBeVisible()
})
