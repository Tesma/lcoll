// Projects.js
import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext.js';
import { translations } from '../localisation.js';
import c_cuco_2023 from '../1778438670494-4eb9b0dc-8c85-4c5c-a0c8-d719e5944a24_1.png'
import uk_flag from '../flag-for-united-kingdom-svgrepo-com.svg'
import br_flag from '../flag-for-brazil-svgrepo-com.svg'
import './about.css';

function Skill(icon, skill_name, level = null) {
  var icon_dir = ''
  var level_div = ''

  if (icon != null) {
    icon_dir = <img src={icon} alt={skill_name} className='img_icon'></img>
  }

  if (level != null) {
    level_div = <h3 className='mininame'>{level}</h3>
    skill_name += ' | '
  }


  return (
    <div id='skill'>
      <div>
        {icon_dir}
        {skill_name}
        {level_div}
      </div>
    </div>
  )
}

function Award(img, name, short_name, cat, date = null) {
  var _divimg = ''
  var _date = ''


  if (img != null) {
    _divimg = <img src={img}></img>
  }
  if (date != null) {
    _date = <h5>{date}</h5>
  }

  return (
    <div id='award'>
      <h2>{short_name}</h2>
      <h3>{name}</h3>
      {_divimg}
      <h4>{cat}</h4>
      {_date}
    </div>
  )
}

function About() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const page_name = 'Lucas - ' + t.about

  return (
    <div id='name-block'>
      <title>{page_name}</title>
      <div id='name-content'>
        <img src="./me-logo.png" className='blocked-img' alt="logo" />
        <div id='me-name'>
          <h1 id='lucas'>Lucas</h1>
          <h1 id='colli'>Colli</h1>
        </div>
      </div>
      <div id='short_about'>
        <h2>{t.short_about}</h2>
      </div>

      <div id='about'>
        <div id='about-grid'>
          <div id='skills'>
            <h1>{t.skills}</h1>
            <div id='skills-desc'>
              {Skill('./javascript-svgrepo-com.svg', 'JavaScript')}
              {Skill('./node-js-svgrepo-com.svg', 'Node.js')}
              {Skill('./react-svgrepo-com.svg', 'React')}
            </div>
          </div>
          <div id='langs'>
            <h1>{t.langs}</h1>
            <div id='langs-grid'>
              {Skill(uk_flag, t.english,t.level_intad)}
              {Skill(br_flag, t.portuguese,t.level_native)}
            </div>
          </div>
          <div id='awards'>
            <h1>{t.awards}</h1>
            <div id='awards-desc'>
              {Award(c_cuco_2023,t.cuco_name,'CUCO 2023',t.silver_cat)}
              {Award(null,t.omasp_name,'OMASP 2024',t.silver_medal)}
            </div>
          </div>
          <div id='education'>
            <h1>{t.education}</h1>
            <div id='education-desc'>
              {Award(null,t.graduation,'Anhanguera Educacional','Ciência da Computação','2026 - ' + t.current_grad)}
            </div>
          </div>


        </div>
      </div>
      <br></br>
    </div>
  );
}

export default About;

