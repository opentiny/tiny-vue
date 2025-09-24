import { expect, test } from '@playwright/test'

test('线性渐变', async ({ page }) => {
  await page.goto('color-select-panel#linear-gradient')
  await page.locator('#linear-gradient').getByRole('button', { name: 'Show Color select panel' }).click()
  expect(await page.locator('.tiny-color-select-panel__linear-gradient__thumb').count()).toBe(2)
  await page.locator('.tiny-color-select-panel__linear-gradient__thumb').first().click()
  await page.locator('.tiny-color-select-panel__linear-gradient').click()
  await page.locator('.tiny-color-select-panel__linear-gradient > div:nth-child(2)').click()
})

test('线性渐变 (历史记录)', async ({ page }) => {
  await page.goto('color-select-panel#linear-gradient')
  await page.locator('#linear-gradient').getByRole('button', { name: 'Show Color select panel' }).click()
  await expect(page.locator('.tiny-color-select-panel__history__color-block')).toBeVisible()
  await expect(page.getByLabel('示例', { exact: true }).getByRole('textbox')).toHaveValue(
    'linear-gradient(120deg, hsla(334, 80%, 40%, 0.32) 0%,#F48FA2FF 96%)'
  )
  await page.locator('.tiny-color-select-panel__history__color-block').click()
  await expect(page.getByLabel('示例', { exact: true }).getByRole('textbox')).toHaveValue(
    'linear-gradient(120deg, hsla(201, 80%, 40%, 0.32) 0%,#8FF2F4FF 96%)'
  )
  await page.getByRole('button', { name: '取消' }).click()
  await page.locator('#linear-gradient').getByRole('button', { name: 'Show Color select panel' }).click()
  await expect(page.getByLabel('示例', { exact: true }).getByRole('textbox')).toHaveValue(
    'linear-gradient(120deg, hsla(334, 80%, 40%, 0.32) 0%,#F48FA2FF 96%)'
  )
  await page.locator('.tiny-color-select-panel__inner__hue-select').click()
  await page.getByRole('button', { name: '确定' }).click()
  await page.locator('#linear-gradient').getByRole('button', { name: 'Show Color select panel' }).click()
  await page.locator('.tiny-color-select-panel__history__color-block').first().click()
  await expect(page.getByLabel('示例', { exact: true }).getByRole('textbox')).toHaveValue(
    'linear-gradient(120deg, hsla(201, 80%, 40%, 0.32) 0%,#8FF2F4FF 96%)'
  )
  await page.getByRole('button', { name: '确定' }).click()
  await page.locator('#linear-gradient').getByRole('button', { name: 'Show Color select panel' }).click()
  await expect(page.getByLabel('示例', { exact: true }).getByRole('textbox')).toHaveValue(
    'linear-gradient(120deg, hsla(201, 80%, 40%, 0.32) 0%,#8FF2F4FF 96%)'
  )
  await page.getByRole('button', { name: '确定' }).click()
})

test('线性渐变 (预定义颜色)', async ({ page }) => {
  await page.goto('color-select-panel#linear-gradient')

  await page.locator('#linear-gradient').getByRole('button', { name: 'Show Color select panel' }).click()
  await expect(page.getByLabel('示例', { exact: true }).getByRole('textbox')).toHaveValue(
    'linear-gradient(120deg, hsla(334, 80%, 40%, 0.32) 0%,#F48FA2FF 96%)'
  )
  await page.locator('.tiny-color-select-panel__predefine__color-block').click()
  await expect(page.getByLabel('示例', { exact: true }).getByRole('textbox')).toHaveValue(
    'linear-gradient(180deg, #FFFFFFFF 0%,#66CCFFFF 100%)'
  )
  await page.getByRole('button', { name: '确定' }).click()
  await page.locator('#linear-gradient').getByRole('button', { name: 'Show Color select panel' }).click()
  await page.locator('.tiny-color-select-panel__history__color-block').first().click()
  await expect(page.getByLabel('示例', { exact: true }).getByRole('textbox')).toHaveValue(
    'linear-gradient(120deg, hsla(201, 80%, 40%, 0.32) 0%,#8FF2F4FF 96%)'
  )
  await page.locator('.tiny-color-select-panel__history > div:nth-child(2)').click()
  await expect(page.getByLabel('示例', { exact: true }).getByRole('textbox')).toHaveValue(
    'linear-gradient(180deg, #FFFFFFFF 0%,#66CCFFFF 100%)'
  )
  await page.locator('.tiny-color-select-panel__history__color-block').first().click()
  await page.getByRole('button', { name: '确定' }).click()
  await page.locator('#linear-gradient').getByRole('button', { name: 'Show Color select panel' }).click()
  await expect(page.getByLabel('示例', { exact: true }).getByRole('textbox')).toHaveValue(
    'linear-gradient(120deg, hsla(201, 80%, 40%, 0.32) 0%,#8FF2F4FF 96%)'
  )
  await page.getByRole('button', { name: '确定' }).click()
})
