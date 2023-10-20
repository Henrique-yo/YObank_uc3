import Styles from '../css/Footer.module.css';
import { Link } from 'react-scroll';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

function Footer(){
    return(
        <>
            <section className={Styles.conta}>
                <h1>
                    Junte-se ao futuro do dinheiro agora mesmo.
                </h1>
                <button>
                    abra sua conta
                </button>
            </section>
            
            <footer className={Styles.list_icon}>
                    <div >
                        <AiFillGithub/>
                        <AiFillLinkedin/>
                    </div>
                    <ul className={Styles.list}>
                    <li>
                        <Link to="section1" smooth={true} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="section2" smooth={true} duration={500}>
                            Criptos
                        </Link>
                    </li>
                    <li>
                        <Link to="section4" smooth={true} duration={500}>
                            Segurança
                        </Link>
                    </li>
                    </ul>
            </footer>
        </>
        
    )
}

export default Footer