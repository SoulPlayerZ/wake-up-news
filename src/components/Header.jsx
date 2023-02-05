import { FaTwitch, FaInstagram, FaGithub } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import "../css/header.css";

function Header () {
 
  return(
    <header>
      <section className="logo">
        <a href="#home" className='logo-link'> <h1>Wake Up News</h1></a>
      </section>

      <nav>
        <a href="https://github.com/SoulPlayerZ" target="_blank" rel="noreferrer noopener" className='social-icon'>
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/wellington-fonseca-52032b1a4/" target="_blank" rel="noreferrer noopener" className='social-icon'>
          <AiFillLinkedin />
        </a>
        <a href="https://www.instagram.com/thyrsokof/?theme=dark" target="_blank" rel="noreferrer noopener" className='social-icon'>
          <FaInstagram />
        </a>
        <a href="https://www.twitch.tv/soulplayer_z" target="_blank" rel="noreferrer noopener" className='social-icon'>
          <FaTwitch />
        </a>
      </nav>  
    </header> 
   )
}

export default Header;