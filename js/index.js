// nav h1 changes to a one of a rotating array of colors each time you hover
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

let h1Color = 0

const navH1 = document.querySelector('.nav-container h1')

navH1.addEventListener('mouseenter', () => {
  navH1.style.color = colors[h1Color]
})

navH1.addEventListener('mouseleave', () => {
  navH1.style.color = 'black'
  h1Color = h1Color === colors.length - 1 ? 0 : h1Color + 1
})

// loops through all words in intro paragraph and turns them bold one by one
let wordIndex = 0

const introParagraph = document.querySelector('.home p')
const introParagraphContent = introParagraph.innerHTML
introParagraph.addEventListener('wheel', () => {
  introParagraph.innerHTML = introParagraphContent
    .split(' ')
    .map(
      (element, i) =>
        i === wordIndex ? `<span class='red-word'>${element}</span>` : element
    )
    .join(' ')
  document.querySelector('.home p .red-word').style.fontWeight = 'bold'
  document.querySelector('.home p .red-word').style.fontSize = '2.4rem'
  wordIndex =
    wordIndex === introParagraphContent.split(' ').length - 1
      ? 0
      : wordIndex + 1
})

// toggle inverted on all images on doubleclick anywhere
let inverted = false

const images = document.querySelectorAll('img')
document.querySelector('body').addEventListener('dblclick', () => {
  images.forEach(
    image => (image.style.filter = !inverted ? 'invert(1)' : 'invert(0)')
  )
  inverted = inverted ? false : true
})

//
// keydown
//
// drag / drop
// load
// focus
// resize
// scroll
// select
// dblclick
