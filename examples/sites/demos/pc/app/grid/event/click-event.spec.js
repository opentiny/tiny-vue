import { test, expect } from '@playwright/test'

test('点击事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-event#event-click-event')

  const header = page.locator('#event-click-event').getByRole('cell', { name: '名称' })

  // 表头单击
  await header.click()
  await expect(page.locator('.tiny-modal__body').filter({ hasText: '表头点击名称' })).toBeVisible()

  // 表头双击
  await header.dblclick()
  await expect(page.locator('.tiny-modal__body').filter({ hasText: '表头双击名称' })).toBeVisible()

  const cell = page.getByRole('cell', { name: 'GFD科技YX公司' })

  // 单元格单击
  await cell.click()
  await expect(page.locator('.tiny-modal__body').filter({ hasText: '单元格点击名称' })).toBeVisible()

  // 单元格双击
  await cell.dblclick()
  await expect(page.locator('.tiny-modal__body').filter({ hasText: '单元格双击名称' })).toBeVisible()

  // 表尾单击
  await page.getByRole('cell', { name: '总计人数' }).click()
  await expect(page.locator('.tiny-modal__body').filter({ hasText: '1' })).toBeVisible()

  // 表尾双击
  await page.getByRole('cell', { name: '3570' }).dblclick()
  await expect(page.locator('.tiny-modal__body').filter({ hasText: '4' }).first()).toBeVisible()
})
