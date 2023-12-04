import './card.css'

// https://en.wikipedia.org/wiki/Playing_cards_in_Unicode

export function Card(props) {
  return (<div className="card">
    <div>suit</div>
    {Array(props.rank).fill(<div>♥</div>)}
  </div>)
}