import { test, expect } from '@playwright/test'

test('测试分页基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('pager#basic-usage')

  const preview = page.locator('#preview')
  const pager = preview.locator('.tiny-pager')
  const getPrev = (parent) => parent.locator('.tiny-pager__btn-prev')
  const getNext = (parent) => parent.locator('.tiny-pager__btn-next')
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

  // 第二个分页组件
  const secondPrev = getPrev(pager.nth(1))
  const secondNext = getNext(pager.nth(1))
  const secondPager = pager.nth(1)
  await expect(secondPager.locator('li').first()).toHaveClass(isActive)
  await expect(secondPager.locator('li').getByText('7')).not.toBeVisible()
  await expect(secondPrev).toBeDisabled()
  await expect(secondNext).not.toBeDisabled()
  await secondPager.locator('li').getByText('10').click()
  await expect(secondPager.locator('li').getByText('10')).toHaveClass(isActive)
  await expect(secondPager.locator('li').getByText('7')).toBeVisible()
  await expect(secondPrev).not.toBeDisabled()
  await expect(secondNext).toBeDisabled()
  await secondPrev.click()
  await expect(secondPager.locator('li').getByText('9')).toHaveClass(isActive)
  await expect(secondPrev).not.toBeDisabled()
  await expect(secondNext).not.toBeDisabled()
})
