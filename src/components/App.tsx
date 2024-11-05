import '../styles/App.css'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import Goal from './Goal'
import Header from './Header'
import NavBarFix from './NavBarFix'
import Portfolio from './Portfolio'
import SearchJob from './SearchJob'
import Today from './Today'

function App() {


  return (
    <>
      <Header/>
      <Today/>
      <NavBarFix/>
      <About/>
      <SearchJob/>
      <Portfolio/>
      <Goal/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
