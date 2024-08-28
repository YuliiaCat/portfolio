import { Link } from 'react-router-dom';
import style from './Sidebar.module.scss';

const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <h1 className={style.title}>Yuliia Berezniak</h1>
      <p className={style.text}>Frontend developer</p>
      <p className={style.descr}>I build pixel-perfect, engaging, and accessible digital experiences.</p>
      <div className={style.linksList}>
        <Link className={style.link} to={'https://github.com/YuliiaCat'}>
          <svg className={style.icon}>
            <use href="img/icons.svg#icon-github"></use>
          </svg>
        </Link>
        <Link className={style.link} to={'https://www.linkedin.com/in/yuliia-berezniak/'}>
          <svg className={style.icon}>
            <use href="img/icons.svg#icon-linkedin"></use>
          </svg>
        </Link>
        {/* <Link className={style.link} to={'kotyuliya24@gmail.com'}'>
          <svg className={style.icon}>
            <use href="img/icons.svg#icon-gmail"></use>
          </svg>
        </Link> */}
        <Link className={style.link} to={'https://t.me/Yuliia_Catt'}>
          <svg className={style.icon}>
            <use href="img/icons.svg#icon-telegram"></use>
          </svg>
        </Link>
      </div>

    </div>
    
  );
}

export default Sidebar;