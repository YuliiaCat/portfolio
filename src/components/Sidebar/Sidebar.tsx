import { Link } from 'react-router-dom';
import style from './Sidebar.module.scss';
import classNames from 'classnames';
import { useEffect, useState } from 'react';


const sections = [
  { id: 'about', threshold: 1 },
  { id: 'skills', threshold: 1 },
  { id: 'projects', threshold: 0.2 },
];

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observers = sections.map(({ id, threshold }) => {
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold,
      };

      const observer = new IntersectionObserver(handleIntersection, observerOptions);
      const element = document.getElementById(id);

      if (element) observer.observe(element);

      return { observer, id };
    });

    return () => {
      observers.forEach(({ observer, id }) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const getStyledLink = (id: string) =>
    classNames(style.sectionLink, {
      [style.isActive]: id === activeSection,
    });

  return (
    <div className={style.sidebar}>
      <div className={style.content}>
        <h1 className={style.title}>Yuliia Berezniak</h1>
        <p className={style.text}>Frontend developer</p>
        <p className={style.descr}>I build pixel-perfect, engaging, and accessible digital experiences.</p>
        <ul className={style.sections}>
          <li className={style.sectionName}>
            <a className={getStyledLink('about')} href="#about">
              <span className={style.line}></span>
              <span>About</span>
            </a>
          </li>
          <li className={style.sectionName}>
            <a className={getStyledLink('skills')} href="#skills">
              <span className={style.line}></span>
              <span>Skills</span>
            </a>
          </li>
          <li className={style.sectionName}>
            <a className={getStyledLink('projects')} href="#projects">
            <span className={style.line}></span>
            <span>Projects</span>
            </a>
          </li>
        </ul>
      </div>
      <div className={style.linksList}>
        <Link className={style.link} target="_blank" to={'https://github.com/YuliiaCat'}>
          <svg className={style.icon}>
            <use href="img/icons.svg#icon-github"></use>
          </svg>
        </Link>
        <Link className={style.link} target="_blank" to={'https://www.linkedin.com/in/yuliia-berezniak/'}>
          <svg className={style.icon}>
            <use href="img/icons.svg#icon-linkedin"></use>
          </svg>
        </Link>
        <a className={style.link} href="mailto:kotyuliya24@gmail.com">
          <svg className={style.icon}>
            <use href="img/icons.svg#icon-gmail"></use>
          </svg>
        </a>
        <Link className={style.link} target="_blank" to={'https://t.me/Yuliia_Catt'}>
          <svg className={style.icon}>
            <use href="img/icons.svg#icon-telegram"></use>
          </svg>
        </Link>
      </div>

    </div>
    
  );
}

export default Sidebar;