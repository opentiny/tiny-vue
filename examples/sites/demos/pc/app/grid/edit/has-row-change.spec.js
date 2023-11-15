import { test, expect } from '@playwright/test'

test('检查数据是否改变', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-edit#edit-hasRowChange')
  await page.getByText('GFD科技YX公司').first().click()
  await page.getByRole('row', { name: '1 保存' }).locator('input[type="text"]').fill('sdf')
  await page.getByRole('row', { name: '1 保存' }).getByRole('button', { name: '保存' }).click()
  await expect(page.getByText('保存成功！')).toBeVisible()
  await page.getByRole('button', { name: '确认' }).click()
  await page
    .getByRole('row', {
      name: '2 WWWW科技YX公司 华南区 深圳福田区 公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。 保存'
    })
    .getByRole('button', { name: '保存' })
    .click()
  await expect(page.getByText('当前数据未改变！')).toBeVisible()
  await page.getByRole('button', { name: '确认' }).click()
})
