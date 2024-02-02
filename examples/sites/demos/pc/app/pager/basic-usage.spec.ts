import { test, expect } from '@playwright/test'

test('测试分页基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('pager#basic-usage')

  const demo = page.locator('#basic-usage')
  const pager = demo.locator('.tiny-pager')
  const getPrev = (parent: Locator) => parent.locator('.tiny-pager__btn-prev')
  const getNext = (parent: Locator) => parent.locator('.tiny-pager__btn-next')
  const isActive = /is-active/

  // 第一个分页组件
  const firstPrev = getPrev(pager.first())
  const firstNext = getNext(pager.first())
  const firstPager = pager.first()
  await expect(firstPager.locator('li').getByText('1')).toHaveClass(isActive)
  await expect(firstPrev).toBeDisabled()
  await expect(firstNext).not.toBeDisabled()
  await firstPager.locator('li').getByText('5').click()
  await expect(firstPager.locator('li').getByText('5')).toHaveClass(isActive)
  await expect(firstPrev).not.toBeDisabled()
  await expect(firstNext).toBeDisabled()
  await firstPrev.click()
  await expect(firstPager.locator('li').getByText('4')).toHaveClass(isActive)
  await expect(firstPrev).not.toBeDisabled()
  await expect(firstNext).not.toBeDisabled()
})
