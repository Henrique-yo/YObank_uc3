import Styles from '../css/Main.module.css'
import Logo from '../img/YOcoin (2).png'
import Curre from '../img/img_currency.png'
import { BiCoinStack } from 'react-icons/bi';
import { TbReceiptTax } from 'react-icons/tb';
import { BiSupport } from 'react-icons/bi';
import { AiOutlineSafetyCertificate } from 'react-icons/ai';
import { GiPadlock } from 'react-icons/gi';
import btc from '../img/btc-logo.png'
import eth from '../img/ETH-icon.png'
import Avax from '../img/avax-logo.png'
import USDC from '../img/usd-coin.png'
import lite from '../img/Litecoin.png'
import bnb from '../img/bnb-logo.png'
import sol from '../img/Solana.png'
import tether from '../img/tether.png'
import doge from '../img/dogecoin.png'
import seguranca from '../img/seguranca.png'




function Main(){
    return(
        <main id="secao1">
            <section className={Styles.cont_yo}>
                <section className={Styles.cont_me}>
                    <img src={Logo} alt='logo' className={Styles.cont_img_yo}/>
                    <h1>
                        O seu portal seguro para o mundo das criptomoedas!
                    </h1>
                    <p>
                        Bem-vindo à YUcrypto! Oferecemos uma experiência segura e fácil para adquirir
        ativos digitais, com uma equipe experiente e plataforma intuitiva, incentivando o
        investimento responsável no futuro financeiro.
                    </p>
                    <div className={Styles.cont_btn}>
                        <button className={Styles.btn}>Abra sua conta</button>
                    </div>
                </section>

                <img src={Curre} alt='logo' className={Styles.img_curre}/>

            </section>
            <secction className={Styles.cont_infos}>
                <article className={Styles.infos}>
                <div className={Styles.cent_head}>
                <BiCoinStack className={Styles.icon}/>
                        <h1>
                            Mais de 60 criptoativos
                        </h1>
                    </div>
                    <p>
                        Encontre as criptomoedas mais negociadas do mundo acusto real e com máxima liquidez, mesmo para     negociações de grandes volumes. Bitcoin e Ethereum disponíveis com pares BRL ou USDT.
                    </p>
                </article>
                <article className={Styles.infos}>
                <div className={Styles.cent_head}>
                        <TbReceiptTax className={Styles.icon}/>
                        <h1>
                        Taxas mínimas
                        </h1>
                    </div>
                    <p>
                    Corretagem a partir de apenas 0,25% a cada compra ou venda, custo zero para armazenar suas criptomoedas e tarifas reduzidas se quiser transferir seus ativos para outra carteira.
                    </p>
                </article>
                <article className={Styles.infos}>
                    <div className={Styles.cent_head} >
                        <BiSupport className={Styles.icon}/>
                        <h1>
                        Suporte personalizado
                        </h1>
                    </div>
                    <p>
                    Aproveite o melhor atendimento entre as exchanges no Brasil. Nossa equipe de Suporte está sempre pronta para te ajudar todos os dias, via email ou chat.
                    </p>
                </article>
            </secction>
            <section className={Styles.cont_cript}>
                <h1>Criptomoedas populares</h1>
                <section className={Styles.cripto}>
                    <table>
                        <thead>
                            <tr>
                                <td>Nome</td>
                                <td>Últimos Preço</td>
                                <td>Variação 24h</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <div className={Styles.cont_coins}>
                                    <img src={btc} className={Styles.coins} alt='logo avax'/>
                                    <td>bitcoin</td>
                                </div>
                                
                                <td>R$ 135.859,00</td>
                                <td>+1,14%</td>
                            </tr>
                            <tr>
                                <div className={Styles.cont_coins}>
                                    <img src={tether} className={Styles.coins} alt='logo avax'/>
                                  <td>Tether</td>  
                                </div>
                                
                                <td>R$ 5,08</td>
                                <td>+0,62%</td>
                            </tr>
                            <tr>
                                <div className={Styles.cont_coins}>
                                    <img src={eth} className={Styles.coins} alt='logo avax'/>
                                    <td>Ethereum</td>
                                </div>
                                
                                <td>R$ 7.848,28</td>
                                <td>+2,07%</td>
                            </tr>
                            <tr>
                                <div className={Styles.cont_coins}>
                                    <img src={USDC} className={Styles.coins} alt='logo avax'/>
                                    <td>USDC</td>
                                </div>
                                
                                <td>R$ 5,08</td>
                                <td>+0,64%</td>
                            </tr>
                            <tr>
                                <div className={Styles.cont_coins}>
                                    <img src={Avax} className={Styles.coins} alt='logo avax'/>
                                    <td> Avalanche</td>
                                </div>
                                
                                <td>R$ 447,67</td>
                                <td>-4,98%</td>
                            </tr>
                            <tr>
                                <div className={Styles.cont_coins}>
                                    <img src={lite} className={Styles.coins} alt='logo avax'/>
                                    <td>Litecoin</td>
                                </div>
                                
                                <td>R$ 311,90	</td>
                                <td>+1,10%</td>
                            </tr>
                            <tr>
                                <div className={Styles.cont_coins}>
                                    <img src={bnb} className={Styles.coins} alt='logo avax'/>
                                    <td>BNB</td>
                                </div>
                                
                                <td>R$ 1.044,62	</td>
                                <td>+1,17%</td>
                            </tr>
                            <tr>
                                <div className={Styles.cont_coins}>
                                    <img src={sol} className={Styles.coins} alt='logo avax'/>
                                    <td>Solana</td>
                                </div>
                                
                                <td>R$ 109,51	</td>
                                <td>+2,51%</td>
                            </tr>
                            <tr>
                                <div className={Styles.cont_coins}>
                                    <img src={doge} className={Styles.coins} alt='logo avax'/>
                                  <td>Dogecoin</td>  
                                </div>
                                
                                <td>R$ 0,29	</td>
                                <td>+1,82%</td>
                            </tr>
                        </tbody> 
                    </table>
                </section>
            </section>
            <section className={Styles.seg}>
                <h1>
                    A corretora cripto mais segura e confiável
                </h1>
                <p>
                    Aqui na Binance, a segurança do usuário é nossa prioridade. Contamos com protocolos confiáveis e as melhores medidas técnicas de segurança do setor.
                </p>
            </section>


            <section className={Styles.cont_seg}>
                <section className={Styles.cont_article_seg}>
                    <div>
                        <article className={Styles.article_seg}>
                            <div className={Styles.titulo_seg}>
                                <AiOutlineSafetyCertificate/>
                                <h1>
                                    Segurança total com nossos usuarios
                                </h1>
                            </div>
                            <p>
                                Práticas como autenticação de dois fatores (2FA), senhas fortes e únicas, verificação de autenticidade dos sites e uso de carteiras seguras, como as de hardware, são cruciais para proteger ativos e garantir uma experiência segura ao lidar com criptomoedas. Educação contínua sobre práticas de segurança
                            </p>
                        </article>
                        <article className={Styles.article_seg}>
                            <div className={Styles.titulo_seg}>
                                <GiPadlock/>
                                <h1>
                                    Criptografia de Dados Avançada
                                </h1>
                            </div>
                            <p>
                                Suas transações são seguramente criptografadas, garantindo exclusividade no acesso às suas informações pessoais.
                            </p>
                        </article>
                    </div>  
                </section>
                <img src={seguranca} alt='imagem segurança' />
            </section>
        </main>
    )
}

export default Main