import { test, expect } from '@playwright/test'

test('展开行', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/grid-tree-grid/tree-table-tree-grid-expand')
  await page.getByRole('row', { name: '1 GFD科技YX公司 华东区 800' }).locator('i').click()
  await page.getByRole('row', { name: '3 TGBYX公司 华南区 360' }).locator('i').click()

  await expect(
    page
      .getByRole('cell', {
        name: '公司名称：TGBYX公司 区域：华南区 员工数：360 公司简介：公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
      })
      .getByText('公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。')
  ).toBeVisible()
})
