import { test, expect } from '@playwright/test'

test('触发校验时自动定位到当前校验的单元格', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-validation#grid_Example-gridValid-validation-scroll-to-col')
  await page.getByText('GFD科技YX公司').first().click()
  await page
    .getByRole('row', {
      name: '1 华东区 福州 公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
    })
    .getByRole('textbox')
    .fill('')
  await page.getByText('名称', { exact: true }).click()
  const lastColumn = page
    .getByRole('row', {
      name: '1 华东区 福州 公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
    })
    .getByText('公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。')
  await lastColumn.scrollIntoViewIfNeeded()
  await page.getByRole('button', { name: '保存' }).click()
  await page.waitForTimeout(200)

  await expect(page.getByRole('cell', { name: 'WWW科技YX公司' })).toBeInViewport()
})
