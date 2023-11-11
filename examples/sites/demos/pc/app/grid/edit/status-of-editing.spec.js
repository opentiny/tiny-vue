import { test, expect } from '@playwright/test'

test('开启编辑状态', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-edit#tiny-first-menu-status-of-editing')
  await page.getByText('GFD科技YX公司').first().click()
  await page
    .getByRole('row', {
      name: '1 华东区 福州 公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
    })
    .getByRole('textbox')
    .fill('sdfdf')
  await page.getByText('名称').click()
  await expect(page.getByRole('cell', { name: 'sdfdf' })).toHaveClass(/col__valid-success/)
})
