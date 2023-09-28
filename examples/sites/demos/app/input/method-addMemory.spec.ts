import { test, expect } from '@playwright/test'

test('记忆历史输入', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/input/method-addMemory')
  await page.getByPlaceholder('请输入内容', { exact: true }).click()
  await page.getByPlaceholder('请输入内容', { exact: true }).fill('1234')
  await page.getByRole('heading', { name: 'input:1234' }).click()
  await page
    .locator('div')
    .filter({ hasText: /^1234$/ })
    .nth(2)
    .click()
  await page.getByPlaceholder('请输入内容', { exact: true }).click()
  await page.getByPlaceholder('请输入内容', { exact: true }).fill('')
  const box = page.locator('#preview').getByText('1234')
  await expect(box).toBeVisible()
})
