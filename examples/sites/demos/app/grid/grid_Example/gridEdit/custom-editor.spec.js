import { test, expect } from '@playwright/test'

test('Grid-编辑器-自定义编辑器', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/grid-editor/grid_Example-gridEdit-custom-editor')
  await page.getByText('许生').first().click()
  const input = page
    .getByRole('row', {
      name: '1 GFD科技YX公司 2014-04-30 00:56:00 800 公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
    })
    .getByRole('textbox')

  // 自定义编辑器
  await expect(input).toHaveClass(/grid-editor-item/)
})
