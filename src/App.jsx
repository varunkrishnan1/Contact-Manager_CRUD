import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'


function App() {


  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
      </Routes>
    </>
  )
}

export default App
