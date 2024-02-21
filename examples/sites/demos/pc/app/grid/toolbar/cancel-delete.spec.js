import { test, expect } from '@playwright/test'

test('取消删除', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-toolbar#toolbar-cancel-delete')
  await page
    .getByRole('row', {
      name: '1 1 GFD科技YX公司 华东区 福州 公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
    })
    .locator('span')
    .click()
  await page.getByRole('button', { name: '删除/取消删除' }).click()
  await expect(page.locator('.tiny-grid-body__row').first()).toHaveClass(/row__pending/)
})
