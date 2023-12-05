import { test, expect } from '@playwright/test'

test('单选无需配置可复制', async ({ page }) => {
  await page.goto('select#copy-single')

  const wrap = page.locator('#copy-single')
  const valueInput = wrap.locator('.custom  .tiny-input__inner')

  await page.waitForTimeout(1000)
  await page.mouse.move(393, 285)
  await page.waitForTimeout(1000)
  await page.mouse.down()
  await page.waitForTimeout(1000)
  await page.mouse.move(345, 285)
  await page.waitForTimeout(200)
  await page.mouse.up()
  await page.keyboard.press('Control+C')
  await expect(valueInput).toHaveValue('')
  await valueInput.focus()
  await page.keyboard.press('Control+V')
  await page.waitForTimeout(200)
  await expect(valueInput).toHaveValue('黄金糕')
})

test('单选可搜索配置 allow-copy 可复制', async ({ page }) => {
  await page.goto('select#copy-single')

  const wrap = page.locator('#copy-single')
  const select = wrap.locator('.tiny-select').nth(1)
  const valueInput = wrap.locator('.custom .tiny-input__inner')

  await page.waitForTimeout(800)
  await page.mouse.move(400, 350)
  await page.waitForTimeout(800)
  await page.mouse.down()
  await page.waitForTimeout(800)
  await page.mouse.move(344, 350)
  await page.waitForTimeout(200)
  await page.mouse.up()
  await page.waitForTimeout(800)

  await page.keyboard.press('Control+C')
  await expect(valueInput).toHaveValue('')
  await valueInput.click()
  await page.keyboard.press('Control+V')
  await page.waitForTimeout(2000)
  await expect(valueInput).toHaveValue('黄金糕')
})

test('单选远程搜索配置 allow-copy 可复制', async ({ page }) => {
  await page.goto('select#copy-single')

  const wrap = page.locator('#copy-single')
  const valueInput = wrap.locator('.custom  .tiny-input__inner')

  await page.waitForTimeout(1000)
  await page.mouse.move(410, 433)
  await page.waitForTimeout(1000)
  await page.mouse.down()
  await page.waitForTimeout(1000)
  await page.mouse.move(346, 433)
  await page.waitForTimeout(200)
  await page.mouse.up()
  await page.keyboard.press('Control+C')
  await expect(valueInput).toHaveValue('')
  await valueInput.focus()
  await page.keyboard.press('Control+V')
  await page.waitForTimeout(200)
  await expect(valueInput).toHaveValue('Alabama')
})
