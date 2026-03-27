import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EquipoDirectivoPage from './pages/EquipoDirectivoPage.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EquipoDirectivoPage />} />
        <Route path="/equipo-directivo" element={<EquipoDirectivoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App