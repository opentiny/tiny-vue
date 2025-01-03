import { test, expect } from '@playwright/test'

test('PopEditor 数据超出隐藏', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popeditor#show-overflow')

  const preview = page.locator('#show-overflow')
  const textBox = preview.getByRole('textbox')
  const dialogBox = page.locator('.tiny-dialog-box')
  const overflowDate = dialogBox.getByRole('cell', {
    name: 'GFD 科技 YX 公司 GFD 科技 YX 公司 GFD 科技 YX 公司 GFD 科技 YX 公司 GFD 科技 YX 公司 GFD 科技 YX 公司 GFD 科技 YX 公司 GFD 科技 YX 公司 GFD 科技 YX 公司 GFD 科技 YX 公司 GFD 科技 YX 公司 GFD 科技 YX 公司 GFD 科技 YX 公司'
  })
  const tooltip = page.getByRole('tooltip', { name: 'GFD 科技 YX 公司 GFD 科技 YX 公司 GFD 科技 YX 公司' })

  // 数据超出隐藏，tooltips 显示全部内容
  await textBox.click()
  await expect(dialogBox).toBeVisible()
  await expect(tooltip).not.toBeVisible()
  await overflowDate.hover()
  await expect(tooltip).toBeVisible()
})
