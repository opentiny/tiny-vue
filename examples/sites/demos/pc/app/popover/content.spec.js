import { test, expect } from '@playwright/test'

test('添加内容', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popover#content')

  let button = page.getByRole('button', { name: '通过属性' })
  let span = page.getByText('tooltip', { name: '这是一段内容' })
  let button1 = page.getByRole('button', { name: '通过插槽' })
  let redSpan1 = page.getByText('tooltip', { name: '红色的' })

  await button.click()
  await expect(span).toBeVisible()
  await button1.click()
  await expect(redSpan1).toBeVisible()
})
