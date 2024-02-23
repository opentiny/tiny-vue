import { test, expect } from '@playwright/test'

test('PopEditor 编辑框大小', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popeditor#size')

  const textBox1 = page.getByRole('textbox').nth(1)
  await expect(textBox1).toHaveCSS('height', '40px')
  const textBox2 = page.getByRole('textbox').nth(2)
  await expect(textBox2).toHaveCSS('height', '32px')
  const textBox3 = page.getByRole('textbox').nth(3)
  await expect(textBox3).toHaveCSS('height', '28px')
  const textBox4 = page.getByRole('textbox').nth(4)
  await expect(textBox4).toHaveCSS('height', '24px')
})
