import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext.js';
import { translations } from '../localisation.js';
import './contact.css';

import linkedin_icon from '../linkedin-161-svgrepo-com.svg'
import github_icon from '../github-svgrepo-com.svg'

function Contact() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const linkedin_url = 'https://www.linkedin.com/in/lucas-colli-guzelotto-0b2560393/'
  const github_url = 'https://github.com/Tesma'
  const page_name = 'Lucas - ' + t.contact

  return (
    <div id='contact'>
        <title>{page_name}</title>
        <div id='email'>
            <h2>E-mail</h2>
            <h1>lucollguz25@outlook.com</h1>
        </div>
        <h2>{t.socials}</h2>
        <div id='socials'>
            <button onClick={() => window.open(linkedin_url, '_blank')}><img src={linkedin_icon} className='blocked-img' alt='Linkedin'></img></button>
            <button onClick={() => window.open(github_url, '_blank')}><img src={github_icon} alt='Github' className='blocked-img'></img></button>
        </div>
    </div>
  )
}

export default Contact