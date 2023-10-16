import Styles from '../css/Footer.module.css'
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
                        <li>Home</li>
                        {/* <li>Infos</li> */}
                        <li>Criptos</li>
                        <li>Segurança</li>
                    </ul>
            </footer>
        </>
        
    )
}

export default Footer