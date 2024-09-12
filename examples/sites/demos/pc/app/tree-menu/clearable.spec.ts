import type { Page } from '@playwright/test'
import { test, expect } from '@playwright/test'

const getIcon = (page: Page) => page.locator('#clearable').getByRole('img').nth(1)

test('搜索框可清除', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())

  await page.goto('tree-menu#clearable')

  await page.locator('#clearable').getByRole('textbox', { name: '输入关键字搜索' }).click()
  await page.locator('#clearable').getByRole('textbox', { name: '输入关键字搜索' }).click()
  await page.locator('#clearable').getByRole('textbox', { name: '输入关键字搜索' }).fill('123')
  await expect(page.getByText('暂无数据')).toBeVisible()
  const icon = getIcon(page)
  await icon.click()
  const val = await page.locator('#clearable').getByRole('textbox', { name: '输入关键字搜索' }).inputValue()
  expect(val).toBe('')
  await expect(page.getByText('暂无数据')).not.toBeVisible()
})
