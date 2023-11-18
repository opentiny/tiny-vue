import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-tree-grid#tree-table-tree-grid-expand-config')
  await page
    .getByRole('row', {
      name: '公司名称：GFD科技YX公司 区域：华东区 员工数：800 公司简介：公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
    })
    .getByText('公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。')
    .click()
  await page.getByText('区域：华南区').click()
  await page.getByRole('row', { name: '3 TGBYX公司 华南区 360' }).locator('i').click()
  await page.getByRole('row', { name: '2 WWWW科技YX公司 华南区 500' }).locator('i').click()

  await expect(page.getByText('员工数：500')).toBeVisible()
})
