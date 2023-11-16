import { expect, test } from '@playwright/test'

test('change事件是否正常触发', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('search#change-events')

  const input = page.locator('.tiny-search').getByRole('textbox')
  const modalText = page.locator('.tiny-modal').getByText('111')

  await input.fill('111')
  await input.press('Enter')
  await modalText.waitFor({ state: 'attached', timeout: 100 })
})
