import React from 'react'
import Navbar from './components/Navbar'
import { Route,Routes } from 'react-router-dom'
import AddJobForm from './components/AddJobForm'
import Jobs from './pages/Jobs'
import Home from './pages/Home'
import About from './pages/About'
import JobStatus from './pages/JobStatus'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/jobs' element={<Jobs/>}/>
        <Route path='/add-job' element={<AddJobForm/>}/>
        <Route path='/job-status' element={<JobStatus/>}/>
      </Routes>
    </div>
  )
}

export default App