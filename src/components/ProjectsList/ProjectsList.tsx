import { Project } from '../../types/project';
import { useEffect, useState } from "react";
import iziToast from "izitoast"
import ProjectItem from '../ProjectItem/ProjectItem';
import style from './ProjectsList.module.scss';
import { getProjects } from '../../services/projects';

const ProjectsList = () => {
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
    <section id='projects'>
      <h2 className="section-title">Projects</h2>
      <div className="section">
        <ul className={style.list}>
          {data.map(project => (
            <li key={project.id}>
              <ProjectItem project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ProjectsList;