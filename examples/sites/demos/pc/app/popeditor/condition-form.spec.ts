import { test, expect } from '@playwright/test'

test('PopEditor 表单中使用并开启表单校验', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popeditor#condition-form')

  const preview = page.locator('#condition-form')
  const textBox = preview.getByRole('textbox').nth(2)
  const textBoxInput1 = page.getByText('15').nth(1)
  const textBoxInput2 = page.getByText('18').nth(1)
  const dialogBox = page.locator('div').getByRole('textbox').nth(5)
  const del = page
    .locator('div')
    .filter({ hasText: /^文本$/ })
    .getByRole('img')
  const confirmBtn = page.getByRole('button', { name: '确 认' })
  const dataItem = page.getByRole('row', { name: 'GFD科技YX公司 福建 福州' }).locator('.tiny-grid-radio.size__mini')
  const tooltip = page.getByRole('tooltip', { name: '必填' })

  await textBox.click()
  await textBoxInput1.click()
  await textBoxInput2.click()
  await dialogBox.click()
  await dataItem.click()
  await confirmBtn.click()
  await expect(dialogBox).toHaveValue('GFD科技YX公司')

  await del.click()
  await expect(dialogBox).toHaveValue('')
  await expect(tooltip).toBeVisible()
})
