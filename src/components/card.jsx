import './card.css'
import { rankToPips } from '../cards'

// https://en.wikipedia.org/wiki/Playing_cards_in_Unicode
// https://fonts.google.com/specimen/Fredericka+the+Great?preview.text=A%201%202%203%204%205%206%20J%20Q%20K&classification=Display&stroke=Serif


export function Card(props) {
  return (<div className="card" id={props.id}>
    <div class="top-rank">{props.rank}</div>
    <div class="pips">
      {Array(rankToPips(props.rank)).fill(<div class="pip">{props.suit}</div>)}
    </div>
    <div class="bottom-rank">{props.rank}</div>
  </div>)
}