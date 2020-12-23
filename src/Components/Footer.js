import './Footer.css'
import React from 'react'

function Footer() {
  return(
    <section className="footer">
      <p className="item-left">2 items left</p>
      <ul className="status">
        <li>All</li>
        <li>Active</li>
        <li>Completed</li>
      </ul>
    </section>
  )
}

export default Footer