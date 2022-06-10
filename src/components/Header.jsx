import React from 'react'

function Header({ text, bgColor, textColor }) {
 const styled = {
    backgroundColor: bgColor,
    color: textColor
  }
  return (
    <header style={styled}>
      <div className='container'>
        <h1 >{text} </h1>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'feedback ui',
  bgColor: 'rgba(0,0,0,0.2)',
  textColor: 'green'
}



export default Header