import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Results from './pages/Results.jsx'
import Laws from './pages/Laws.jsx'
import ChatBot from './components/ChatBot.jsx'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/laws" element={<Laws />} />
      </Routes>
      <ChatBot />
    </>
  )
}
