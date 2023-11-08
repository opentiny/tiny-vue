import { test, expect } from '@playwright/test'

test('单选项配置', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-operation-column#tiny-first-menu-radio-config')
  const input = page
    .getByRole('row', {
      name: '3 华南区 RFV有限责任公司 华南区 中山市 公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
    })
    .locator('label input')

  await expect(input).toBeChecked()
  const disabledInput = page
    .getByRole('row', {
      name: '4 华北区 TGBYX公司 华北区 梅州 公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
    })
    .locator('label input')

  await expect(disabledInput).toBeDisabled()
})
