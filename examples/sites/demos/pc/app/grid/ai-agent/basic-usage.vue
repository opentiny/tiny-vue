<template>
  <div>
    <label style="font-size: 1.5em; margin-right: 8px">选择城市:</label>
    <tiny-select
      v-model="queryCity"
      :options="options"
      style="width: 200px; margin-bottom: 20px"
      placeholder="选择城市"
      :tiny_mcp_config="{
        server,
        business: {
          id: 'city-dropdown',
          description: '城市下拉框'
        }
      }"
    ></tiny-select>
    <tiny-grid
      :data="tableData"
      :edit-config="{ trigger: 'click', mode: 'cell', showStatus: true }"
      height="420px"
      :tiny_mcp_config="{
        server,
        business: {
          id: 'company-information',
          description: '公司人员信息表'
        }
      }"
    >
      <tiny-grid-column type="index" width="60"></tiny-grid-column>
      <tiny-grid-column type="selection" width="60"></tiny-grid-column>
      <tiny-grid-column field="company" title="公司名称"></tiny-grid-column>
      <tiny-grid-column field="employees" title="员工数"></tiny-grid-column>
      <tiny-grid-column field="createdDate" title="创建日期"></tiny-grid-column>
      <tiny-grid-column field="city" title="城市"></tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script>
import { TinyGrid, TinyGridColumn, TinyBaseSelect } from '@opentiny/vue'
import { createTransportPair, createSseProxy } from '@opentiny/next'
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { Client } from '@modelcontextprotocol/sdk/client/index.js'

export default {
  components: {
    TinyGrid,
    TinyGridColumn,
    TinySelect: TinyBaseSelect
  },
  data() {
    const _table = [
      { company: 'GFD 科技 YX 公司', city: '广州', employees: 800, createdDate: '2014-04-30 00:56:00' },
      { company: 'QWE 科技 YX 公司', city: '深圳', employees: 500, createdDate: '2015-05-01 01:01:01' },
      { company: 'ASD 科技 YX 公司', city: '中山', employees: 200, createdDate: '2013-03-03 03:03:03' },
      { company: 'ZXC 科技 YX 公司', city: '广州', employees: 1000, createdDate: '2012-02-02 02:02:02' },
      { company: 'VBN 科技 YX 公司', city: '深圳', employees: 600, createdDate: '2011-01-01 01:01:01' },
      { company: 'QWE 科技 YX 公司', city: '中山', employees: 700, createdDate: '2016-08-08 08:08:08' },
      { company: 'RTY 科技 YX 公司', city: '广州', employees: 900, createdDate: '2015-09-09 09:09:09' },
      { company: 'UIO 科技 YX 公司', city: '深圳', employees: 1100, createdDate: '2014-10-10 10:10:10' },
      { company: 'HJK 科技 YX 公司', city: '中山', employees: 1200, createdDate: '2013-11-11 11:11:11' },
      { company: 'WWW 科技 YX 公司', city: '深圳', employees: 300, createdDate: '2016-07-08 12:36:22' },
      { company: 'RFV 有限责任公司', city: '中山', employees: 1300, createdDate: '2014-02-14 14:14:14' },
      { company: 'TGB 科技 YX 公司', city: '广州', employees: 360, createdDate: '2013-01-13 13:13:13' },
      { company: 'YHN 科技 YX 公司', city: '深圳', employees: 810, createdDate: '2012-12-12 12:12:12' },
      { company: 'WSX 科技 YX 公司', city: '中山', employees: 800, createdDate: '2011-11-11 11:11:11' },
      { company: 'KBG 物业 YX 公司', city: '深圳', employees: 400, createdDate: '2014-04-30 23:56:00' },
      { company: 'SZB 有限责任公司', city: '深圳', employees: 1400, createdDate: '2016-06-03 13:53:25' }
    ]
    return {
      server: new McpServer({ name: 'base-config', version: '1.0.0' }, {}),
      sessionID: '',
      tableData: _table,
      queryCity: '',
      options: Array.from(new Set(_table.map((item) => item.city))).map((city) => ({
        label: city,
        value: city
      }))
    }
  },
  async mounted() {
    // 1、
    const [transport, clientTransport] = createTransportPair()

    // 2、
    const client = new Client({ name: 'ai-agent', version: '1.0.0' }, {})
    await client.connect(clientTransport)
    const { sessionId } = await createSseProxy({
      client,
      url: 'http://39.108.160.245/sse'
    })

    this.sessionID = sessionId
    window.$sessionId = this.sessionID

    // 3、
    await this.server.connect(transport)
  }
}
</script>
