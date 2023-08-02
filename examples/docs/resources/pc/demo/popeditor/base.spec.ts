import { test, expect } from '@playwright/test'

test('PopEditor 基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/pop-editor/base')

  const preview = page.locator('#preview')
  const textBox = preview.getByPlaceholder('请选择')
  const del = preview.locator('span').nth(2)
  const dialogBox = page.locator('.tiny-dialog-box')
  const confirmBtn = dialogBox.getByRole('button', { name: '确 认' })
  const cancelBtn = dialogBox.getByRole('button', { name: '取 消' })
  const dataItem = dialogBox.getByRole('row', { name: '1 GFD科技YX公司GFD科技YX公司GFD科技YX公司GFD科技YX公司GFD科技YX公司GFD科技YX公司GFD科技YX公司 福建 福州' }).locator('span')

  // 点击文本框，编辑弹出框弹出,数据渲染
  await expect(textBox).toBeVisible()
  await textBox.click()
  await expect(dialogBox).toBeVisible()
  await expect(dialogBox.locator('.tiny-grid__wrapper')).toBeVisible()

  // 选择数据后点击确认，弹出框消失，文本框填充选中的数据
  await dataItem.click()
  await confirmBtn.click()
  await expect(dialogBox).not.toBeVisible()
  await expect(textBox).toHaveValue('GFD科技YX公司GFD科技YX公司GFD科技YX公司GFD科技YX公司GFD科技YX公司GFD科技YX公司GFD科技YX公司')

  // 点击删除图标，清空文本框
  await del.click()
  await expect(textBox).toHaveValue('')
  // 编辑弹出框弹出后点击取消按钮，弹出框消失
  await textBox.click()
  await expect(dialogBox).toBeVisible()
  await cancelBtn.click()
  await expect(dialogBox).not.toBeVisible()
})
