const net = require('net')

const server = net.createServer((socket) => {

  server.on('data', (buffer) => {
    const seqBuffer = buffer.slice(0, 2)
    const lessonid = buffer.readInt32BE(2)

    setTimeout(() => {
      const buffer = Buffer.concat([seqBuffer, Buffer.from(data[lessonid])])
      socket.write(buffer)
    }, 500)
  })
}) 

server.listen(4000)

const data = {
  12341: '01 | 课程介绍',
  12342: '02 | 内容综述',
  12343: '03 | Node.js 是什么',
  12344: '04 | Node.js 可以用来做什么'
}