import { test, expect } from '@playwright/test'

test('Grid-编辑器-内置编辑器', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-editor#grid_Example-gridEdit-inner-editor')
  await page.getByText('GFD科技YX公司').first().click()
  const input = page
    .getByRole('row', {
      name: '1 800 华东区 2014-04-30 00:56:00 公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
    })
    .getByRole('textbox')

  // 内置编辑器
  await expect(input).toHaveClass(/tiny-grid-default-input/)
})
