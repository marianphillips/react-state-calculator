import "./App.css"
import {useState} from 'react'

function App() { 

  const [firstNumber, setFirstNumber] = useState('0')
  const [secondNumber, setSecondNumber] = useState('0')
  const [operation, setOperation] = useState('+')
  const [store, setStore] = useState(0)

    let total = 0

    const firstNumberButton = (numberAsString) => {
      firstNumber === '0' ? setFirstNumber(numberAsString) : setFirstNumber(firstNumber + numberAsString)
    }

    const secondNumberButton = (numberAsString) => {
      secondNumber === '0' ? setSecondNumber(numberAsString) : setSecondNumber(secondNumber + numberAsString)
    }

    if(operation === '+') {
      total = Number(firstNumber) + Number(secondNumber)
    }

    if(operation === '-') {
      total = Number(firstNumber) - Number(secondNumber)
    }

    if(operation === '*') {
      total = Number(firstNumber) * Number(secondNumber)
    }

    if(operation === '÷') {
      total = Number(firstNumber) / Number(secondNumber)
    }

    return (
    <div className="calculator">
        <div className="panel">
          <p>{firstNumber}</p>
          <div className="numbers">
            <button onClick={() => firstNumberButton('1')}>1</button>
            <button onClick={() => firstNumberButton('2')}>2</button>
            <button onClick={() => firstNumberButton('3')}>3</button>
            <button onClick={() => firstNumberButton('4')}>4</button>
            <button onClick={() => firstNumberButton('5')}>5</button>
            <button onClick={() => firstNumberButton('6')}>6</button>
            <button onClick={() => firstNumberButton('7')}>7</button>
            <button onClick={() => firstNumberButton('8')}>8</button>
            <button onClick={() => firstNumberButton('9')}>9</button>
            <button onClick={() => firstNumberButton('0')}>0</button>
            <button onClick={() => setFirstNumber('0')}>Clear</button>
            <button onClick={() => setFirstNumber(store.toString())}>Recall</button>
            <button onClick={() => firstNumber.includes('.') ? setFirstNumber(firstNumber) : setFirstNumber(firstNumber + '.')}>.</button>
          </div>
        </div>
        
        <div className="panel">
          <p>{operation}</p>
          <div className="numbers">
            <button onClick={() => setOperation('+')}>+</button>
            <button onClick={() => setOperation('-')}>-</button>
            <button onClick={() => setOperation('*')}>*</button>
            <button onClick={() => setOperation('÷')}>÷</button>
          </div>
        </div>

        <div className="panel">
          <p>{secondNumber}</p>
          <div className="numbers">
            <button onClick={() => secondNumberButton('1')}>1</button>
            <button onClick={() => secondNumberButton('2')}>2</button>
            <button onClick={() => secondNumberButton('3')}>3</button>
            <button onClick={() => secondNumberButton('4')}>4</button>
            <button onClick={() => secondNumberButton('5')}>5</button>
            <button onClick={() => secondNumberButton('6')}>6</button>
            <button onClick={() => secondNumberButton('7')}>7</button>
            <button onClick={() => secondNumberButton('8')}>8</button>
            <button onClick={() => secondNumberButton('9')}>9</button>
            <button onClick={() => secondNumberButton('0')}>0</button>
            <button onClick={() => setSecondNumber('0')}>Clear</button>
            <button onClick={() => setSecondNumber(store.toString())}>Recall</button>
            <button onClick={() => secondNumber.includes('.') ? setSecondNumber(secondNumber) : setSecondNumber(secondNumber + '.')}>.</button>
          </div>
        </div>
        <div className="panel answer">
          <p>{total}</p>
          <button onClick={() => setStore(total)}>Store</button>
        </div>
    </div>
  )
}

export default App
