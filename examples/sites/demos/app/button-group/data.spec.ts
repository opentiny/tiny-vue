import { test, expect } from '@playwright/test'

test('测试按钮组数据', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/button-group/data')
  await page.getByRole('button', { name: 'Button1' }).click()
  await expect(page.getByRole('button', { name: 'Button1' })).toHaveText('Button1')
  await page.getByRole('button', { name: 'Button2' }).click()
  await expect(page.getByRole('button', { name: 'Button2' })).toHaveText('Button2')
  await page.getByRole('button', { name: 'Button3' }).click()
  await expect(page.getByRole('button', { name: 'Button3' })).toHaveText('Button3')
})
