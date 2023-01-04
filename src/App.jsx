import Header from './Header'
import Home from './Home'
import AddToy from './AddToy'

import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/toys/new" element={<AddToy />} />
      </Routes>
    </div>
  )
}

export default App