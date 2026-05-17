import './header.css';
import { translations } from './localisation.js'
import { useContext } from 'react'; 
import { LanguageContext } from './LanguageContext';
import { Link } from 'react-router-dom';

function Portifolioheader() {
  const { language, setLanguage } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <header>
      <div className='header-in'>
        <img src="./me-logo.png" className='blocked-img' alt="logo" />
        <div className='header-buttons'>
          <Link to="/about" className='header-button'>{t.about}</Link>
          <Link to="/contact" className='header-button'>{t.contact}</Link>
        </div>
        <div className='langs'>
          <button 
            id='pt'
            className='header-button'
            className={language === 'pt' ? 'button-selected' : ''}
            onClick={() => setLanguage('pt')}
          >
            PT
          </button> 
          |
          <button 
            id='en'
            className={language === 'en' ? 'button-selected' : ''}
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
}

export default Portifolioheader;