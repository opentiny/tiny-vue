import { test, expect } from '@playwright/test'

test('PopEditor 表单中使用并开启表单校验', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popeditor#condition-form')

  const preview = page.locator('#preview')
  const textBox = preview.locator('.tiny-input').nth(3)
  const textBoxInput = textBox.locator('input')
  const del = textBox.locator('svg')
  const dialogBox = page.locator('.tiny-dialog-box')
  const confirmBtn = dialogBox.getByRole('button', { name: '确 认' })
  const dataItem = dialogBox.getByRole('row', { name: '1 GFD科技YX公司 福建 福州' }).locator('span')
  const tooltip = page.getByRole('tooltip', { name: '必填' })

  await textBox.click()
  await dataItem.click()
  await confirmBtn.click()
  await expect(dialogBox).not.toBeVisible()
  await expect(textBoxInput).toHaveValue('GFD科技YX公司')

  await del.click()
  await expect(textBoxInput).toHaveValue('')
  await expect(tooltip).toBeVisible()
})
