let firstBtn = document.querySelector('button#backend-btn')
let secondBtn = document.querySelector('button#frontend-btn')
let container = document.querySelector('div#container')
let title = document.querySelector('h2#title')
let r = document.querySelector(':root')
let area = ''

function analyzeAnswer(chosenOption) {
  if(chosenOption == 'Back-end') {
    changeColors('#f47f53', '#813084', '#ec2025')

    firstBtn.innerHTML = 'C#'
    firstBtn.setAttribute('onclick',`tech('cSharp')`)
    secondBtn.innerHTML = 'Java'
    secondBtn.setAttribute('onclick',`tech('java')`)
    area = chosenOption
  } else {
    changeColors('#02387a', '#61dbfb', '#41b883')
    
    firstBtn.innerHTML = 'React'
    firstBtn.setAttribute('onclick',`tech('react')`)
    secondBtn.innerHTML = 'Vue'
    secondBtn.setAttribute('onclick',`tech('vue')`)
    area = chosenOption
  }
  title.innerHTML = 'Qual tecnologia deseja aprender?'
}

function tech(chosenOption) {
  switch(chosenOption) {
    case 'cSharp':
      console.log('C#')
      changeColors('#813084')
      break
    case 'java':
      console.log('Java')
      changeColors('#ec2025')
      break
    case 'react':
      console.log('React')
      changeColors('#61dbfb')
      break
    case 'vue':
      console.log('Vue')
      changeColors('#41b883')
      break
  }
  title.innerHTML = 'O que deseja fazer?'
  firstBtn.innerHTML = `Especializar em ${area}`
  firstBtn.setAttribute('onclick',`final('${area}')`)
  secondBtn.setAttribute('onclick',`final('Full Stack')`)
  secondBtn.innerHTML = `Estudar para Full Stack`
}

function final(chosenOption) {
  if(chosenOption == area) {
    changeColors('#f47f53')
    finalChoice(area)
  } else {
    changeColors('#02387a')
    finalChoice('Full Stack')
  }
}

function finalChoice(lastChoice) {
  title.innerHTML = `Continue se dedicando aos estudos para se tornar um ótimo desenvolvedor <span>${lastChoice}</span>!`
  firstBtn.remove()
  secondBtn.remove()
  let book = document.createElement('img')
  book.setAttribute('src','gif/open-book.gif')
  book.setAttribute('id','book')
  container.appendChild(book)
}

function changeColors(bg, firstBtn='#f47f53', secondBtn='#02387a') {
  r.style.setProperty('--bg-color', bg)
  r.style.setProperty('--first-btn-color', firstBtn)
  r.style.setProperty('--second-btn-color', secondBtn)
}