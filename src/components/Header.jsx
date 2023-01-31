import { FaTwitch, FaInstagram, FaGithub } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';

function Header () {
   return(
     <header>
        <section>
          <h2>LOGO TESTE</h2>
        </section>
        
        <a href="https://github.com/SoulPlayerZ" target="_blank" rel="noreferrer noopener">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/wellington-fonseca-52032b1a4/" target="_blank" rel="noreferrer noopener">
          <AiFillLinkedin />
        </a>
        <a href="https://www.instagram.com/thyrsokof/?theme=dark" target="_blank" rel="noreferrer noopener">
          <FaInstagram />
        </a>
        <a href="https://www.twitch.tv/soulplayer_z" target="_blank" rel="noreferrer noopener">
          <FaTwitch />
        </a>
     </header> 
   )
}

export default Header;