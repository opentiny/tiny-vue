import { test, expect } from '@playwright/test'

test('测试分组表单', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('form#smb-required')

  const preview = page.locator('#preview')
  const form = preview.locator('.tiny-form')
  const firstLabel = form.locator('.tiny-form-item__label').first()

  await expect(firstLabel).toBeVisible()
  let beforeElement = await page.evaluate(() => {
    const labelBefore = document.querySelector('.tiny-form .tiny-form-item__label')
    const { display, content } = window.getComputedStyle(labelBefore, '::before')
    return { display, content }
  })

  // 默认主题下，必填项的星号出现
  expect(beforeElement.display).toBe('inline-block')
  expect(beforeElement.content).toBe('"*"')

  // 切换到SMB主题，红色星号不出现
  await page.getByRole('button', { name: '切换主题' }).hover()
  await page.waitForTimeout(500)
  await page.locator('div').filter({ hasText: 'SMB Theme' }).first().click()
  await expect(firstLabel).toBeVisible()
  beforeElement = await page.evaluate(() => {
    const labelBefore = document.querySelector('.tiny-form .tiny-form-item__label')
    const { display, content } = window.getComputedStyle(labelBefore, '::before')
    return { display, content }
  })
  expect(beforeElement.display).toBe('none')
  expect(beforeElement.content).toBe('"*"')
})
