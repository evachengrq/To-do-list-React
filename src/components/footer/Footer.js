import './Footer.css'
import React from 'react'

function Footer(props) {
  
  return(
    <section className="footer">
      <p className="item-left">2 items left</p>
      <ul className="status">
        <li onClick={() => props.showItemsByStatus("all")}>All</li>
        <li onClick={() => props.showItemsByStatus("active")}>Active</li>
        <li onClick={() => props.showItemsByStatus("completed")}>Completed</li>
      </ul>
    </section>
  )
}

export default Footer