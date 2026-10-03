import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import CreateIncident from './pages/CreateIncident'
import Troubleshoot from './pages/Troubleshoot'
import Equipment from './pages/Equipment'
import About from './pages/About'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/incidents/new" element={<CreateIncident />} />
        <Route path="/troubleshoot" element={<Troubleshoot />} />
        <Route path="/equipment" element={<Equipment />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  )
}
