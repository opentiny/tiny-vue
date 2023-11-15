import { test, expect } from '@playwright/test'

test('自定义编辑校验规则', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-edit#tiny-first-menu-editor-is-salid-always')
  await page
    .getByRole('row', {
      name: '2 华南区 深圳福田区 公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
    })
    .getByRole('textbox')
    .click()
  await expect(page.getByRole('tooltip', { name: '名称必填' })).toBeVisible()
})
