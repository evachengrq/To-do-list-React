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
      <ul className="footer__filter">
        <li className="footer__filter__tab" onClick={() => props.showItemsByStatus("all")}>All</li>
        <li className="footer__filter__tab" onClick={() => props.showItemsByStatus("active")}>Active</li>
        <li className="footer__filter__tab" onClick={() => props.showItemsByStatus("completed")}>Completed</li>
      </ul>
      <button onClick={handleClickClear} className={lengthOfCompleteds > 0 ? "footer__clear" : "hidden"}>Clear completed</button>
    </section>
  )
}

export default Footer