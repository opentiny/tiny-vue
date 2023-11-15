import { expect, test } from '@playwright/test'

test('not-inherit-width', async ({ page }) => {
  await page.goto('select#is-drop-inherit-width')
  const input = page.getByPlaceholder('请选择').first()
  await input.click()
  await page.waitForTimeout(1000)
  const listitem = page.getByRole('listitem').filter({ hasText: '双皮奶' })
  const inputBox = await input.boundingBox()

  const listitemBox = await listitem.boundingBox()
  await page.waitForTimeout(3000)
  const result = listitemBox.width > inputBox.width
  await expect(result).toBe(true)
})

test('inherit-width', async ({ page }) => {
  await page.goto('select#is-drop-inherit-width')
  const input = page.getByPlaceholder('请选择').nth(1)
  await input.click()
  await page.waitForTimeout(1000)
  const listitem = page.getByRole('listitem').filter({ hasText: '双皮奶' })
  const inputBox = await input.boundingBox()

  const listitemBox = await listitem.boundingBox()
  await page.waitForTimeout(3000)
  const result = listitemBox.width === inputBox.width
  await expect(result).toBe(true)
})
