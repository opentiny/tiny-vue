import { test, expect } from '@playwright/test'

test('多选复制单个标签', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('base-select#copy-multi')

  const wrap = page.locator('#copy-multi')
  const select = wrap.locator('.tiny-base-select').nth(0)
  const tag = select.locator('.tiny-tag').nth(0)

  await expect(tag).toContainText('北京')
  await page.waitForTimeout(200)
  const tagBox = await tag.locator('span').boundingBox()
  const x = tagBox.x + tagBox.width
  const y = tagBox.y + tagBox.height - 5

  await page.mouse.move(tagBox.x, tagBox.y)
  await page.waitForTimeout(200)
  await page.mouse.down()
  await page.waitForTimeout(200)
  await page.mouse.move(x, y)
  await page.waitForTimeout(200)
  await page.mouse.up()

  await page.keyboard.press('Control+C')
  await page.waitForTimeout(200)
  const valueInput = page.locator('.copy-value .tiny-input__inner')
  await expect(valueInput).toHaveValue('')
  await valueInput.focus()
  await page.keyboard.press('Control+V')
  await page.waitForTimeout(200)
  await expect(valueInput).toHaveValue('北京')
})

test('多选一键复制所有标签', async ({ page }) => {
  await page.goto('base-select#copy-multi')

  const wrap = page.locator('#copy-multi')
  const select = wrap.locator('.tiny-base-select').nth(1)
  const copyValueInput = wrap.locator('.copy-value .tiny-input__inner')

  await page.waitForTimeout(200)
  await select.hover()
  await select.locator('.tiny-base-select__copy > .tiny-svg').click()

  await copyValueInput.press('Control+V')
  await expect(copyValueInput).toHaveValue('北京,上海')
})

test('多选设置复制文本分隔符', async ({ page }) => {
  await page.goto('base-select#copy-multi')

  const wrap = page.locator('#copy-multi')
  const select = wrap.locator('.tiny-base-select').nth(2)
  const copyValueInput = wrap.locator('.copy-value .tiny-input__inner')

  await page.waitForTimeout(200)
  await select.hover()
  await select.locator('.tiny-base-select__copy > .tiny-svg').click()

  await copyValueInput.press('Control+V')
  await expect(copyValueInput).toHaveValue('北京/上海')
})
