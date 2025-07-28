import './App.css'
import Header from './components/common/Header'
import ItineraryDisplay from './pages/ItineraryDisplay' // Renamed for clarity
import Footer from './components/common/Footer'

function App() {
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <Header />
        <main className='flex-1'>
          <ItineraryDisplay />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App