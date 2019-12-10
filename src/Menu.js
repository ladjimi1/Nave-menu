import React from 'react'
import './App.css'
const Menu = (props) => {
    return(
        props.items.map(el => (
            <li><a href={el.link}>{el.title}</a>
                {el.subMenu && <ul className="submenu">{el.subMenu.map(el => <li>{el}</li>)}</ul>}
            </li>
            
        ))
    )
}

export default Menu;