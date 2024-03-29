import React from 'react'
import { Route } from 'react-router-dom'
import ChatPage from './pages/ChatPage'
import HomePage from './pages/HomePage'
import './App.css'
const App = () => {
  return (
    <div className='App'>
      <Route path = "/" component = {HomePage} exact/> 
      <Route path = "/chats" component = {ChatPage} />
    </div>
  )
}

export default App