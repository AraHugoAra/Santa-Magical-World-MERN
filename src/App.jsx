import Header from './Header'
import Home from './Home'
import AddToy from './AddToy'
import Toy from './Toy'

import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/toys/new" element={<AddToy />} />
        <Route path="/toys/:toyId" element={<Toy />} />
      </Routes>
    </div>
  )
}

export default App