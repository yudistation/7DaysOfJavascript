function startGame(){
  let randomNum = Math.ceil(Math.random()*(10+1)-1)
  let x = 1
  let attempt
  console.log(randomNum)
  do {
    attempt = prompt('What value do you wanna try?')
    let chances = 3-x
    let resTxt = document.querySelector('h2#res')
    let res = document.querySelector('img#reaction')
    res.setAttribute('width','300px')

    if(attempt == randomNum) {
      res.setAttribute('src','gif/happy.gif')
      resTxt.innerHTML = 'Congratulations!🥳<br>You won!👏'
      break
    } else {
      if(chances == 0) {
        alert('😭Game over!')
        resTxt.innerHTML = 'Game over!😭<br>Try again!😌'
        res.setAttribute('src','gif/sad.gif')
      } else {
        alert(`😔You missed! Try again but you have just more ${chances} chances.`)
      }
    }
    x++
  } while (x <= 3)
}