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
    <section className="input-section">
      <button className={props.itemLength > 0 ? "select-all-button" : "select-all-button hidden"} onClick={props.handleSelectAll}>❯</button>
      <input type="text" placeholder="What needs to be done?" className="input" onKeyDown={handleKeyDown}></input>
    </section>
  )
}

export default Input
