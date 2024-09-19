import { test, expect } from '@playwright/test'

test('文本类型错误提示位置', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('form#message-type')

  const demo = page.locator('#message-type')
  const form = demo.locator('.tiny-form')
  const formItem = form.locator('.tiny-form-item')
  const getBtnByText = (text: string) => demo.locator('.tiny-button-group').getByRole('button', { name: text })
  const firstItemError = formItem.first().locator('.tiny-form-item__error')

  await demo.getByRole('button', { name: '提交' }).click()
  await getBtnByText('默认').click()
  await expect(firstItemError).toHaveCSS('display', 'flex')
  await getBtnByText('行内').click()
  await expect(firstItemError).toHaveCSS('display', 'inline-block')
  await getBtnByText('块级').click()
  await expect(firstItemError).toHaveCSS('display', 'flex')
})
