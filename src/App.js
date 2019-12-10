import React from 'react';
import Menu from './Menu'
import './App.css';

const menuItems = [
  {
    title: 'Home',
    link: '#',
    active: true
  },
  {
    title: 'Services',
    link: '#',
    active: false,
    subMenu: ['For entrepreuneurs', 'For students', 'For Hobbysist']
  },
  {
    title: 'Contact',
    link: '#',
    active: false
  },
]

function App() {
  return (
    <div className="Nav-menu">
      <Menu items={menuItems}/>
    </div>
  );
}

export default App;
