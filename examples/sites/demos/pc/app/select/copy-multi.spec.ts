import { test, expect } from '@playwright/test'

test('多选复制单个标签', async ({ page }) => {
  await page.goto('select#copy-multi')

  await page.waitForTimeout(1000)
  await page.mouse.move(392, 316)
  await page.waitForTimeout(1000)
  await page.mouse.down()
  await page.waitForTimeout(1000)
  await page.mouse.move(346, 316)
  await page.waitForTimeout(1000)
  await page.mouse.up()
  await page.keyboard.press('Control+C')
  const valueInput = page.locator('.copy-value .tiny-input__inner')
  await expect(valueInput).toHaveValue('')
  await valueInput.focus()
  await page.keyboard.press('Control+V')
  await page.waitForTimeout(200)
  await expect(valueInput).toHaveValue('黄金糕')
})

test('多选一键复制所有标签', async ({ page }) => {
  await page.goto('select#copy-multi')

  const wrap = page.locator('#copy-multi')
  const select = wrap.locator('.tiny-select').nth(1)
  const copyValueInput = wrap.locator('.copy-value .tiny-input__inner')

  await select.hover()
  await select.locator('.tiny-select__copy > .tiny-svg > .st0').click()

  await copyValueInput.press('Control+V')
  await expect(copyValueInput).toHaveValue('黄金糕,双皮奶')
})

test('多选设置复制文本分隔符', async ({ page }) => {
  await page.goto('select#copy-multi')

  const wrap = page.locator('#copy-multi')
  const select = wrap.locator('.tiny-select').nth(2)
  const copyValueInput = wrap.locator('.copy-value .tiny-input__inner')

  await select.hover()
  await select.locator('.tiny-select__copy > .tiny-svg > .st0').click()

  await copyValueInput.press('Control+V')
  await expect(copyValueInput).toHaveValue('黄金糕/双皮奶')
})
