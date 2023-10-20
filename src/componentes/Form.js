import Styles from '../css/Form.module.css'
import { HiOutlineUserCircle } from 'react-icons/hi';
import { BsEnvelopeAt } from 'react-icons/bs';
import { BsLockFill } from 'react-icons/bs';


function Form(){
    return(
        <section className={Styles.container}>
            <div className={Styles.cont_form}>
                <form className={Styles.form}>
                    <h2>
                        Cadastrar
                    </h2>
                
                    <label for="nome">
                        Nome
                    </label>
                    <div className={Styles.cont_input}>
                        <HiOutlineUserCircle/>
                        <input type="text" for="nome" placeholder="Nome" className={Styles.input} />
                    </div>
                    
                    <label>
                        Email
                    </label>
                    <div className={Styles.cont_input}>
                        <BsEnvelopeAt/>
                        <input type="email" placeholder="Email" className={Styles.input}/>   
                    </div>
                    <label>
                        Senha
                    </label>
                    <div className={Styles.cont_input}>
                        <BsLockFill/>
                        <input type="password" placeholder="Senha" className={Styles.input} />
                    </div>
                    <div className={Styles.btn}>
                        <button>Cadastrar</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Form