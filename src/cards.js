export const createDeck = () => {
  const suits = ['♠', '♥','♦','♣']
  const ranks = ['A', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
  const deck = []
  suits.forEach(suit => {
    ranks.forEach(rank => {
      deck.push({suit, rank})
    })
  })
  return deck
}