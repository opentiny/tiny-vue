import { test, expect } from '@playwright/test'

test('自定义上下页按钮文本', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('pager#custom-next-prev-text')

  const preview = page.locator('#preview')
  const pager = preview.locator('.tiny-pager')
  const prev = pager.locator('.tiny-pager__btn-prev')
  const next = pager.locator('.tiny-pager__btn-next')

  await expect(prev).toHaveText('上一页')
  await expect(next).toHaveText('下一页')
})
