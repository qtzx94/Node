const glob = require('glob')


// 阻塞 IO
// var result = null
// console.time('glob')
// result = glob.sync(__dirname + '/**/*')
// console.timeEnd('glob') // 14ms
// console.log(result)

// 非阻塞 IO
var result = null
console.time('glob')
glob(__dirname + '/**/*', function(err, res) {
  result = res
  // console.log(result)
  console.log('got result')
})
console.timeEnd('glob') // 2ms
console.log(1+1)