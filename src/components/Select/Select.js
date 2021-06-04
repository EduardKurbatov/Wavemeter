import './Select.scss';
import {INTERVALS} from '../../store/constants'; 

function Select({interval, setInterval}) {

  return (
    <div className="select-interval">
      <select className="select-box" value={interval} onChange={(e) => setInterval(e.target.value)}>
        {INTERVALS.map((interval, index) => {
          return <option key={index}>{interval}</option>
        })}
      </select>
    </div>
  )
}

export default Select
