const rankMap = {
  'A': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  '10': 10,
  'J': 10,
  'Q': 10,
  'K': 10
}

export const rankToPips = (rank) => {
  return rankMap[rank]
}

export const createDeck = () => {
  const suits = ['♠', '♥','♦','♣']
  const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
  const deck = []
  suits.forEach(suit => {
    ranks.forEach(rank => {
      deck.push({suit, rank})
    })
  })
  return deck
}