import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import ResumeContextResume, { resumeContext, useResume } from './ResumeContextResume'
import Portrait from './components/Portrait'
import Career from './components/Career'
import Partners from './components/Partners'
import Season from './components/Season'
import Team from './components/Team'
import Footer from './components/Footer'


const App = () => {

  return (
    <div >
      <ResumeContextResume>
      <BrowserRouter>
      <Header/>
    <Routes>
      <Route path='/' element={<Portrait/>}/>
      <Route path='/car' element={<Career/>}/>
      <Route path='/par' element={<Partners/>}/>
      <Route path='/season' element={<Season/>}/>
      <Route path='/team' element={<Team/>}/>
    </Routes>
    <Footer/>
      </BrowserRouter>      
    </ResumeContextResume>
    </div>
  )
}

export default App