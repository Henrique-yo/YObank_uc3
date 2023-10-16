import Styles from '../css/Header.module.css'
import Logo from '../img/YOcoin.png'

function Header(){
    return(
        <header>
            <section className={Styles.cont}>
                <img src={Logo} alt='logo' />
                <nav>
                    <ul>
                        <li>Home</li>
                        {/* <li>Infos</li> */}
                        <li>Criptos</li>
                        <li>Segurança</li>
                        <li>Entrar</li>
                    </ul>
                </nav>
            </section>
        </header>
    )
}

export default Header