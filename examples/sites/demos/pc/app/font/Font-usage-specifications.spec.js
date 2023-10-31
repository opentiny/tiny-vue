import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {
  await page.goto('font#english-fonts')
  await page.getByText('字体使用规范').click()
  await page.locator('.col-xs-10').first().click()
  await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div[1]')).toHaveAttribute(
    'class',
    'tiny-row row-font-css font-38-css'
  )
  await page.locator('div:nth-child(2) > .col-xs-10').click()
  await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div[2]')).toHaveAttribute(
    'class',
    'tiny-row row-font-css font-30-css'
  )
  await page.locator('div:nth-child(3) > .col-xs-10').click()
  await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div[3]')).toHaveAttribute(
    'class',
    'tiny-row row-font-css font-24-css'
  )
  await page.locator('div:nth-child(4) > .col-xs-10').click()
  await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div[4]')).toHaveAttribute(
    'class',
    'tiny-row row-font-css font-20-css'
  )
  await page.locator('div:nth-child(5) > .col-xs-10').click()
  await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div[5]')).toHaveAttribute(
    'class',
    'tiny-row row-font-css font-16-css'
  )
  await page.locator('div:nth-child(6) > .col-xs-10').click()
  await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div[6]')).toHaveAttribute(
    'class',
    'tiny-row row-font-css font-14-css'
  )
  await page.locator('div:nth-child(7) > .col-xs-10').click()
  await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div[7]')).toHaveAttribute(
    'class',
    'tiny-row row-font-css font-12-css'
  )
})
