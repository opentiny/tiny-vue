import { test, expect } from '@playwright/test'

test('测试是否有默认聚焦', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('button#autofocus')
  await page.getByRole('button', { name: '默认按钮' }).click()
  await page.getByRole('button', { name: '默认聚焦' }).click()
  const button = await page.getByRole('button', { name: '默认聚焦' })

  // in React, auto focus is re-implemented without HTML, so we assert active element instead of HTML attribute
  expect(
    page.evaluate(
      (element) => {
        return document.activeElement === element
      },
      await button.elementHandle()
    )
  ).toBeTruthy()
})
