import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Solucoes from './pages/Solucoes'
import Contacto from './pages/Contacto'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solucoes" element={<Solucoes />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App