import About from "../components/About/About"
import ProjectsList from "../components/ProjectsList/ProjectsList"
import Sidebar from "../components/Sidebar/Sidebar"
import Skills from "../components/Skills/Skills"
import Passage from "../components/Passage/Passage"

const HomePage = () => {


  return (
    <div className="page-wrapper">
      <Sidebar />
      <div className="content-box">
        <About />
        <Skills />
        <ProjectsList />
        <Passage />
      </div>
    </div>
  );
}

export default HomePage;