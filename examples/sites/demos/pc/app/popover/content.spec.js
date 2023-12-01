import { test, expect } from '@playwright/test'

test('添加内容', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popover#content')

  let button = page.getByRole('button', { name: '通过插槽' })
  let redSpan = page.getByText('tooltip', { name: '红色的' })

  await button.click()
  await expect(redSpan).toBeVisible()
})
