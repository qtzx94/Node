  const net = require('net')

  const socket = new net.Socket({})

  socket.connect({
    host: '127.0.0.1',
    port: 4000
  })

  // socket.write('good morning geekbang') // 单工通信，只能单向传输数据

  const lessonids = [
    '123451', '123452', '123453', '123454'
  ]

  let buffer = Buffer.alloc(4)
  let id = Math.floor(Math.random() * lessonids.length)
  buffer.writeInt32BE(
    lessonids[id]
  )


  socket.on('data', (buffer) => {
    seqBuffer = buffer.slice(0, 2)
    titleBuffer = buffer.slice(2)

    console.log(seqBuffer.readInt16BE(), titleBuffer.toString())

    id = Math.floor(Math.random() * lessonids.length)

    socket.write(encode(id))

  })

  let seq = 0
  function encode(index) {
    buffer = Buffer.alloc(6)
    buffer.writeInt16BE(seq)
    buffer.writeInt32BE(lessonids[index], 2)

    console.log(seq, lessonids[index])
    seq++
    return buffer
  }