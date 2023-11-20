import { test, expect } from '@playwright/test'

test('触发方式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popover#trigger-mode')

  let button1 = page.getByRole('button', { name: 'hover 激活' })
  let button2 = page.getByRole('button', { name: 'click 激活' })
  let button3 = page.getByRole('button', { name: 'focus 激活' })
  let button4 = page.getByRole('button', { name: '手动激活' })
  let pop1 = page.getByRole('tooltip', { name: /hover 激活/ })
  let pop2 = page.getByRole('tooltip', { name: /click 激活/ })
  let pop3 = page.getByRole('tooltip', { name: /focus 激活/ })
  let pop4 = page.getByRole('tooltip', { name: /手动激活/ })

  await button1.hover()
  await expect(pop1).toBeVisible()
  await page.waitForTimeout(100)

  await button2.click()
  await expect(pop2).toBeVisible()
  await page.waitForTimeout(100)

  await page.keyboard.press('Tab')
  await expect(pop3).toBeVisible()
  await page.waitForTimeout(100)

  await button4.click()
  await expect(pop4).toBeVisible()
  await page.waitForTimeout(100)
})
