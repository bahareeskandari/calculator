import React, {useState} from 'react'
import './App.css'

function Queue() {
  const [queue, setQueue] = useState({
    numb: 100,
    next: '',
    theQueue: [],
  })
  const takeNumber = () =>
    setQueue({
      numb: ++queue.numb,
      theQueue: [...queue.theQueue, queue.numb],
      next: queue.next,
    })

  const nextPlease = () => {
    setQueue({
      next: queue.theQueue.shift(),
      theQueue: queue.theQueue,
      numb: queue.numb,
    })
  }
  return (
    <div>
      <button className="queBtn" onClick={takeNumber}>
        Take a queue ticket
      </button>
      <div>
        <h4 className="h5Que">Our queue</h4>
        {queue.theQueue.map((x, index) => (
          <li className="liQue" key={index}>
            {x}
          </li>
        ))}
      </div>
      <br />
      <hr />
      <div>
        <h5 className="h5Que">Currently serving</h5>
        <div className="liQue"> {queue.next}</div>
      </div>
      <div>
        <button className="queBtn" onClick={nextPlease}>
          Next
        </button>
      </div>
    </div>
  )
}
export default Queue
