import { test, expect } from '@playwright/test'

test('自定义操作列', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/grid-operation-column/tiny-first-menu-custom-operation-column')

  // 判断通过插槽设置自定义操作列成功
  await expect(
    page
      .getByRole('row', {
        name: '1 GFD科技YX公司 华东区 福州 公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
      })
      .getByRole('img')
  ).toBeVisible()
})
