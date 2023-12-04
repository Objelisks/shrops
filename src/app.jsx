import { useEffect, useState } from 'preact/hooks'
import { createDeck } from './cards'
import './app.css'
import { Card } from './components/card'

const createNewCard = async () => {
  const card = (<Card></Card>)
  return card.animate()
}

export function App() {
  const [visibleCards, setVisibleCards] = useState([])

  useEffect(() => {
    const deck = createDeck()
    deck.reduce((lastCardAnimation, currentCard) => {
      // after the last card is done
      return (lastCardAnimation || Promise.resolve()).then(() => {
        // create a new one and animate it
        const newCardAnimation = createNewCard(currentCard)
        return newCardAnimation
      })
    })
  }, [])
  

  return (
    <>
      <div className="cards">{visibleCards}</div>
    </>
  )
}
