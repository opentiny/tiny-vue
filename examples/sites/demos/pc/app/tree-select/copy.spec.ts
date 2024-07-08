import { test, expect } from '@playwright/test'

test('单选无需配置可复制', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-select#copy-single')

  const wrap = page.locator('#copy-single')
  const select = wrap.locator('.tiny-base-select').nth(0)
  const input = select.locator('.tiny-input__inner')
  const valueInput = wrap.locator('.custom  .tiny-input__inner')

  await page.waitForTimeout(200)
  const inputBox = await input.boundingBox()

  await page.mouse.move(inputBox.x + inputBox?.width / 2, inputBox.y + inputBox?.height / 2)
  await page.mouse.down()
  await page.mouse.move(inputBox.x - 2, inputBox.y + inputBox?.height / 2)
  await page.mouse.up()
  await page.keyboard.press('Control+C')
  await expect(valueInput).toHaveValue('')
  await valueInput.focus()
  await page.keyboard.press('Control+V')
  await page.waitForTimeout(200)
  await expect(valueInput).toHaveValue('北京')
})

test('单选可搜索配置 allow-copy 可复制', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-select#copy-single')

  const wrap = page.locator('#copy-single')
  const select = wrap.locator('.tiny-base-select').nth(1)
  const input = select.locator('.tiny-input__inner')
  const valueInput = wrap.locator('.custom .tiny-input__inner')

  await expect(input).toHaveValue('北京')
  await page.waitForTimeout(200)
  const inputBox = await input.boundingBox()

  await page.mouse.move(inputBox.x + inputBox?.width / 2, inputBox.y + inputBox?.height / 2)
  await page.mouse.down()
  await page.mouse.move(inputBox.x - 2, inputBox.y + inputBox?.height / 2)
  await page.mouse.up()
  await page.waitForTimeout(800)

  await page.keyboard.press('Control+C')
  await expect(valueInput).toHaveValue('')
  await valueInput.click()
  await page.keyboard.press('Control+V')
  await page.waitForTimeout(200)
  await expect(valueInput).toHaveValue('北京')
})

test('单选远程搜索配置 allow-copy 可复制', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-select#copy-single')

  const wrap = page.locator('#copy-single')
  const select = wrap.locator('.tiny-base-select').nth(2)
  const input = select.locator('.tiny-input__inner')
  const valueInput = wrap.locator('.custom  .tiny-input__inner')

  await page.waitForTimeout(100)
  const inputBox = await input.boundingBox()

  await page.mouse.move(inputBox.x + inputBox?.width / 2, inputBox.y + inputBox?.height / 2)
  await page.mouse.down()
  await page.mouse.move(inputBox.x - 2, inputBox.y + inputBox?.height / 2)
  await page.mouse.up()
  await page.keyboard.press('Control+C')
  await expect(valueInput).toHaveValue('')
  await valueInput.focus()
  await page.keyboard.press('Control+V')
  await page.waitForTimeout(200)
  await expect(valueInput).toHaveValue('Alabama')
})
