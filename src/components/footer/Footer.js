import './Footer.css'
import React from 'react'

function Footer(props) {

  const handleClickClear = () => {
    props.deleteAllCompleted()
  }

  const lengthOfActives = props.todoItems.filter(item => !item.isCompleted).length
  const lengthOfCompleteds = props.todoItems.length - lengthOfActives

  return(
    <section className="footer">
      <p>{lengthOfActives > 1 ? lengthOfActives + " items left": lengthOfActives + " item left"} </p>
      <ul className="filter">
        <li className="filter__tab" onClick={() => props.showItemsByStatus("all")}>All</li>
        <li className="filter__tab" onClick={() => props.showItemsByStatus("active")}>Active</li>
        <li className="filter__tab" onClick={() => props.showItemsByStatus("completed")}>Completed</li>
      </ul>
      <button onClick={handleClickClear} className={lengthOfCompleteds > 0 ? "footer__clear" : "hidden"}>Clear completed</button>
    </section>
  )
}

export default Footer