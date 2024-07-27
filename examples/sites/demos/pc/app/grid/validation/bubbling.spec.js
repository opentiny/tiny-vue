import { test, expect } from '@playwright/test'

test('校验提示跟随单元格移动', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-validation#validation-bubbling')
  await page.getByText('华东区').first().click()
  await page
    .getByRole('row', {
      name: '1 GFD科技有限公司 福州 公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
    })
    .getByRole('cell')
    .nth(4)
    .click()
  await page
    .getByRole('row', {
      name: '1 GFD科技有限公司 福州 公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
    })
    .getByRole('textbox')
    .fill('x')
  const { y: top } = await page.getByRole('tooltip', { name: '区域格式不正确' }).boundingBox()
  const scrollDom = page.getByRole('cell', { name: 'YHN科技有限公司' })
  await scrollDom.scrollIntoViewIfNeeded()
  await page.waitForTimeout(200)
  const { y: topLater } = await page.getByRole('tooltip', { name: '区域格式不正确' }).boundingBox()
  await expect(top).toBeGreaterThan(topLater)
})
