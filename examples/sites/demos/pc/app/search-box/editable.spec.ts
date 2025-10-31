import { test, expect } from '@playwright/test'

test('可编辑', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('search-box#editable')

  const tags = page.locator('.tvp-search-box__tag')
  await page.getByText('名称(有操作符) = ecs-1').click()
  await page.getByRole('textbox', { name: '请选择' }).nth(1).click()
  await page.getByRole('list').getByText('!=').click()
  await page.getByRole('button', { name: '确认' }).click()
  await expect(tags.nth(0)).toHaveText('名称(有操作符) != ecs-1')

  await page.getByText('关键字 : 1231212').click()
  await page.getByRole('textbox').nth(3).fill('555')
  await page.getByRole('button', { name: '确认' }).click()
  await expect(tags.nth(1)).toHaveText('关键字 : 555')

  await page.getByText('大小 : 4-6').click()
  await page.getByRole('spinbutton').nth(1).fill('3')
  await page.getByRole('button', { name: '确认' }).click()
  await page.getByRole('spinbutton').nth(1).fill('10')
  await page.getByRole('button', { name: '确认' }).click()
  await expect(tags.nth(2)).toHaveText('大小(GB) : 4-10')

  await page.getByText('可用地区1 -> 华南区1').click()
  await page.getByRole('textbox', { name: '请选择' }).nth(1).click()
  await page.getByRole('list').getByText('#').click()
  await page.getByRole('textbox', { name: '请选择' }).nth(2).click()
  await page.getByText('华北区').click()
  await page.getByRole('button', { name: '确认' }).click()
  await expect(tags.nth(3)).toHaveText('可用地区1 # 华北区1')

  await page.getByText('日期 : 2020/06/10-2020/06/25').click()
  await page.getByPlaceholder('请选择').nth(3).click()
  await page.getByRole('list').locator('li').filter({ hasText: '@' }).click()
  await page.getByRole('button', { name: '确认' }).click()
  await expect(tags.nth(4)).toHaveText('日期 @ 2020/06/10-2020/06/25')

  await page.getByText('时间日期 : 2020/06/10 10:23:45-2020/06/25 10:25:46').click()
  await page.getByRole('textbox', { name: '2020/06/10 10:23:45' }).click()
  await page.getByRole('cell', { name: '12' }).locator('span').click()
  await page.getByRole('button', { name: '确定' }).click()
  await page.getByRole('button', { name: '确认' }).click()
  await expect(tags.nth(5)).toHaveText('时间日期 : 2020/06/12 10:23:45-2020/06/25 10:25:46')

  await page.getByText('数字 : 1-2').click()
  await page.getByRole('spinbutton').first().fill('5')
  await page.getByRole('spinbutton').nth(1).fill('20')
  await page.getByRole('button', { name: '确认' }).click()
  await expect(tags.nth(6)).toHaveText('数字 : 5-20')
})
