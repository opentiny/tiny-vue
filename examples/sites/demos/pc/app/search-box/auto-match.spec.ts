import { test, expect } from '@playwright/test'

test('自动匹配', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('search-box#auto-match')

  const container = page.locator('#auto-match')
  const tags = page.locator('.tvp-search-box__tag')
  const emptyEl = container.getByRole('textbox', { name: '选择属性筛选，或输入关键字搜索' })
  await emptyEl.fill('测试')
  await emptyEl.press('Enter')
  await expect(tags).toHaveCount(1)
  await expect(tags.last()).toHaveText('关键字 : 测试')
  await expect(tags.last()).toHaveAttribute('title', '关键字 : 测试')

  await emptyEl.fill('a-b-c-d-e')
  await emptyEl.press('Enter')
  await expect(tags).toHaveCount(2)
  await expect(tags.last()).toHaveText('ID : a-b-c-d-e')
  await expect(tags.last()).toHaveAttribute('title', 'ID : a-b-c-d-e')

  await emptyEl.fill('1.2.3')
  await emptyEl.press('Enter')
  await expect(tags).toHaveCount(3)
  await expect(tags.last()).toHaveText('规格 : 1.2.3')
  await expect(tags.last()).toHaveAttribute('title', '规格 : 1.2.3')

  await emptyEl.fill('169.123.1.2')
  await emptyEl.press('Enter')
  await expect(tags).toHaveCount(4)
  await expect(tags.last()).toHaveText('私有IP地址 : 169.123.1.2')
  await expect(tags.last()).toHaveAttribute('title', '私有IP地址 : 169.123.1.2')
})
