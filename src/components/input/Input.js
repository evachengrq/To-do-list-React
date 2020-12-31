import './Input.css'
import React from 'react'


function Input(props) {

  const handleKeyDown = (event) => {
    if(event.key === 'Enter') {
      const input = event.target.value
      event.target.value = ''
      return props.handleSubmit(input)
    }
  }

  return(
    <section data-testid="inputComponent" className="textfield">
      <button className={props.itemLength > 0 ? "textfield__button" : "hidden"} onClick={props.handleSelectAll}>❯</button>
      <input type="text" placeholder="What needs to be done?" className="textfield__input" onKeyDown={handleKeyDown}></input>
    </section>
  )
}

export default Input
