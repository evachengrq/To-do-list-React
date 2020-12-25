import './Input.css'
import React from 'react'


function Input(props) {

  const handleKeyDown = (event) => {
    const id = Math.floor(Math.random() * 10000)
    if(event.key === 'Enter') {
      const input = event.target.value
      event.target.value = ''
      return props.handleSubmit(id, input)
    }
  }

  const selectAll = () => {

  }

  return(
    <section className="input-section">
      <button className={props.itemLength > 0 ? "select-all-button" : "select-all-button hidden"} onClick={selectAll}>❯</button>
      <input type="text" placeholder="What needs to be done?" className="input" onKeyDown={handleKeyDown}></input>
    </section>
  )
}

export default Input