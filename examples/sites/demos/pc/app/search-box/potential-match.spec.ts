import { test, expect } from '@playwright/test'

test('潜在匹配项', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('search-box#potential-options')

  const tags = page.locator('.tvp-search-box__tag')

  await page.getByRole('textbox', { name: '选择属性筛选，或输入关键字搜索' }).fill('66666')
  await page.getByText('潜在匹配项名称： 66666可用区： 66666').isVisible

  await page
    .locator('div')
    .filter({ hasText: /^名称： 66666$/ })
    .first()
    .click()
  await expect(tags.last()).toHaveText('名称 : 66666')
})
