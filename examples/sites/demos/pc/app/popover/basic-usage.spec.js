import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popover#basic-usage')

  let button = page.getByRole('button', { name: '点击我提示' })
  let pop = page.getByRole('tooltip', { name: /这是一段内容/ })
  let title = pop.locator('.tiny-popover__title')

  await button.click()
  await expect(pop).toBeVisible()
  await expect(pop).toHaveCSS('width', '200px')
  await expect(title).toHaveText('标题')
})
