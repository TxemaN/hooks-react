import { useState } from 'react'
import { Buscadorr } from "./components/Buscadorr"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header className='p-5 bg-dark text-light text-center'>
   <p className='display-3'>EJERCICIO PEXELS</p>
   </header>
   <main className='container my-5 '>
   <Buscadorr/>
   </main>

   <footer className='p-5 bg-dark text-light text-center'></footer>
   </>
  )
}

export default App
