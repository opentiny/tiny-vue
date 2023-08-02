import { test, expect } from '@playwright/test'

test('单元格编辑完成触发该事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/grid-event/event-edit-closed-event')
  await page.getByText('GFD科技YX公司').first().click()
  await page
    .getByRole('row', {
      name: '1 华东区 福州 公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
    })
    .getByRole('textbox')
    .fill('sss')
  await page
    .locator('#preview div')
    .filter({
      hasText:
        '名称区域地址公司简介1华东区福州公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。2WWWW科技YX公司华南区深圳福田区公司技术'
    })
    .first()
    .click()

  await expect(page.getByText('触发关闭编辑事件')).toBeVisible()
})
