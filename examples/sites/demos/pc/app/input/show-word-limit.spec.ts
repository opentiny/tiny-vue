import { test, expect } from '@playwright/test'

test('[Input]show-word-limit', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('input#show-word-limit')

  const inputComponent = page.locator('.demo-input .tiny-input')
  const input = inputComponent.locator('input')
  const inputLength = inputComponent.locator('.tiny-input__count-text-length')
  const inputLimit= inputComponent.locator('.tiny-input__count-upper-limit')

  await expect(inputLimit).toContainText('/10')
  await input.fill('22')
  await expect(inputLength).toContainText('2')


  const textareaComponent = page.locator('.demo-input .tiny-textarea')
  const textarea = textareaComponent.locator('textarea')
  const textareaLength = textareaComponent.locator('.tiny-input__count-text-length')
  const textareaLimit= textareaComponent.locator('.tiny-input__count-upper-limit')

  await expect(textareaLimit).toContainText('/20')
  await textarea.fill('555')
  await expect(textareaLength).toContainText('3')
})
