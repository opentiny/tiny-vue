import { test, expect } from '@playwright/test'

test('服务端数据保存和删除方法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-toolbar#tiny-first-menu-save-data')
  await page.getByText('GFD科技YX公司').first().click()
  await page
    .getByRole('row', {
      name: '1 华东区 福州 公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
    })
    .getByRole('textbox')
    .fill('dsfds')
  await page.getByRole('row', { name: '名称 区域 地址 公司简介' }).getByText('名称').click()
  await page.getByRole('button', { name: '保存' }).click()
  await expect(page.getByText('dsfds').first()).toBeVisible()
})
