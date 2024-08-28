import { Project } from '../../types/project';
import ProjectItem from '../ProjectItem/ProjectItem';
import style from './ProjectsList.module.scss';

export interface Props {
  data: Project[];
}

const ProjectsList: React.FC<Props> = ({ data }) => {
  return (
    <div className="section">
      <h2 className="section-title">Projects</h2>
      <ul className={style.list}>
        {data.map(project => (
          <li key={project.id}>
            <ProjectItem project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectsList;