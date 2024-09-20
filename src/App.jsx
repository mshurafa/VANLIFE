import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import MenuApp from './MenuApp'
import FolderManger from './FolderManger'
import VanLifeApp from './VanLifeApp'

const App = () => {
    return (
        <BrowserRouter>
            {/* <Link to="/">Home</Link>
            <Link to='/FolderManger'>FolderManger</Link> */}
            <Routes>
                <Route path='/' element={<VanLifeApp />} />
                {/* <Route path='/FolderManger' element={<FolderManger />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default App
