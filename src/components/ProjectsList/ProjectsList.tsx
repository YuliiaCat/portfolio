import { Project } from '../../types/project';
import ProjectItem from '../ProjectItem/ProjectItem';
import style from './ProjectsList.module.scss';

export interface Props {
  data: Project[];
}

const ProjectsList: React.FC<Props> = ({ data }) => {
  return (
    <>
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
    </>
  );
}

export default ProjectsList;