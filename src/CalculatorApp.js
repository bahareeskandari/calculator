import React, {useState} from 'react'
import './App.css'
import Button from './Button'

function CalculatorApp() {
  const [input, setInput] = useState('0')
  const [memory, setMemory] = useState('')
  const [operator, setOperator] = useState(null)

  const operatorBtnCall = (keys) => () => {
    const num = parseFloat(input) // removes all the operator inputs and leaves just numbers

    if (keys === 'Clear') {
      setInput('0')
      setMemory(null)
      setOperator(null)
      return
    }
    if (keys === '+/-') {
      setInput((num * -1).toString())
      return
    }
    if (keys === '%') {
      setInput((num / 100).toString())
      setMemory(null)
      setOperator(null)
      return
    }
    if (keys === '+') {
      if (operator !== null) {
        if (operator === '+') {
          setMemory(memory + parseFloat(input))
        } else if (operator === '-') {
          setMemory(memory - parseFloat(input))
        } else if (operator === 'x') {
          setMemory(memory * parseFloat(input))
        } else if (operator === '/') {
          setMemory(memory / parseFloat(input))
        }
      } else {
        setMemory(parseFloat(input)) // saves the numbers inside input to memory state
      }
      setInput('0') // empties the input after saving the input inside memory
      setOperator('+')
      return
    }
    if (keys === '-') {
      if (operator !== null) {
        if (operator === '+') {
          setMemory(memory + parseFloat(input))
        } else if (operator === '-') {
          setMemory(memory - parseFloat(input))
        } else if (operator === 'x') {
          setMemory(memory * parseFloat(input))
        } else if (operator === '/') {
          setMemory(memory / parseFloat(input))
        }
      } else {
        setMemory(parseFloat(input)) // saves the numbers inside input to memory state
      }
      setInput('0') // empties the input after saving the input inside memory
      setOperator('-')
      return
    }
    if (keys === 'x') {
      if (operator !== null) {
        if (operator === '+') {
          setMemory(memory + parseFloat(input))
        } else if (operator === '-') {
          setMemory(memory - parseFloat(input))
        } else if (operator === 'x') {
          setMemory(memory * parseFloat(input))
        } else if (operator === '/') {
          setMemory(memory / parseFloat(input))
        }
      } else {
        setMemory(parseFloat(input)) // saves the numbers inside input to memory state
      }
      setInput('0') // empties the input after saving the input inside memory
      setOperator('x')
      return
    }
    if (keys === '/') {
      if (operator !== null) {
        if (operator === '+') {
          setMemory(memory + parseFloat(input))
        } else if (operator === '-') {
          setMemory(memory - parseFloat(input))
        } else if (operator === 'x') {
          setMemory(memory * parseFloat(input))
        } else if (operator === '/') {
          setMemory(memory / parseFloat(input))
        }
      } else {
        setMemory(parseFloat(input)) // saves the numbers inside input to memory state
      }
      setInput('0') // empties the input after saving the input inside memory
      setOperator('/')
      return
    }
    if (keys === '=') {
      if (!operator) return

      if (operator === '+') {
        setInput((memory + parseFloat(input)).toString())
      } else if (operator === '-') {
        setInput((memory - parseFloat(input)).toString())
      } else if (operator === 'x') {
        setInput((memory * parseFloat(input)).toString())
      } else if (operator === '/') {
        setInput((memory / parseFloat(input)).toString())
      }
      setMemory(null)
      setOperator(null)
      return
    }
    if (keys === '.') {
      if (input.includes('.')) return

      setInput(input + '.')
      return
    }
    if (input[input.length - 1] === '.') {
      setInput(input + keys)
    } else {
      setInput(parseFloat(num + keys).toString()) // buttonClicks that are numbers and not operators and strings it
    }
  }
  const input2 = input

  return (
    <div className="App">
      <div className="parent">
        <div className="div1">
          <h1>
            {input === '0' && !memory ? '0' : null}
            {input === '0' ? memory : input}
          </h1>
        </div>
        <Button className="div2" keys="Clear" onClickFunc={operatorBtnCall} />
        <Button className="div3" keys="+/-" onClickFunc={operatorBtnCall} />
        <Button className="div4" keys="%" onClickFunc={operatorBtnCall} />
        <Button className="div5" keys="/" onClickFunc={operatorBtnCall} />

        <Button className="div6" keys="7" onClickFunc={operatorBtnCall} />
        <Button className="div7" keys="8" onClickFunc={operatorBtnCall} />
        <Button className="div8" keys="9" onClickFunc={operatorBtnCall} />

        <Button className="div9" keys="x" onClickFunc={operatorBtnCall} />

        <Button className="div10" keys="4" onClickFunc={operatorBtnCall} />
        <Button className="div11" keys="5" onClickFunc={operatorBtnCall} />
        <Button className="div12" keys="6" onClickFunc={operatorBtnCall} />

        <Button className="div13" keys="-" onClickFunc={operatorBtnCall} />

        <Button className="div14" keys="1" onClickFunc={operatorBtnCall} />
        <Button className="div15" keys="2" onClickFunc={operatorBtnCall} />
        <Button className="div16" keys="3" onClickFunc={operatorBtnCall} />

        <Button className="div17" keys="+" onClickFunc={operatorBtnCall} />

        <Button className="div18" keys="0" onClickFunc={operatorBtnCall} />

        <Button className="div19" keys="100" onClickFunc={operatorBtnCall} />

        <Button className="div20" keys="." onClickFunc={operatorBtnCall} />
        <Button className="div20" keys="=" onClickFunc={operatorBtnCall} />
      </div>
    </div>
  )
}

export default CalculatorApp
