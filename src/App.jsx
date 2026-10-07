import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Lancamentos from './components/Lancamentos'
import ProximoJogo from './components/ProximoJogo'
import Estatisticas from './components/Estatisticas'
import Lojas from './components/Lojas'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Lancamentos />
      <ProximoJogo />
      <Estatisticas />
      <Lojas />
      <Footer />
    </>
  )
}

export default App