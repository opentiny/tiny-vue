import { test, expect } from '@playwright/test'

test('检查当前行是否展开', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-expand#expand-has-row-expand')
  await page.getByRole('row', { name: '1 GFD科技YX公司 华东区 800' }).locator('i').click()
  await expect(page.locator('div').filter({ hasText: '当前展开行：1' }).nth(1)).toBeVisible()
  await expect(page.locator('.tiny-grid-body__expanded-cell')).toHaveText(
    '公司名称：GFD科技YX公司区域：华东区员工数：800公司简介：公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
  )
})
