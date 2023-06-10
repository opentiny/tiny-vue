import { test, expect } from '@playwright/test'

test('测试success类型警告', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/alert/type')

  const successAlert = page.locator('.tiny-alert--success').first()
  const icon = successAlert.locator('.tiny-alert__icon').first()
  const close = successAlert.locator('.tiny-alert__close')

  await expect(successAlert).toHaveCSS(
    'background',
    'rgb(237, 255, 249) none repeat scroll 0% 0% / auto padding-box border-box'
  )
  await expect(successAlert).toHaveCSS('border-color', 'rgb(172, 242, 220)')
  await expect(icon).toHaveCSS('fill', 'rgb(80, 212, 171)')
  await expect(close).toHaveCSS('fill', 'rgb(80, 212, 171)')
})

test('测试info类型警告', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/alert/type')

  const infoAlert = page.locator('.tiny-alert--info')
  const icon = infoAlert.locator('.tiny-alert__icon').first()
  const close = infoAlert.locator('.tiny-alert__close')

  await expect(infoAlert).toHaveCSS(
    'background',
    'rgb(235, 246, 255) none repeat scroll 0% 0% / auto padding-box border-box'
  )
  await expect(infoAlert).toHaveCSS('border-color', 'rgb(190, 204, 250)')
  await expect(icon).toHaveCSS('fill', 'rgb(94, 124, 224)')
  await expect(close).toHaveCSS('fill', 'rgb(94, 124, 224)')
})

test('测试error类型警告', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/alert/type')

  const errorAlert = page.locator('.tiny-alert--error')
  const icon = errorAlert.locator('.tiny-alert__icon').first()
  const close = errorAlert.locator('.tiny-alert__close')

  await expect(errorAlert).toHaveCSS(
    'background',
    'rgb(255, 238, 237) none repeat scroll 0% 0% / auto padding-box border-box'
  )
  await expect(errorAlert).toHaveCSS('border-color', 'rgb(255, 188, 186)')
  await expect(icon).toHaveCSS('fill', 'rgb(246, 111, 106)')
  await expect(close).toHaveCSS('fill', 'rgb(246, 111, 106)')
})

test('测试warning类型警告', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/alert/type')

  const warningAlert = page.locator('.tiny-alert--warning')
  const icon = warningAlert.locator('.tiny-alert__icon').first()
  const close = warningAlert.locator('.tiny-alert__close')

  await expect(warningAlert).toHaveCSS(
    'background',
    'rgb(255, 243, 232) none repeat scroll 0% 0% / auto padding-box border-box'
  )
  await expect(warningAlert).toHaveCSS('border-color', 'rgb(255, 208, 166)')
  await expect(icon).toHaveCSS('fill', 'rgb(250, 152, 65)')
  await expect(close).toHaveCSS('fill', 'rgb(250, 152, 65)')
})
