import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import './font/impact.ttf'

const App = () => {
    return(
        <div className="app-container">
            <Navbar />
            <Main />
        </div>
    )
}

export default App;