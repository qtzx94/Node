var playerAction = process.argv[process.argv.length - 1]

var random = Math.random() * 3;

if (random < 1) {
  var computerAction = 'rock' // 石头
} else if(random > 2) {
  var computerAction = 'scissor' // 剪刀
} else {
  var computerAction = 'paper' // 布
}
console.log('我出了' + computerAction)

if(computerAction === playerAction) {
  console.log('平局')
} else if(
  (computerAction === 'rock' && playerAction === 'paper') ||
  (computerAction === 'scissor' && playerAction === 'rock') ||
  (computerAction === 'paper' && playerAction === 'scissor')
) {
  console.log('你赢了')
} else {
  console.log('你输了')
}