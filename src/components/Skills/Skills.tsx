import style from './Skills.module.scss';

const Skills = () => {
  return (
    <div className='section'>
      <h2 className='section-title'>Skills</h2>
      <div className={style.skills}>
        <ul className={style.list}>
          <li className={style.item}>
            <ul className={style.sublist}>
              <li className={style.subitem}>HTML5</li>
              <li className={style.subitem}>CSS</li>
              <li className={style.subitem}>SASS</li>
              <li className={style.subitem}>JavaScript</li>
              <li className={style.subitem}>BEM</li>
              <li className={style.subitem}>Bulma</li>
              <li className={style.subitem}>Tailwind</li>
            </ul>
          </li>
          <li className={style.item}>
            <ul className={style.sublist}>
              <li className={style.subitem}>React</li>
              <li className={style.subitem}>Next</li>
              <li className={style.subitem}>Redux</li>
              <li className={style.subitem}>TypeScript</li>
              <li className={style.subitem}>Axios</li>
            </ul>
          </li>
        </ul>
        <ul className={style.list}>
          <li className={style.item}>
            <ul className={style.sublist}>
              <li className={style.subitem}>Git</li>
              <li className={style.subitem}>NPM</li>
              <li className={style.subitem}>Vite</li>
              <li className={style.subitem}>GitHub</li>
              <li className={style.subitem}>GitLab</li>
            </ul>
          </li>
          <li className={style.item}>
            <ul className={style.sublist}>
              <li className={style.subitem}>VS Code</li>
              <li className={style.subitem}>Figma</li>
              <li className={style.subitem}>Jira</li>
              <li className={style.subitem}>Agile</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;