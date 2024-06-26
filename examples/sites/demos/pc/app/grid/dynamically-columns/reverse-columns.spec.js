import { test, expect } from '@playwright/test'

test('表格反转测试', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-dynamically-columns#dynamically-columns-reverse-columns')

  const firstHeader = page.locator(
    '#dynamically-columns-reverse-columns .tiny-grid-header__column .tiny-grid-cell-text'
  )
  const firstCell = page.locator('#dynamically-columns-reverse-columns .tiny-grid-body__column .tiny-grid-cell')
  await expect(firstHeader.first()).toHaveText(/公司简介/)
  await expect(firstCell.first()).toHaveText(/公司技术和研发实力雄厚/)
  await page.getByRole('button', { name: '反转列顺序' }).click()
  await expect(firstHeader.first()).toHaveText(/地址/)
  await expect(firstCell.first()).toHaveText(/福州/)
})
