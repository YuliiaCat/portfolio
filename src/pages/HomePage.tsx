import { useEffect, useState } from "react"
import About from "../components/About/About"
import ProjectsList from "../components/ProjectsList/ProjectsList"
import Sidebar from "../components/Sidebar/Sidebar"
import Skills from "../components/Skills/Skills"
import { getProjects } from "../services/projects"
import iziToast from "izitoast"
import { Project } from "../types/project"


const HomePage = () => {
  const [data, setData] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await getProjects();
        setData(result);
      } catch (err) {
        iziToast.error({
          title: 'Error',
          message: 'Can\'t load data at the moment',
          position: 'topRight',
        });
        console.log(err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Sidebar />
      <About />
      <Skills />
      <ProjectsList data={data} />
    </>
  );
}

export default HomePage;