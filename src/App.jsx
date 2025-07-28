import LogoSection from "./section/LogoSection"
import NavBar from "./components/NavBar"
import Hero from "./section/Hero"
import ShowCaseSection from "./section/ShowCaseSection"
import FeatureCards from "./section/FeatureCards"
import Experience from "./section/Experience"
import TechStack from "./section/TechStack"
import Contact from "./section/Contact"
import Footer from "./section/Footer"


const App = () => {
  return (
    <>
      <NavBar/>
      <Hero />
      <ShowCaseSection/>
      <LogoSection/>
      <FeatureCards/>
      <Experience/>
      <TechStack/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
