import { test, expect } from '@playwright/test'

test('失焦事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/input/event-blur')
  await page.getByPlaceholder('先获取焦点后再失去焦点').click()
  await page.locator('.rel').click()
  const box = page.locator('.tiny-modal__box')
  await expect(box).toBeVisible()
})
