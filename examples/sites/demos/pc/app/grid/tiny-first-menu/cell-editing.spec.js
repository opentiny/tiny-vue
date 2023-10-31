import { test, expect } from '@playwright/test'

test('单元格编辑', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-edit#tiny-first-menu-cell-editing')
  await page.getByText('GFD科技YX公司').first().click()
  await page
    .getByRole('row', {
      name: '1 华东区 福州 公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
    })
    .getByRole('textbox')
    .fill('eeee')
  await page.getByText('名称').click()

  await expect(page.getByText('eeee').first()).toBeVisible()
  await expect(page.getByRole('cell', { name: 'eeee' })).toHaveClass(/col__valid-success/)
})
