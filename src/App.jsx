import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [amount, setAmount] = useState(0)
  const [rate, setRate] = useState(0)
  const [months, setMonths] = useState(0)
  const [interest, setInterest] = useState(0) 

  console.log(amount);
  console.log(rate);
  console.log(months);
  console.log(interest);

  const calculate = (e) => {
    const output = amount*months*rate/100
    console.log(output);
    setInterest(output)
  }

  const reset = (e) => {
    setInterest(0)
    setRate(0)
    setAmount(0)
    setMonths(0)
  }


  return (
    <div className="App">

      <div className="container">

        <div className="headings">
          <h1>Simple Interest Calculator</h1>
          <p>Calculate your simple interest with us 😎</p>
        </div>

        <div className="totall">
        <div className="total">
          <h3>&#8377; {interest}</h3>
          <p>Your Total Interest</p>
        </div>
        </div>

        <div className="form">
          <form>
            <div className="input">
              <TextField className='in' value={amount || ""} id="outlined-basic1" label="Amount" variant="outlined" onChange={(e) => {setAmount(e.target.value)}} />
              <TextField className='in' value={rate || ""} id="outlined-basic2" label="Rate of Interest" variant="outlined" onChange={(e) => {setRate(e.target.value)}}/>
              <TextField className='in' value={months || ""} id="outlined-basic3" label="Time Period in Months" variant="outlined" onChange={(e) => {setMonths(e.target.value)}}/>
            </div>

            <div className="button">
              <Button variant="contained" onClick={calculate}>Calculate</Button>
              <Button variant="outlined" onClick={reset}>Reset</Button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}

export default App;
