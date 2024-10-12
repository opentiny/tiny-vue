import { test, expect } from '@playwright/test'

test('测试Alpha', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('color-picker#enable-alpha')
  await page.locator('.tiny-color-picker__inner').click()
  await page.locator('.black').click()
  await page.getByRole('button', { name: '取消' }).click()
  await page.getByText('用户选择了取消').click()
  await page.locator('.tiny-color-picker__inner').click()
  await page.locator('.black').click()
  await page.getByRole('button', { name: '选择' }).click()
  await page.getByText('#804040FF').click()
})
