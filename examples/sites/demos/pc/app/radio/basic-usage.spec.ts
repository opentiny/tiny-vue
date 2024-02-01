import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('radio#basic-usage')

  const demo = page.locator('#basic-usage')
  const radio1 = demo.locator('.tiny-radio').nth(0)
  const radio2 = demo.locator('.tiny-radio').nth(1)
  await expect(radio1).toBeVisible()
  await expect(radio2).toBeVisible()
  await expect(radio1).toHaveClass('tiny-radio is-checked')

  const afterElement = await page.evaluate(() => {
    const radioAfter = document.querySelector('.tiny-radio.is-checked .tiny-radio__inner')
    if (radioAfter) {
      const { backgroundColor } = window.getComputedStyle(radioAfter, '::after')
      return { backgroundColor }
    }
    return {}
  })

  expect(afterElement.backgroundColor).toBe('rgb(94, 124, 224)')
})
