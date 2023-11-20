import { test, expect } from '@playwright/test'

test('编辑器插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-slot#slot-editor-slot')
  await page.getByText('WWWW科技YX公司').click()
  await page.getByRole('textbox', { name: '请输入内容', exact: true }).click()
  await page.getByRole('textbox', { name: '请输入内容', exact: true }).fill('WWWWsdfd科技YX公司')
  await page
    .locator('div')
    .filter({ hasText: /^编辑器插槽$/ })
    .first()
    .click()
  await expect(page.getByRole('cell', { name: 'WWWWsdfd科技YX公司' })).toBeVisible()
})
