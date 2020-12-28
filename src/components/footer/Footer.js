import './Footer.css'
import React from 'react'

function Footer(props) {

  const handleClickClear = () => {
    props.deleteAllCompleted()
  }

  const lengthOfActives = props.todoItems.filter(item => item.isCompleted === false).length
  const lengthOfCompleteds = props.todoItems.filter(item => item.isCompleted === true).length

  return(
    <section className="footer">
      <p>{lengthOfActives} items left</p>
      <ul className="status">
        <li onClick={() => props.showItemsByStatus("all")}>All</li>
        <li onClick={() => props.showItemsByStatus("active")}>Active</li>
        <li onClick={() => props.showItemsByStatus("completed")}>Completed</li>
      </ul>
      <p onClick={handleClickClear} className={lengthOfCompleteds > 0 ? "clear-completed" : "hidden"}>Clear completed</p>
    </section>
  )
}

export default Footer