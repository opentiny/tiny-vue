import { test, expect } from '@playwright/test'

test('自定义默认搜索项', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('search-box#settings')

  const tags = page.locator('.tvp-search-box__tag')

  await page.getByRole('textbox', { name: '选择属性筛选，或输入关键字搜索' }).fill('东北区')
  await page.getByRole('textbox', { name: '选择属性筛选，或输入关键字搜索' }).press('Enter')
  await expect(tags.last()).toHaveText('可用地区 : 东北区')
  await expect(tags.last()).toHaveAttribute('title', '可用地区 : 东北区')
})
