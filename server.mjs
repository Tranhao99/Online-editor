import { Server } from '@hocuspocus/server'

const server = new Server({
  port: 1234,
  timeout: 30000,
  onLoadDocument(data) {
    console.log(`Document loaded: ${data.documentName}`);
  },
  onChange(data) {
    // console.log(`Document changed: ${data.documentName}`);
  },
  onConnect(data) {
    console.log(`User connected to ${data.documentName}`);
  },
  onDisconnect(data) {
     console.log(`User disconnected from ${data.documentName}`);
  }
})

server.listen()
console.log('Hocuspocus WebSocket server is running on ws://127.0.0.1:1234')
