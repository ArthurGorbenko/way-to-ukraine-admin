import { Routes, Route } from 'react-router-dom'
import { Register } from '@/features/auth'

function App() {
  return (
    <Routes>
      <Route path='/register' element={<Register />} />
    </Routes>
  )
}

export default App
