import { test, expect } from '@playwright/test'

test('父子级不相关联', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('cascader#check-strictly')
  await page.getByRole('textbox', { name: '请选择' }).click()
  await page.getByRole('menuitem', { name: '开发' }).getByRole('radio').click()
  await page.getByRole('textbox', { name: '请选择' }).click()
  const light = page.getByRole('menuitem', { name: '开发' }).getByRole('radio')
  await expect(light).toHaveClass('tiny-radio is-checked')
})
