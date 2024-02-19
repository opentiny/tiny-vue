import { test, expect } from '@playwright/test'

test('测试表单文本对齐', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('form#label-position')

  const demo = page.locator('#label-position')
  const form = demo.locator('.tiny-form')
  const formItem = form.locator('.tiny-form-item')
  const getBtnByText = (text: string) => demo.locator('.tiny-button-group').getByRole('button', { name: text })
  const firstItemLabel = formItem.first().locator('.tiny-form-item__label')
  const firstItemContent = formItem.first().locator('.tiny-form-item__content')

  await getBtnByText('left').click()
  await page.waitForTimeout(300)
  await expect(form).toHaveClass(/tiny-form--label-left/)
  let labelBox = await firstItemLabel.boundingBox()
  let contentBox = await firstItemContent.boundingBox()
  expect(labelBox?.y).toEqual(contentBox?.y)

  await getBtnByText('top').click()
  await page.waitForTimeout(300)
  await expect(form).toHaveClass(/tiny-form--label-top/)
  labelBox = await firstItemLabel.boundingBox()
  contentBox = await firstItemContent.boundingBox()
  expect(labelBox?.y).toBeLessThan(contentBox?.y || 0)

  await getBtnByText('right').click()
  await page.waitForTimeout(300)
  await expect(form).toHaveClass(/tiny-form--label-right/)
  labelBox = await firstItemLabel.boundingBox()
  contentBox = await firstItemContent.boundingBox()
  expect(contentBox?.y).toEqual(labelBox?.y)
  await expect(firstItemLabel).toHaveCSS('text-align', 'right')
})
