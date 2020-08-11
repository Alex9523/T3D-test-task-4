import React, { useState } from 'react';
import Answ from './components/Answer'
import getAnswer from './API/API'
import './App.scss';

function App() {

  const [answerData, setAnswer] = useState([])
  const [isLoading, setLoading] = useState('Please send the request! Click on the "Request" button')
  const [wasLoad, setWasLoad] = useState(true)
  const [disable, setDisable] = useState('')

  function request() {
    setLoading("Loading....")
      getAnswer(`https://api.t3d.live/materials/lists`)
        .then(res => {
          const answerData = res.data.materialsList;
          console.log('Request was sent')
          console.log(`request was recive`)
          setAnswer(answerData)
          setDisable('disabled') // disable button
          setLoading("Loaded")
        })
  }

  function show() {
    setWasLoad(false)
  }

  function clear(){
    setWasLoad(true)
  }


  return (
    <div className="main">
      <div className="buttons">
      <button className="buttons__btn" onClick={request} disabled={disable}>Request</button>
      <button className="buttons__btn" onClick={show}>Show</button>
      <button className="buttons__btn" onClick={clear}>Clear</button>
      <p className="buttons__information">{isLoading}</p>
      </div>
      
      {wasLoad ? "" : <Answ answ={answerData} />}


    </div>
  )
}


export default App;
