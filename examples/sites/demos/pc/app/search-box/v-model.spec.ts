import { test, expect } from '@playwright/test'

test('默认包含筛选项', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('search-box#v-model')

  const tags = page.locator('.tvp-search-box__tag')
  await expect(tags.nth(0)).toHaveText('个人IP地址 : 192.168.66.88')
  await expect(tags.nth(1)).toHaveText('名称 : ecs-1')

  await page.getByRole('textbox', { name: '添加筛选条件' }).fill('192.168.1.25')
  await page.getByRole('textbox', { name: '添加筛选条件' }).press('Enter')
  await expect(tags.last()).toHaveText('个人IP地址 : 192.168.1.25')
})
