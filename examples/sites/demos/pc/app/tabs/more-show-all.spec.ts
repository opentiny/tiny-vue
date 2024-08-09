import { test, expect } from '@playwright/test'

test('超长数据下拉展示全部，面板长宽可控', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tabs#more-show-all')

  const container = page.locator('#more-show-all')
  const showMoreBtn = container.getByRole('button')
  const triggerBtn = container.locator('.tiny-tabs__more-container .tiny-dropdown__trigger.tiny-dropdown-trigger')
  const panel = page.locator('.tiny-tabs__more-dropdown')

  await showMoreBtn.hover()
  await showMoreBtn.click()
  await triggerBtn.click()
  await page.waitForTimeout(200)
  await panel.isVisible()
  await expect(panel).toHaveCSS('width', '150px')
  await expect(panel).toHaveCSS('max-height', '300px')

  await showMoreBtn.click()
  await triggerBtn.click()
  await page
    .locator('div')
    .filter({ hasText: /^Tab 100$/ })
    .nth(1)
    .scrollIntoViewIfNeeded()
  await page.waitForTimeout(200)
  await page
    .locator('div')
    .filter({ hasText: /^Tab 100$/ })
    .nth(1)
    .click()
  const tab100 = page.getByRole('tab', { name: 'Tab 100' })
  await tab100.isVisible()
  await expect(tab100).toHaveClass(/is-active/)

  await showMoreBtn.click()
  await triggerBtn.click()
  await page
    .locator('div')
    .filter({ hasText: /^Tab 1$/ })
    .nth(1)
    .scrollIntoViewIfNeeded()
  await page.waitForTimeout(200)
  await page
    .locator('div')
    .filter({ hasText: /^Tab 1$/ })
    .nth(1)
    .click()
  const tab1 = container.getByRole('tab', { name: 'Tab 1', exact: true })
  await tab1.isVisible()
  await expect(tab1).toHaveClass(/is-active/)
})
