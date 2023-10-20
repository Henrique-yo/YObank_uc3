import { Link } from 'react-scroll';
import Styles from '../css/Header.module.css'
import Logo from '../img/YOcoin.png'

const Header2 = () => (

    <header>
         
         <section className={Styles.cont}>
            <img src={Logo} alt='logo' />
            <nav>
                <ul>
                    <li>
                        <Link to="section1" smooth={true} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="section3" smooth={true} duration={500}>
                            Criptos
                        </Link>
                    </li>
                    <li>
                        <Link to="section4" smooth={true} duration={500}>
                            Segurança
                        </Link>
                    </li>
                    <li>
                        <Link to="section" smooth={true} duration={500}>
                            Entrar
                        </Link>
                    </li>
                </ul>
            </nav>
         </section>
        
    </header>
    
   );

export default Header2