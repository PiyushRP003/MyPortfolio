import LogoSection from "./section/LogoSection"
import NavBar from "./components/NavBar"
import Hero from "./section/Hero"
import ShowCaseSection from "./section/ShowCaseSection"


const App = () => {
  return (
    <>
      <NavBar/>
      <Hero />
      <ShowCaseSection/>
      <LogoSection/>
    </>
  )
}

export default App
