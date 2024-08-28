import { Project } from "../../types/project";
import style from './ProjectItem.module.scss';

export interface Props {
  project: Project;
}

const ProjectItem: React.FC<Props> = ({ project }) => {
  const { id, name, description, skills, demo, repository, image} = project;

  return (
    <div className={style.card}>
      
    </div>
  );
}

export default ProjectItem;