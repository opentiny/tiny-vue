import { test, expect } from '@playwright/test'

test('PopEditor 弹出窗筛选条件支持可清空', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/pop-editor/clearable')

  const preview = page.locator('#preview')
  const textBox = preview.getByRole('textbox')
  const dialogBox = page.locator('.tiny-dialog-box')
  const company = dialogBox.getByRole('listitem').filter({ hasText: '公司名' }).getByRole('textbox')
  const companyDel = dialogBox.locator('.tiny-popeditor__search-input > .tiny-input__suffix').nth(0)
  const city = dialogBox.getByRole('listitem').filter({ hasText: '城市' }).getByRole('textbox')
  const cityDel = dialogBox.locator('.tiny-popeditor__search-input > .tiny-input__suffix').nth(1)

  // 弹出框搜索框支持清空
  await textBox.click()
  await company.fill('111')
  await expect(companyDel).toBeVisible()
  await companyDel.click()
  await expect(company).toHaveValue('')

  await city.fill('222')
  await expect(cityDel).toBeVisible()
  await companyDel.click()
  await expect(city).toHaveValue('')
})
