import { expect, test } from '@playwright/test'

test('[DatePanel] 测试范围选择取消面板联动', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('date-panel#unlink-panels')
  await page.locator('.settings-btn').first().click()
  await page.locator('label').filter({ hasText: '单示例' }).click()

  // dateRange
  await page.locator('.tiny-picker-panel__icon-btn').first().click()
  await page.locator('div').filter({ hasText: /^10$/ }).first().click()
  await page.getByText('19').nth(1).click()
  await expect(page.locator('.value-link')).toHaveText('[ "2024-01-10", "2024-02-19" ]')

  await page.locator('div:nth-child(2) > .tiny-date-range-picker__header > button:nth-child(3)').click()
  await page.getByText('14').nth(2).click()
  await page.getByText('19', { exact: true }).nth(3).click()
  await expect(page.locator('.value-unlink')).toHaveText('[ "2024-01-14", "2025-02-19" ]')

  // monthRange
  await page
    .locator(
      '.tiny-month-range > .tiny-picker-panel__body-wrapper > .tiny-picker-panel__body > div > .tiny-date-range-picker__header > .tiny-picker-panel__icon-btn'
    )
    .first()
    .click()
  await page.getByText('2023 年').click()
  await expect(page.getByText('2023 年')).toBeVisible()
  // 联动
  await page.getByText('一月', { exact: true }).first().click()
  await page.getByText('六月').nth(1).click()
  await expect(page.locator('.value-link1')).toHaveText('[ "2023-01", "2024-06" ]')

  // 不联动
  await page
    .locator(
      'div:nth-child(11) > .tiny-picker-panel__body-wrapper > .tiny-picker-panel__body > div > .tiny-date-range-picker__header > button'
    )
    .first()
    .click()
  await page
    .locator(
      '.tiny-month-range > .tiny-picker-panel__body-wrapper > .tiny-picker-panel__body > div:nth-child(2) > .tiny-date-range-picker__header > button:nth-child(2)'
    )
    .click()
  await page.getByText('六月').nth(2).click()
  await page.getByText('五月').nth(3).click()
  await expect(page.locator('.value-unlink1')).toHaveText('[ "2023-06", "2025-05" ]')

  // yaerRange
  // 联动
  await page
    .locator(
      'div:nth-child(7) > .tiny-picker-panel__body-wrapper > .tiny-picker-panel__body > div:nth-child(2) > .tiny-date-range-picker__header > .tiny-picker-panel__icon-btn'
    )
    .click()
  await page.getByText('2035').first().click()
  await page.getByText('2053').click()
  await expect(page.locator('.value-link2')).toHaveText('[ "2035", "2053" ]')

  // 不联动
  await page
    .locator('div')
    .filter({ hasText: /^2020 年 - 2031 年202020212022202320242025202620272028202920302031$/ })
    .getByRole('button')
    .first()
    .click()
  await page
    .locator(
      'div:nth-child(15) > .tiny-picker-panel__body-wrapper > .tiny-picker-panel__body > div:nth-child(2) > .tiny-date-range-picker__header > button:nth-child(2)'
    )
    .click()
  await page.getByText('2008', { exact: true }).click()
  await page.getByText('2054').nth(1).click()
  await expect(page.locator('.value-unlink2')).toHaveText('[ "2008", "2054" ]')
})
