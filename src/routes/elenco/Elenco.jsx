import React, { useState, useEffect } from 'react'
import beiraMarFetch from '../../axios/config'
import './Elenco.css'


const Elenco = () => {
    const [category, setCategory] = useState('veterano')
    const [elenco, setElenco] = useState([])
    const [veterano, setVeterano] = useState([])
    const [beachSoccer, setBeachSoccer] = useState([])
    const [municipal, setMunicipal] = useState([])
    const [goleiros, setGoleiros] = useState([])
    const [zagueiros, setZagueiros] = useState([])
    const [direito, setDireito] = useState([])
    const [left, setLeft] = useState([])
    const [volantes, setVolantes] = useState([])
    const [meias, setMeias] = useState([])
    const [alas, setAlas] = useState([])
    const [atacantes, setAtacantes] = useState([])
    const [pivos, setPivos] = useState([])
    const [fixos, setFixos] = useState([])
    const [coach, setCoach] = useState([])
    const [bsTreinador, setBsTreinador] = useState([])
    const [treinadorVeterano, setTreinadorVeterano] = useState([])
    const [gkVetera, setGkVetera] = useState([])
    const [gkBs, setGkBs] = useState([])




    useEffect(() => {
        const loadElenco = async () => {
          const res = await beiraMarFetch.get('/elenco')
          console.log(`Jogo: ${res.data}`)
          setElenco(res.data)
        }
     
        loadElenco()
      }, [])
    
      console.log(`elenco2: ${elenco}`)
      useEffect(() => {
        const praia = elenco.filter(jogo => (jogo.categoria === "beachSoccer"));
        const master = elenco.filter(jogo => (jogo.categoria === "veterano"));
        const campo = elenco.filter(jogo => (jogo.categoria === "municipalDeCampo"));
        const volantes = elenco.filter(jogo => (jogo.posicao === "volante"));
        const rb = elenco.filter(jogo => (jogo.posicao === "lateraldireito"));
        const gk = elenco.filter(jogo => (jogo.posicao === "goleiro"));
        const bsGk = goleiros.filter(jogo => (jogo.categoria === "veterano"));
        const vtGk = goleiros.filter(jogo => (jogo.categoria === "beachSoccer"));
        const esquerdos = elenco.filter(jogo => (jogo.posicao === "lateraldireito"));
        const meias = elenco.filter(jogo => (jogo.posicao === "meia"));
        const cb = elenco.filter(jogo => (jogo.posicao === "zagueiro"));
        const st = elenco.filter(jogo => (jogo.posicao === "atacante"));
        const coaches = elenco.filter(jogo => (jogo.posicao === "coach"));
        const coachesBs = coach.filter(jogo => (jogo.categoria === "beachSoccer"));
        const coachesVt = coach.filter(jogo => (jogo.categoria === "veterano"));
        const pivoBs = elenco.filter(jogo => (jogo.posicao === "atacante" && jogo.categoria === 'beachSoccer'));
        const alas = elenco.filter(jogo => (jogo.posicao === "ala"));
        const fixos = elenco.filter(jogo => (jogo.posicao === "fixo"));
        
        setBsTreinador(coachesBs)
        setTreinadorVeterano(coachesVt)
        setGkBs(bsGk)
        setGkVetera(vtGk)
        setBeachSoccer(praia)
        setMunicipal(campo)
        setVeterano(master)
        setAlas(alas)
        setAtacantes(st)
        setCoach(coaches)
        setDireito(rb)
        setGoleiros(gk)
        setLeft(esquerdos)
        setMeias(meias)
        setVolantes(volantes)
        setZagueiros(cb)
        setPivos(pivoBs)
        setFixos(fixos)
        
      }, [elenco])

      if(!elenco) return <div className='loading'></div>


      console.log(`Geral: ${elenco}`)
      console.log(`master: ${veterano}`)
      console.log(`praia: ${beachSoccer}`)
      console.log(`campo: ${municipal}`)
      console.log(`tabela: ${elenco}`)


    const handleChangeCategoria = (event) => {
        setCategory(event.target.value);
    };

    const renderConteudoCategoria = () => {
        switch (category) {
          case 'veterano':
            return (
              <div className='.veterano-home'>
                    <div className="title-elenco">
                        <h2>Time Veterano</h2>
                    </div>
                    <div className="grid-elenco-home">
                    <div className="position">
                                <h2>GOLEIROS</h2>
                            </div>
                        <div className="grid-elenco-pos">

                            {gkVetera.map((jogador) => (
                                <div className="all-player">
                                    <div className="players">
                                        <div className="foto-diretor">
                                            <img src={`http://localhost:3000/${jogador.photo}`} alt="" />
                                        </div>
                                        <div className="info-player">
                                            <h2>{jogador.nome}</h2>
                                            <h3>{jogador.numberShirt}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>                        <div className="position">
                                <h2>ZAGUEIROS</h2>
                            </div>
                        <div className="grid-elenco-pos">

                            {zagueiros.map((jogador) => (
                                <div className="all-player">
                                    <div className="players">
                                        <div className="foto-diretor">
                                            <img src={`http://localhost:3000/${jogador.photo}`} alt="" />
                                        </div>
                                        <div className="info-player">
                                            <h2>{jogador.nome}</h2>
                                            <h3>{jogador.numberShirt}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="position">
                                <h2>LATERAIS ESQUERDO</h2>
                            </div>
                        <div className="grid-elenco-pos">
                            
                            {left.map((jogador) => (
                                <div className="all-player">
                                    <div className="players">
                                        <div className="foto-diretor">
                                            <img src={`http://localhost:3000/${jogador.photo}`} alt="" />
                                        </div>
                                        <div className="info-player">
                                            <h2>{jogador.nome}</h2>
                                            <h3>{jogador.numberShirt}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="position">
                                <h2>LATERAIS DIREITO</h2>
                            </div>
                        <div className="grid-elenco-pos">

                            {direito.map((jogador) => (
                                <div className="all-player">
                                    <div className="players">
                                        <div className="foto-diretor">
                                            <img src={`http://localhost:3000/${jogador.photo}`} alt="" />
                                        </div>
                                        <div className="info-player">
                                            <h2>{jogador.nome}</h2>
                                            <h3>{jogador.numberShirt}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="position">
                                <h2>VOLANTES</h2>
                            </div>
                        <div className="grid-elenco-pos">

                            {volantes.map((jogador) => (
                                <div className="all-player">
                                    <div className="players">
                                        <div className="foto-diretor">
                                            <img src={`http://localhost:3000/${jogador.photo}`} alt="" />
                                        </div>
                                        <div className="info-player">
                                            <h2>{jogador.nome}</h2>
                                            <h3>{jogador.numberShirt}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="position">
                                <h2>MEIAS</h2>
                            </div>
                        <div className="grid-elenco-pos">
        
                            {meias.map((jogador) => (
                                <div className="all-player">
                                    <div className="players">
                                        <div className="foto-diretor">
                                            <img src={`http://localhost:3000/${jogador.photo}`} alt="" />
                                        </div>
                                        <div className="info-player">
                                            <h2>{jogador.nome}</h2>
                                            <h3>{jogador.numberShirt}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="position">
                                <h2>ATACANTES</h2>
                            </div>
                        <div className="grid-elenco-pos">

                            {atacantes.map((jogador) => (
                                <div className="all-player">
                                    <div className="players">
                                        <div className="foto-diretor">
                                            <img src={`http://localhost:3000/${jogador.photo}`} alt="" />
                                        </div>
                                        <div className="info-player">
                                            <h2>{jogador.nome}</h2>
                                            <h3>{jogador.numberShirt}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="position">
                                <h2>TREINADOR</h2>
                            </div>
                        <div className="grid-elenco-pos">

                            {treinadorVeterano.map((jogador) => (
                                <div className="all-player">
                                    <div className="players">
                                        <div className="foto-diretor">
                                            <img src={`http://localhost:3000/${jogador.photo}`} alt="" />
                                        </div>
                                        <div className="info-player">
                                            <h2>{jogador.nome}</h2>
                                            <h3>{jogador.numberShirt}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
              </div>
            );
          case 'beachSoccer':
            return (
                <div className='.veterano-home'>
                <div className="title-elenco">
                    <h2>Time Beach Soccer</h2>
                </div>
                <div className="grid-elenco-home">
                    <div className="position">
                            <h2>GOLEIROS</h2>
                        </div>
                    <div className="grid-elenco-pos">

                        {gkBs.map((jogador) => (
                            <div className="all-player">
                                <div className="players">
                                    <div className="foto-diretor">
                                        <img src={`http://localhost:3000/${jogador.photo}`} alt="" />
                                    </div>
                                    <div className="info-player">
                                        <h2>{jogador.nome}</h2>
                                        <h3>{jogador.numberShirt}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="position">
                            <h2>FIXOS</h2>
                        </div>
                    <div className="grid-elenco-pos">

                        {fixos.map((jogador) => (
                            <div className="all-player">
                                <div className="players">
                                    <div className="foto-diretor">
                                        <img src={`http://localhost:3000/${jogador.photo}`} alt="" />
                                    </div>
                                    <div className="info-player">
                                        <h2>{jogador.nome}</h2>
                                        <h3>{jogador.numberShirt}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="position">
                            <h2>ALAS</h2>
                        </div>
                    <div className="grid-elenco-pos">
    
                        {alas.map((jogador) => (
                            <div className="all-player">
                                <div className="players">
                                    <div className="foto-diretor">
                                        <img src={`http://localhost:3000/${jogador.photo}`} alt="" />
                                    </div>
                                    <div className="info-player">
                                        <h2>{jogador.nome}</h2>
                                        <h3>{jogador.numberShirt}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="position">
                            <h2>PIVÔS</h2>
                        </div>
                    <div className="grid-elenco-pos">

                        {pivos.map((jogador) => (
                            <div className="all-player">
                                <div className="players">
                                    <div className="foto-diretor">
                                        <img src={`http://localhost:3000/${jogador.photo}`} alt="" />
                                    </div>
                                    <div className="info-player">
                                        <h2>{jogador.nome}</h2>
                                        <h3>{jogador.numberShirt}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="position">
                            <h2>TREINADOR</h2>
                        </div>
                    <div className="grid-elenco-pos">

                        {bsTreinador.map((jogador) => (
                            <div className="all-player">
                                <div className="players">
                                    <div className="foto-diretor">
                                        <img src={`http://localhost:3000/${jogador.photo}`} alt="" />
                                    </div>
                                    <div className="info-player">
                                        <h2>{jogador.nome}</h2>
                                        <h3>{jogador.numberShirt}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
          </div>
              );
          case 'campo':
            return (
                <div className='veterano'>
                <div className="title-elenco">
                    <h2>Time Beach Soccer</h2>
                </div>
                {municipal.map((jogador) => (
              <div className="grid-elenco">
              <div className="position">
                  <h2>{jogador.posicao}</h2>
              </div>
              <div className="all-player">
                  <div className="players">
                      <div className="foto-diretor">
                          <img src={jogador.photo} alt="" />
                      </div>
                      <div className="info-player">
                          <h2>{jogador.nome}</h2>
                          <h3>1</h3>
                      </div>
                  </div>
              </div>
          </div>
              ))}

              </div>
            );
          default:
            return null;
        }
      };
    console.log(`elenco: ${elenco}`)
  return (
    <div className='container-elenco'>
        <div className="header-h1-elenco">
            <h1>BEIRA MAR GAMBOA</h1>
        </div>
        <div className="header-elenco">
            <select id="filtro" value={category} onChange={handleChangeCategoria}>
                <option value="veterano">Time Veterano</option>
                <option value="beachSoccer">Time Beach Soccer</option>
                {/* <option value="campo">Time Municipal de Campo</option> */}
            </select>
        </div>

        <div className="main-elenco">
            {renderConteudoCategoria()}
        </div>
    </div>
  )
}

export default Elenco