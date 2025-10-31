import { test, expect } from '@playwright/test'

test('基础用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('search-box#basic-usage')

  const attrEls = page.locator('.tvp-search-box__first-panel > li .tiny-dropdown-item__label > span').first()
  const tags = page.locator('.tvp-search-box__tag')

  await page.getByRole('textbox', { name: '选择属性筛选，或输入关键字搜索' }).click()
  await expect(attrEls).toHaveText('名称')
  await expect(attrEls).toHaveAttribute('title', '名称')

  await page
    .locator('li')
    .filter({ hasText: /^名称$/ })
    .locator('div')
    .first()
    .click()

  await expect(page.locator('form div').filter({ hasText: '名称 :' })).toHaveCount(1)
  await page.locator('li').filter({ hasText: 'obs-2' }).click()
  await expect(tags).toHaveCount(1)
  await expect(tags.last()).toHaveText('名称 : obs-2')
  await expect(tags.last()).toHaveAttribute('title', '名称 : obs-2')

  await page.getByRole('textbox', { name: '添加筛选条件' }).click()
  await page.locator('div').filter({ hasText: '名称1' }).nth(2).click()
  await page.getByRole('textbox', { name: '添加筛选条件' }).fill('666')
  await page.getByRole('textbox', { name: '添加筛选条件' }).press('Enter')
  await expect(tags).toHaveCount(2)
  await expect(tags.last()).toHaveText('名称1 : 666')
  await expect(tags.last()).toHaveAttribute('title', '名称1 : 666')

  await page.getByRole('textbox', { name: '添加筛选条件' }).fill('111')
  await page.getByRole('textbox', { name: '添加筛选条件' }).press('Enter')
  await expect(tags).toHaveCount(3)
  await expect(tags.last()).toHaveText('关键字 : 111')
  await expect(tags.last()).toHaveAttribute('title', '关键字 : 111')

  await page.getByRole('textbox', { name: '添加筛选条件' }).click()
  await page.locator('div').filter({ hasText: '可用地区' }).nth(2).click()
  await page.locator('label').filter({ hasText: '全选' }).locator('span').nth(1).click()
  await page.getByRole('button', { name: '确认' }).click()
  await expect(tags.nth(3)).toHaveText('可用地区 : 华南区')
  await expect(tags.nth(4)).toHaveText('可用地区 : 华北区')
  await expect(tags.nth(5)).toHaveText('可用地区 : 西北区')
  await expect(tags.nth(6)).toHaveText('可用地区 : 西南区')

  await page.getByRole('textbox', { name: '添加筛选条件' }).click()
  await page
    .locator('div')
    .filter({ hasText: /^可用地区$/ })
    .nth(1)
    .click()
  await page.getByTitle('华北区', { exact: true }).click()
  await page.getByTitle('西北区', { exact: true }).click()
  await page.getByTitle('西南区', { exact: true }).click()
  await page.getByRole('button', { name: '确认' }).click()
  await expect(tags.last()).toHaveText('可用地区 : 华南区')
  await expect(tags.last()).toHaveAttribute('title', '可用地区 : 华南区')

  await page.getByRole('textbox', { name: '添加筛选条件' }).click()
  await page.locator('div').filter({ hasText: '大小' }).nth(2).click()
  await page.getByRole('spinbutton').first().fill('5')
  await page.getByRole('button', { name: '确认' }).click()
  await expect(tags.last()).toHaveText('大小(GB) : ≥5')

  await page.getByRole('textbox', { name: '添加筛选条件' }).click()
  await page
    .locator('div')
    .filter({ hasText: /^大小$/ })
    .locator('visible=true')
    .first()
    .click()
  await page.getByRole('spinbutton').first().fill('5')
  await page.getByRole('spinbutton').nth(1).fill('4')
  await page.getByText('最大值必须大于等于最小值，或者为空').isVisible
  await page.getByRole('button', { name: '确认' }).click()
  await page.getByText('暂无数据匹配...潜在匹配项属性类型名称名称1').isVisible
  await expect(tags.last()).toHaveText('大小(GB) : ≥5')
  await page.getByRole('spinbutton').nth(1).fill('5')
  await page.getByRole('button', { name: '确认' }).click()
  await expect(tags.last()).toHaveText('大小(GB) : 5-5')

  await page.getByRole('textbox', { name: '添加筛选条件' }).click()
  await page
    .locator('div')
    .filter({ hasText: /^大小$/ })
    .nth(1)
    .click()
  await page.getByRole('spinbutton').first().fill('5')
  await page.getByRole('spinbutton').nth(1).fill('10')
  await page.getByRole('button', { name: '确认' }).click()
  await expect(tags.last()).toHaveText('大小(GB) : 5-10')

  await page.getByRole('textbox', { name: '添加筛选条件' }).click()
  await page
    .locator('div')
    .filter({ hasText: /^大小$/ })
    .nth(1)
    .click()
  await page.getByRole('spinbutton').nth(1).fill('10')
  await page.getByRole('spinbutton').first().fill('')
  await page.getByRole('button', { name: '确认' }).click()
  await expect(tags.last()).toHaveText('大小(GB) : ≤10')

  await page.getByRole('textbox', { name: '添加筛选条件' }).click()
  await page
    .locator('div')
    .filter({ hasText: /^大小$/ })
    .nth(1)
    .click()
  await page.getByRole('spinbutton').first().fill('')
  await page.getByRole('spinbutton').nth(1).fill('')
  await page.getByText('请至少输入一个值最小值(GB) 最大值(GB').isVisible
  await page.getByRole('button', { name: '确认' }).click()
  await expect(tags.last()).toHaveText('大小(GB) : ≤10')
  await page.getByRole('button', { name: '取消' }).click()

  await page.getByRole('textbox', { name: '添加筛选条件' }).click()
  await page.getByRole('textbox', { name: '添加筛选条件' }).click()
  await page
    .locator('div')
    .filter({ hasText: /^日期$/ })
    .nth(1)
    .click()
  await page.getByRole('button', { name: '确认' }).click()
  await expect(tags.last()).toHaveText('日期 : ≥2024/04/10')

  await page.getByRole('textbox', { name: '添加筛选条件' }).click()
  await page.locator('div').filter({ hasText: '时间日期' }).nth(2).click()
  await page.getByRole('button', { name: '确认' }).click()
  await expect(tags.last()).toHaveText('时间日期 : 2024/04/10 10:23:45-2024/06/25 10:25:46')

  await page.getByRole('textbox', { name: '添加筛选条件' }).click()
  await page
    .locator('div')
    .filter({ hasText: /^标签$/ })
    .nth(1)
    .click()
  await page.locator('div').filter({ hasText: 'bbb' }).nth(3).click()
  await page.locator('div').filter({ hasText: 'hhh' }).nth(3).click()
  await expect(tags.last()).toHaveText('标签 : bbb=hhh')

  await page.locator('.tiny-svg.tvp-search-box__input-close').click()
  await expect(tags).toHaveCount(0)
})
