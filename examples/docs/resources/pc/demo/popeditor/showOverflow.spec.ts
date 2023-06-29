import { test, expect } from '@playwright/test'

test('PopEditor 数据超出隐藏', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/pop-editor/showOverflow')

  const preview = page.locator('#preview')
  const textBox = preview.getByRole('textbox')
  const dialogBox = page.locator('.tiny-dialog-box')
  const overflowDate = dialogBox.getByRole('cell', { name: 'GFD科技YX公司GFD科技YX公司GFD科技YX公司GFD科技YX公司GFD科技YX公司GFD科技YX公司GFD科技YX公司GFD科技YX公司GFD科技YX公司GFD科技YX公司GFD科技YX公司GFD科技YX公司GFD科技YX公司' })
  const tooltip = page.getByRole('tooltip', { name: 'GFD科技YX公司GFD科技YX公司GFD科技YX公司GFD科技YX公司GFD科技YX公司GFD科技YX公司GFD科技YX公司GFD科技YX公司GFD科技YX公司GFD科技YX公司GFD科技YX公司GFD科技YX公司GFD科技YX公司' })
  
  // 数据超出隐藏，tooltips显示全部内容
  await textBox.click()
  await expect(dialogBox).toBeVisible()
  await expect(tooltip).not.toBeVisible()
  await overflowDate.hover()
  await expect(tooltip).toBeVisible()

})
