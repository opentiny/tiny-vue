import { test, expect } from '@playwright/test'

test('手动勾选全选时触发的事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-event#event-select-event')
  await page
    .getByRole('row', {
      name: 'GFD科技YX公司 华东区 福州 公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
    })
    .locator('path')
    .first()
    .click()
  await expect(page.getByText('选项改变了')).toBeVisible()
  await page.getByRole('row', { name: '名称 所属区域 地址 公司简介' }).locator('span').click()

  await expect(page.getByText('触发全选事件')).toBeVisible()
})
