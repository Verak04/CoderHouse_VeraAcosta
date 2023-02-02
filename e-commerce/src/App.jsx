import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { ItemListContainer } from './components/CompContenedor/CompContenedor'
import NavBar from './components/NavBar/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <NavBar />
     <ItemListContainer texto='Bienvenidos a la tienda'/>
     <ItemListContainer texto='V&V'/>
    </div>
  )
}

export default App
