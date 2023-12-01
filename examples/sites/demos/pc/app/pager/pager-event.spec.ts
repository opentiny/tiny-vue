import { test, expect } from '@playwright/test'

test('事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('pager#pager-event')

  const demo = page.locator('#pager-event')
  const pager = demo.locator('.tiny-pager')
  const modalBox = page.locator('.tiny-modal__box')

  // 当前所在页改变
  await pager.first().locator('.tiny-pager__pages li').last().click()
  await expect(modalBox.getByText('current-change 事件，当前页: 10')).toBeVisible()

  // 每页展示条目数改变
  const sizeChange = pager.nth(2).locator('.tiny-pager__sizes')
  const sizeSelect = page.locator('.tiny-pager__selector')

  await sizeChange.click()
  await sizeSelect.nth(3).getByText('20').click()
  await expect(modalBox.getByText('size-change 事件，每页条目数: 20')).toBeVisible()

  // 上一页、下一页
  await pager.nth(3).locator('.tiny-pager__btn-next').click()
  await expect(modalBox.getByText('next-click 事件，当前页: 2')).toBeVisible()
  await pager.nth(3).locator('.tiny-pager__btn-prev').click()
  await expect(modalBox.getByText('prev-click 事件，当前页: 1')).toBeVisible()

  // 每页条目数和当前页同时改变
  await pager.nth(5).locator('.tiny-pager__sizes').click()
  await sizeSelect.nth(3).getByText('20').click()
  await expect(modalBox.getByText('模拟后台拉取数据')).toBeVisible()
  await expect(modalBox.getByText('模拟后台拉取数据')).toHaveCount(1)
})
