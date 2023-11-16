import { test, expect } from '@playwright/test'

test('[Input]event: input, change', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('input#event')

  const input = page.locator('.demo-input > .tiny-input > .tiny-input-display-only > input').nth(0)

  // input event
  await input.fill('2')
  const dialogModelInputEvent = await page.locator('.tiny-modal')
  await expect(dialogModelInputEvent).toContainText('input')

  // change event
  await input.blur()
  const dialogModelChangeEvent = await page.locator('.tiny-modal', { hasText: 'change' })
  await expect(dialogModelChangeEvent).toBeVisible()
})

test('[Input]event: focus, blur', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('input#event')

  const input = page.locator('.demo-input > .tiny-input > .tiny-input-display-only > input').nth(1)

  // focus event
  await input.focus()
  const dialogModelFocusEvent = await page.locator('.tiny-modal', { hasText: 'focus' })
  await expect(dialogModelFocusEvent).toBeVisible()

  // blur event
  await input.blur()
  const dialogModelBlurEvent = await page.locator('.tiny-modal', { hasText: 'blur' })
  await expect(dialogModelBlurEvent).toBeVisible()
})


test('[Input]event: clear', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('input#event')

  const inputComponent = page.locator('.demo-input > .tiny-input').nth(2)
  const input = inputComponent.locator('.tiny-input-display-only > input')

  // focus clear
  await input.fill('22')
  await input.focus()
  await inputComponent.locator('.tiny-input__clear').click()
  const dialogModelFocusEvent = await page.locator('.tiny-modal', { hasText: 'clear' })
  await expect(dialogModelFocusEvent).toBeVisible()
})


