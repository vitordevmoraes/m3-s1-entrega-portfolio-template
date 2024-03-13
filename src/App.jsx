import { Header } from "./Components/Header";
import { BannerSection } from "./Components//Section/BannerSection";
import { AboutMeSection } from "./Components/Section/AboutMeSection";
import { TechSection } from "./Components/Section/TechSection";
import { ProjectsSection } from "./Components/Section/ProjectsSection";
import { Footer } from "./Components/Footer";
import "./Styles/styles.css";
import "./Styles/index.css";

function App() {

  return (
    <main>
      <Header></Header>
      <BannerSection></BannerSection>
      <AboutMeSection></AboutMeSection>
      <TechSection></TechSection>
      <ProjectsSection></ProjectsSection>
      <Footer></Footer>
    </main>
  )
}

export default App
