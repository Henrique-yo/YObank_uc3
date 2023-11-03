import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import Styles from '../css/Header.module.css'
import Logo from '../img/YOcoin.png'
import Form from '../pages/Form';

const Header2 = () => (
        
    <header>
         
         <section className={Styles.cont}>
            <img src={Logo} alt='logo' />
            <nav>
                <ul>
                    <li>
                        <ScrollLink to="section1" smooth={true} duration={500}>
                            Home
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="section3" smooth={true} duration={500}>
                            Criptos
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="section4" smooth={true} duration={500}>
                            Segurança
                        </ScrollLink>
                    </li>
                    <li>
                        <RouterLink to="/form" className={Styles.link_router} >
                            Entrar
                        </RouterLink>
                    </li>
                </ul>
            </nav>
         </section>
        
    </header>
    
   );

export default Header2