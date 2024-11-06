import '../styles/App.css'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import Goal from './Goal'
import Header from './Header'
import NavBarFix from './NavBarFix'
import Projets from './Projets'
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
      <Projets/>
      <Goal/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
