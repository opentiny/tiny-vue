import { test, expect } from '@playwright/test'

test('异步列加载', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('grid-data-source#tiny-first-menu-column-asyn-rendering')
  const loading = page
    .getByRole('row', {
      name: '1 GFD科技YX公司 loading ... 800 2014-04-30 00:56:00 公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
    })
    .getByText('loading ...')

  await expect(loading).toBeVisible()
  await expect(page.getByText('福州').first()).toBeVisible()
})
