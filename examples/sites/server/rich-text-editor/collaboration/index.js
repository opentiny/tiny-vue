import { Server } from '@hocuspocus/server'
import { Logger } from '@hocuspocus/extension-logger'
import { SQLite } from '@hocuspocus/extension-sqlite'

const IP = '127.0.0.1'
const PORT = 1234
const NAME = 'tiny-hocuspocus'

const server = Server.configure({
  port: PORT,
  address: IP,
  name: NAME,
  extensions: [new Logger(), new SQLite()]
})

console.log(`collaboration is listen on ${IP}:${PORT}`)

server.listen()
