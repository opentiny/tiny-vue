import { test, expect } from '@playwright/test'

test('步骤插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('wizard#slot-step-button')

  const buttons = page.locator('.tiny-wizard__button').getByRole('button')
  const texts = ['第一步', '第二步', '第三步']
  const modal = page.locator('.tiny-modal')

  await expect(buttons).toHaveCount(3)
  for (let i = 0; i < 3; i++) {
    await expect(buttons.nth(i)).toHaveText(texts[i])
    await buttons.nth(i).click()
    await expect(modal.nth(i)).toHaveText(`步骤${i + 1}`)
  }
})
