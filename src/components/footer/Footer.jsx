import React from 'react'
import mainTrophy from '../../../public/main-throphy.svg'
import beach from '../../../public/beach-soccer-throphy.svg'
import apsirant from '../../../public/aspirant-throphy.svg'
import peixada from '../../../public/peixada.png'
import trans from '../../../public/trans.png'
import gft from '../../../public/gft.png'
import padoca from '../../../public/padoca.png'
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

import './Footer.css'

const Footer = () => {
  return (
    <div className='container-footer'>
        <div className="line-footer-trophy">
            <div className="trophy">
                <img className='trophy-img' src={mainTrophy} alt="" />
                <span className="subtitle">
                    Municipal de campo 2
                </span>
            </div>
            <div className="trophy">
                <img className='trophy-img' src={apsirant} alt="" />
                <span className="subtitle">
                    Municipal Aspirante 1
                </span>
            </div>
            <div className="trophy">
                <img className='trophy-img' src={beach} alt="" />
                <span className="subtitle">
                    Seletiva Estadual 1
                </span>
            </div>
        </div>
        <div className="line-footer">
            <div className="main-party">
                <img className='peixada-logo' src={peixada} alt="" />
            </div>
        </div>
        <div className="line-footer">
            <div className="partners">
                <div className="partner">
                    <img className='logo-partner' src={padoca} alt="" />
                </div>
                <div className="partner">
                    <img className='logo-partner' src={trans} alt="" />
                </div>
                <div className="partner">
                    <img className='logo-partner' src={gft} alt="" />
                </div>
            </div>
        </div>
        <div className="line-footer">
            <div className="info-site-club">
                <div className="container-info-footer-list">
                    <div className="list-footer">
                        <ul>
                            <li>Alugar Espaço</li>
                            <li>Políticas da Associação</li>
                            <li>Associação</li>
                        </ul>
                    </div>
                    <div className="list-footer">
                        <ul>
                            <li>Faça sua doação</li>
                            <li>Vire Sócio</li>
                        </ul>
                    </div>
                </div>
                
                <div className="social-midia">
                    <FaFacebook className='logo-midia'/>
                    <FaInstagram className='logo-midia'/>
                    <FaTiktok className='logo-midia' />

                </div>

            </div>
            <div className="address">
                    <h2>Sede do Time</h2>
                    <p>Rua Ciro Magalhães</p>
                    <p>Praia da Gamboa, Garopaba/SC - Brasil</p>
                    <p>CEP: 88495-000 - Tel:(48) 3254-0000</p>
                </div>
                <div className="border-footer"></div>
            <div className="rodape">
                    <p>&copy; 2024 Associação Recreativa Cultural e Esportiva Beira Mar. Desenvolvido por <a href="#">Fabrício Vieira</a></p>
                </div>
        </div>
    </div>
  )
}

export default Footer