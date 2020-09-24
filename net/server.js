const net = require('net')

const server = net.createServer(socket => {
  // socket.write() // 写入
  socket.on('data', function(buffer) {
    console.log(buffer, buffer.toString())
  }) // 监听
}) 

server.listen(4000)