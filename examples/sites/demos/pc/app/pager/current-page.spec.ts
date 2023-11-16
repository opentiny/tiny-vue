import { test, expect } from '@playwright/test'

test('测试设置当前页', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('pager#current-page')

  const preview = page.locator('#preview')
  const pager = preview.locator('.tiny-pager')
  const getPrev = (parent) => parent.locator('.tiny-pager__btn-prev')
  const getNext = (parent) => parent.locator('.tiny-pager__btn-next')
  const isActive = /is-active/
  const prev = getPrev(pager.first())
  const next = getNext(pager.first())
  await expect(pager.locator('li').getByText('2')).toHaveClass(isActive)
  await expect(prev).not.toBeDisabled()
  await expect(next).not.toBeDisabled()
  await pager.locator('li').getByText('5').click()
  await expect(pager.locator('li').getByText('5')).toHaveClass(isActive)
  await expect(prev).not.toBeDisabled()
  await expect(next).toBeDisabled()
  await pager.locator('li').getByText('1').click()
  await expect(pager.locator('li').getByText('1')).toHaveClass(isActive)
  await expect(prev).toBeDisabled()
  await expect(next).not.toBeDisabled()
})
