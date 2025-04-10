import React from 'react'
import Navbar from './components/Navbar'
import { Route,Routes } from 'react-router-dom'
import AddJobForm from './components/AddJobForm'
import Jobs from './pages/Jobs'
import AppliedJob from './pages/AppliedJob'
import Home from './pages/Home'
import About from './pages/About'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/jobs' element={<Jobs/>}/>
        <Route path='/add-job' element={<AddJobForm/>}/>
        <Route path='/applied' element={<AppliedJob/>}/>
      </Routes>
    </div>
  )
}

export default App