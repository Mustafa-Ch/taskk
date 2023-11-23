import React from 'react'
import Navbar from './Navbar'
import Slider from './Slider'
import Card from './Card'
import { Provider } from 'react-redux';
import store from './Store';
function App() {
  return (
    <div>
    <Provider store={store}>
    <Navbar/>
      <Slider/>
      <Card/>
    </Provider>
    </div>
  )
}

export default App
