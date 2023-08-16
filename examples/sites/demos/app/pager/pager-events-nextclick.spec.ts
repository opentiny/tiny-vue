import { test, expect } from '@playwright/test'

test('分页事件next-click', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/pager/pager-events-nextclick')

  const preview = page.locator('#preview')
  const pager = preview.locator('.tiny-pager')
  const prev = pager.locator('.tiny-pager__btn-prev')
  const next = pager.locator('.tiny-pager__btn-next')
  const pageItem = pager.locator('.tiny-pager__pages li')
  const modalBox = page.locator('.tiny-modal__box').filter({ hasText: 'next-click 事件' })

  await pageItem.last().click()
  await expect(modalBox).not.toBeVisible()
  await prev.click()
  await expect(modalBox).not.toBeVisible()
  await next.click()
  await expect(modalBox).toBeVisible()
})
