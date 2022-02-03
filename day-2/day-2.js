let name = prompt('What is your name?')
let age =  prompt('How old are you?')
let progLang = prompt('What programming language are you studying?')

if (nullValidation(name)) {
  name = 'Yudi'
}

if (nullValidation(age)) {
  age = 20
}

if (nullValidation(progLang)) {
  progLang = 'javascript'
}

let nameEl = document.querySelector('h2#nameEl')
let ageEl = document.querySelector('p#ageEl')
let langEl = document.querySelector('p#langEl')
let profileEl = document.querySelector('img#profileEl')
let progLangEl = document.querySelector('img#progLangEl')

nameEl.innerHTML= `Hello, ${name}`
ageEl.innerHTML= `Age: ${age} years old`
langEl.innerHTML= `Language: ${progLang}`

if (age > 0 && age < 4) {
  profileEl.setAttribute('src', 'img/age/baby.png')
} else if (age >= 4 && age < 12) {
  profileEl.setAttribute('src', 'img/age/kid.png')
} else if (age >= 12 && age < 18) {
  profileEl.setAttribute('src', 'img/age/teen.png')
} else if (age >= 18 && age < 35) {
  profileEl.setAttribute('src', 'img/age/man.png')
} else if (age >= 35 && age < 50) {
  profileEl.setAttribute('src', 'img/age/old.png')
} else if (age >= 50) {
  profileEl.setAttribute('src', 'img/age/elder.png')
} else {
  profileEl.setAttribute('src', 'img/error.png')
}
let languages = ['java', 'javascript', 'ruby', 'c', 'c++', 'c#', 'elixir', 'go', 'php', 'python', 'typescript']
let inLanguages = false
for(key in languages) {
  if(progLang.toLowerCase() == languages[key]) {
    inLanguages = true
  }
}

if (inLanguages) {
  progLangEl.setAttribute('src', `img/languages/${progLang}.png`)
} else {
  progLangEl.setAttribute('src', `img/languages/error.png`)
}

function nullValidation(verify) {
  if(verify == null || verify == '') {
    return true
  }
  return false
}