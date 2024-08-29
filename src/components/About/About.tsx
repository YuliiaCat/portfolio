import style from './About.module.scss';

const About = () => {
  return (
    <section id='about'>
      <h2 className='section-title'>About</h2>
      <div className='section'>
        <p className={style.passage}>I’m passionate about <span className={style.highlight}>building accessible user interfaces</span> that combine <span className={style.highlight}>great design with solid engineering.</span></p>
        <p className={style.passage}>My main focus is to <span className={style.highlight}>create user interfaces that are both accessible and user-friendly, </span>aiming to provide an excellent experience for everyone. My work is driven by a passion for blending elegant design with practical engineering, ensuring that each project is not only visually appealing but also performs optimally.</p>
        <p className={style.passage}>I have <span className={style.highlight}>completed 9 projects</span> and am currently working on 3 projects, 2 of which are volunteer initiatives. This reflects my <span className={style.highlight}>commitment to continuous learning and community involvement.</span> I am also actively developing new skills and tackling exciting challenges in various areas of front-end development.</p>
      </div>
    </section>
  );
}

export default About;