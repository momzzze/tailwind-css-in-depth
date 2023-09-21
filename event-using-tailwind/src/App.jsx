import './App.css'
import DarkMode from './components/DarkMode/DarkMode'
import Footer from './components/Footer/Footer'
import HeadlinerSection from './components/HeadlinerSection/HeadlinerSection'
import HeroSection from './components/HeroSection/HeroSection'
import Lineup from './components/Lineup/Lineup'
import TicketsTable from './components/TicketsTable/TicketsTable'
import NavBar from './components/navbar/NavBar'

function App() {
 
  return (
    <>
      <main className='bg-zinc-200 dark:bg-zinc-900'>
        <header className='text-white' id='home'>
          <DarkMode />
          <NavBar />
          <HeroSection />
        </header>
        <div className='max-w-screen-lg mx-auto mt-20 text-zinc-900 dark:text-zinc-200 mb-12'>
          <div className='w-80%' id='headliners'>
            <HeadlinerSection />
          </div>
          <div className='w-80%' id='lineup'>
            <Lineup />
          </div>
          <div className='w-80% h-[60vh] overflow-auto' id='tickets'>
            <TicketsTable />
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}
export default App
