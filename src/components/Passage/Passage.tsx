import style from './Passage.module.scss';

const Passage = () => {
  return (
    <footer className="section">
      <p className={style.text}>Loosely designed in <span className={style.highlight}>Figma</span> and coded in <span className={style.highlight}>Visual Studio Code</span> by yours truly. Built with <span className={style.highlight}>React.js</span> and <span className={style.highlight}>SASS</span>, deployed with <span className={style.highlight}>Vercel</span>. All text is set in the <span className={style.highlight}>Raleway</span> typeface.</p>
    </footer>
  );
}

export default Passage;