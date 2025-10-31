import { test, expect } from '@playwright/test'

test('事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('search-box#events')

  const container = page.locator('#events')
  const tags = page.locator('.tvp-search-box__tag')
  const texts = ['changeEvent: ', 'changeEvent: ', 'searchEvent: ', 'changeEvent: ', 'onClear']
  let i = 0

  page.on('console', (msg) => {
    if (msg.type() === 'log') {
      expect(msg.text()).toContain(texts[i])
    }
    i++
  })

  await page.getByRole('textbox', { name: '选择属性筛选，或输入关键字搜索' }).click()
  await page.locator('li').filter({ hasText: '名称' }).locator('div').nth(1).click()
  await page.locator('div').filter({ hasText: 'vpc-1' }).nth(3).click()
  await expect(tags).toHaveCount(1)
  await expect(tags.last()).toHaveText('名称 : vpc-1')
  await expect(tags.last()).toHaveAttribute('title', '名称 : vpc-1')

  await page.getByRole('textbox', { name: '添加筛选条件' }).click()
  await page.locator('div').filter({ hasText: '状态' }).nth(2).click()
  await page.getByText('运行中').click()
  await page.getByRole('button', { name: '确认' }).click()
  await expect(tags.last()).toHaveText('状态 : 运行中')

  await container.getByRole('textbox', { name: '添加筛选条件' }).press('Enter')
  await container.locator('.tvp-search-box__input-close').click()
})
