import { test, expect } from '@playwright/test'

test('Grid-编辑器 - 下拉多选', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-editor#editor-mutil-render')
  await page.setViewportSize({
    width: 1600,
    height: 1200
  })
  const demo = page.locator('#editor-mutil-render')
  const firstRow = demo.locator('.tiny-grid-body__row:visible').first()
  await firstRow.locator('td').nth(2).click()
  await page.waitForTimeout(2500)
  await page.locator('.tiny-input__suffix-inner > .tiny-svg').click()
  await page.locator('li').filter({ hasText: '华东区' }).click()
  await page.getByRole('cell', { name: '创建时间' }).click()
  await expect(page.locator('.tiny-grid-body__row').first()).toContainText('华中区;华东区;华南区')
})
