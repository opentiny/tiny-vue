import { test, expect } from '@playwright/test'

test('自定义属性分组', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('search-box#group-key')

  await page.getByRole('textbox', { name: '选择属性筛选，或输入关键字搜索' }).click()
  const titles = page.locator('.tvp-search-box__filter-type')
  const texts = ['潜在匹配项', '属性类型', '前端搜索', '后端搜索']

  await expect(titles).toHaveText(texts)
})
