import { test, expect } from '@playwright/test'

test('单元格格式化', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/grid-edit/tiny-first-menu-format-value')
  await page.getByText('GFD科技YX公司').first().click()
  const input = page
    .getByRole('row', {
      name: '1 华东区 福州 公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
    })
    .getByRole('textbox')
  await expect(input).toHaveValue('GFD科技YX公司你好')
})
