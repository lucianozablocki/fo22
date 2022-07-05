import { useState } from 'react';

const weigths = new Map();
weigths.set(0, 1);
weigths.set(1, -1);
weigths.set(2, 0);

function calcAverage(total, ...args) {
  let sum = 0;
  let length = args.length;
  for (let i = 0; i < length; ++i) {
    sum += args[i]*weigths.get(i);
  }
  return sum/total;
}

let calcPositivePerc = (good, total) => good/total*100;

const Header = ({ text }) =>
  <h1> {text} </h1>

const Button = ({ text, onClick }) => 
  <button onClick={onClick}>
    {text}
  </button>

const Row = ({ text, qty }) => 
  <tr>
    <td> {text} </td><td> {qty} </td>
  </tr>     

const Table = ({ info }) => {
  let total = Object.values(info).reduce((partialSum, a) => partialSum + a, 0);
  return(
    <table>
      <tbody>
          {Object.entries(info).map(([ key, value ]) =>
            <Row key={key} text={key} qty={value} />)}
          <Row text='all' qty={total}/>
          <Row text='average' qty={calcAverage(total, info.good, info.bad, info.neutral)}/>
          <Row text='positive' qty={calcPositivePerc(info.good, total) + ' %'}/>
      </tbody>
    </table>
  )
}

const Statistics = ({ info }) => 
  Object.values(info).some(value => value!==0) ? 
    <Table info={info}/>
    :
    <div>
      No feedback given
    </div>


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const handleGoodClick = () => {
    setGood(good+1);
  }
  const handleNeutralClick = () => {
    setNeutral(neutral+1);
  }
  const handleBadClick = () => {
    setBad(bad+1);
  }
  const info = {
    good: good,
    neutral: neutral,
    bad: bad
  }
  return (
    <>
      <Header text='give feedback'/>
      <Button text={'good'} onClick={handleGoodClick}/>
      <Button text={'neutral'} onClick={handleNeutralClick}/>
      <Button text={'bad'} onClick={handleBadClick}/>   
      <Header text='statistics'/>
      <Statistics info={info}/>
    </>
  )
}

export default App
