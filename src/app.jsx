import { useEffect, useState } from 'preact/hooks'
import { createDeck } from './cards'
import './app.css'
import { Card } from './components/card'
import anime from 'animejs'
import { v4 as uuid } from 'uuid'
import pigUrl from './assets/pig.jpg'

const generateCardId = () => {
  return uuid()
}

const createNewCard = (cardInfo) => {
  const id = generateCardId()
  const card = (<Card id={id} rank={cardInfo.rank} suit={cardInfo.suit}></Card>)
  return card
}

const flipCard = (targets) => {
  let toggled = false
  anime.timeline({
    targets: targets,
    keyframes: [
      {rotateY: 0},
      {rotateY: 90},
      {rotateY: 180},
    ],
    duration: 1000,
    delay: anime.stagger(-25, {start: 1000}),
    easing: 'easeInQuad',
    update: (anim) => {
      if(!toggled && anim.progress > 50) {
        document.querySelectorAll(targets).forEach(el => {
          el.classList.add('back')
        })
        toggled = true
      }
    }
  })
}

export function App() {
  const [visibleCards, setVisibleCards] = useState([createDeck().map(card => createNewCard(card))])

  useEffect(() => {
    anime({
      targets: `.cards .card`,
      translateX: (el, i) => 200+i*20,
      translateY: (el, i) => 200+i*2,
      delay: anime.stagger(-25, {start: 1000}),
    }).finished.then(() => {
      flipCard('.cards .card')
    })
  }, [])

  return (
    <>
      <img class="bg-pig" src={pigUrl}/>
      <div className="cards">{visibleCards}</div>
    </>
  )
}
