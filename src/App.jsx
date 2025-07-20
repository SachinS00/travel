import { useState } from 'react'
import './App.css'
import Header from './components/common/Header'
import ItineraryForm from './pages/ItineraryForm'
import Preview from './pages/Preview'
import Footer from './components/common/Footer'

function App() {
  const [currentPage, setCurrentPage] = useState('form')
  const [formData, setFormData] = useState(null)

  const navigateToPreview = (data) => {
    setFormData(data)
    setCurrentPage('preview')
  }

  const navigateToForm = () => {
    setCurrentPage('form')
  }

  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <Header />
        <main className='flex-1'>
          {currentPage === 'form' ? (
            <ItineraryForm onPreview={navigateToPreview} />
          ) : (
            <Preview formData={formData} onBack={navigateToForm} />
          )}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
