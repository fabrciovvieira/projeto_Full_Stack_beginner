import React from 'react'
import './About.css'
import asp from '../../public/foto-asp.png'
import sede from '../../public/foto-sede.png'

const About = () => {
  return (
    <div className='container-about'>
        <div className="head-about">
          <h1>TITULO DO TEXTO</h1>
        </div>
          <div className="sub-about">
            <span className="subtitulos-about">FRASES HISTORICAS |</span>
            <span className="subtitulos-about"> FRASES HISTORICAS |</span>
            <span className="subtitulos-about"> FRASES HISTORICAS |</span>
            <span className="subtitulos-about"> FRASES HISTORICAS</span>
          </div>
          <div className="history">
            <div className="part-one">
              <div className="row-text">
                <p>Em uma tarde ensolarada de verão, uma brisa suave acaricia as folhas das árvores enquanto os pássaros cantam alegremente. No horizonte, as montanhas se erguem majestosas, pintadas com os tons dourados do pôr do sol. É um cenário de paz e tranquilidade, onde a natureza reina soberana.</p>
                <br />
                <p className='second-ph'>Neste lugar mágico, os sonhos ganham vida e as aventuras se desenrolam. Cada trilha esconde segredos antigos e cada riacho murmura histórias do passado. É um convite para explorar, para descobrir o desconhecido e se perder na imensidão da natureza. É um convite para explorar, para descobrir o desconhecido e se perder na imensidão da natureza.</p>
                <p className='third-ph'>Os dias passam lentamente, marcados pelo ritmo tranquilo da vida no campo. As horas são gastas contemplando as estrelas no céu noturno e os momentos são saboreados com a simplicidade de um sorriso. É uma vida de paz e harmonia, longe do caos da cidade e das preocupações do mundo moderno. É uma vida de paz e harmonia, longe do caos da cidade e das preocupações do mundo moderno.</p>
              </div>
              <div className="image-about">
                <img className='aspirant-foto' src={asp} alt="" />
              </div>
            </div>
            <p className='middle-text'>Em uma tarde ensolarada de verão, uma brisa suave acaricia as folhas das árvores enquanto os pássaros cantam alegremente. Em uma tarde ensolarada de verão, uma brisa suave acaricia as folhas das árvores enquanto os pássaros cantam alegremente.</p>
            <div className="next-row-text">
              <div className="second-image-about">
                <img className='sede-foto' src={sede} alt="" />
              </div>
              <div className="last-text-row">
                <p>Neste refúgio da civilização, o tempo parece desacelerar e as preocupações se dissipam. Aqui, o importante é viver o momento presente, aproveitando cada instante como se fosse o último. Neste refúgio da civilização, o tempo parece desacelerar e as preocupações se dissipam. Aqui, o importante é viver o momento presente, aproveitando cada instante como se fosse o último. É uma lição valiosa, ensinada pela natureza, sobre a verdadeira essência da vida.</p>
                <br />
                <p>Neste refúgio da civilização, o tempo parece desacelerar e as preocupações se dissipam. Aqui, o importante é viver o momento presente, aproveitando cada instante como se fosse o último.Neste refúgio da civilização, o tempo parece desacelerar e as preocupações se dissipam. Aqui, o importante é viver o momento presente, aproveitando cada instante como se fosse o último. É uma lição valiosa, ensinada pela natureza, sobre a verdadeira essência da vida.</p>
              </div>
            </div>
          </div>
    </div>
  )
}

export default About