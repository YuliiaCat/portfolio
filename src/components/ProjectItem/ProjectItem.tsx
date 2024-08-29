import { Link } from "react-router-dom";
import { Project } from "../../types/project";
import style from './ProjectItem.module.scss';

export interface Props {
  project: Project;
}

const ProjectItem: React.FC<Props> = ({ project }) => {
  const { name, description, skills, demo, repository, image} = project;

  return (
    <div className={style.card}>
      <div className={style.content}>
        <div className={style.info}>
          <h3 className={style.name}>{name}</h3>
          <p className={style.descr}>{description}</p>
        </div>
        <ul className={style.skills}>
          {skills.map((skill, index) => (
            <li className={style.skill} key={skill + index}>{skill}</li>
          ))}
        </ul>
        <div className={style.links}>
          <Link className={style.link} target="_blank" to={demo}>
            <svg className={style.icon}>
              <use href="img/icons.svg#icon-link"></use>
            </svg>
            <p className={style.text}>
              Demo
            </p>
          </Link>
          <Link className={style.link} target="_blank" to={repository}>
          <svg className={style.icon}>
              <use href="img/icons.svg#icon-folder"></use>
            </svg>
            <p className={style.text}>
              Project Layout
            </p>
          </Link>
        </div>
      </div>
      <Link className={style.linkImg} to={demo}>
        <img className={style.img} src={image} alt={name} />
      </Link>
    </div>
  );
}

export default ProjectItem;