import { test, expect } from '@playwright/test'

test('行合并与展开行：展开为全宽且不重叠', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-span#span-row-span-with-expand')

  const areaCell = page.getByRole('cell', { name: '华南区' }).first()
  await expect(areaCell).toHaveAttribute('rowspan', '3')

  await page.getByRole('row', { name: /中山/ }).locator('.tiny-grid__expanded').click()
  const expandRow = page.locator('.tiny-grid-body__expanded-row')
  await expect(expandRow).toBeVisible()
  await expect(page.locator('.tiny-grid-body__expanded-cell')).toContainText('中山')
  await expect(expandRow.locator('td')).toHaveAttribute('colspan', '6')
  await expect(areaCell).toHaveAttribute('rowspan', '2')

  const shaoguanRow = page.getByRole('row', { name: /韶关/ })
  await expect(shaoguanRow.getByRole('cell', { name: '华南区' })).toBeVisible()

  const expandBox = await expandRow.boundingBox()
  const areaBox = await areaCell.boundingBox()
  expect(expandBox.y).toBeGreaterThanOrEqual(areaBox.y + areaBox.height - 2)
})
