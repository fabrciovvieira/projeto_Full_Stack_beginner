import React, { useState, useEffect } from 'react';
import beiraMarFetch from '../../axios/config';
import { formatDistanceToNow, format, min, isBefore } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import './Jogos.css';
import logo from '../../../public/logo.png';
import { Link } from 'react-router-dom';
import { FaRegCalendarCheck } from 'react-icons/fa';
import { CiMapPin } from 'react-icons/ci';

const Jogos = () => {
  const [selectedLink, setSelectedLink] = useState('agenda');
  const [jogos, setJogos] = useState([]);
  const [proximosJogos, setProximosJogos] = useState([]);
  const [jogosPassados, setJogosPassados] = useState([]);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
 



  const calculateCountdown = () => {
    if (proximosJogos && proximosJogos.length > 0) {
      const targetDate = new Date(proximosJogos[0].dataHora).getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      }
    }
  };

  useEffect(() => {
    const loadJogos = async () => {
      const res = await beiraMarFetch.get('/jogos');
      const jogosWithDate = res.data.map(jogo => ({
        ...jogo,
        data: new Date(jogo.dataHora)
      }));
      const sortedJogos = jogosWithDate.sort((a, b) => a.data - b.data);
      setJogos(sortedJogos);
      
    };

    loadJogos();
  }, []);

  useEffect(() => {
    const now = new Date();
    const proximos = jogos.filter(jogo => !isBefore(jogo.data, now));
    const passados = jogos.filter(jogo => isBefore(jogo.data, now)).sort((a, b) => b.data - a.data);
    setProximosJogos(proximos);
    setJogosPassados(passados);
  }, [jogos]);
  

  useEffect(() => {
    const interval = setInterval(calculateCountdown, 1000);
    return () => clearInterval(interval);
  }, [jogos]);

  if (!jogos) return <div className="loading"></div>

  console.log(`proximo: ${proximosJogos.length}`)
  {proximosJogos.map((jogo) => (
    console.log(`proximo: ${jogo.dataHora}`)

  ))}

  console.log(jogos)
  return (
    <div className="container-jogo">
      <div className="navbar-jogos">
        <nav>
          <Link
            className={selectedLink === 'agenda' ? 'selected' : ''}
            onClick={() => setSelectedLink('agenda')}
          >
            Agenda de Jogos
          </Link>
          <Link
            className={selectedLink === 'resultados' ? 'selected' : ''}
            onClick={() => setSelectedLink('resultados')}
          >
            Resultados
          </Link>
        </nav>

      </div>
      <div className="next-match">
        {selectedLink === 'agenda' && (
          <div className="container-agenda">
                <div className="title-next-match">
                <h1>Próximo Jogo</h1>
                </div>
                {proximosJogos.length > 0 && (
                <div className="jogo-1">


                        {proximosJogos.slice(0,1).map((jogo) => (
                        <div className="header-info-jogo-next" key={jogo._id}>
                            <div className="left-header">
                            <h2>{jogo.liga}</h2>
                            <div className="calendar-local">
                                <div className="day-match">
                                <FaRegCalendarCheck className="pin" />
                                <span className="date">
                                    {format(new Date(jogo.dataHora), 'dd/MM/yyyy', { locale: ptBR })}
                                </span>
                                </div>
                                <div className="local-match">
                                <CiMapPin className="pin" />
                                <span className="date">{jogo.local}</span>
                                </div>
                            </div>
                            </div>
                            <div id="agenda-logo" className="logo-match">
                            <img src={logo} alt="" />
                            </div>
                        </div>
                        ))}
                </div>
                )}
                {proximosJogos.slice(0, 1).map((jogo) => (
                <div className="datas-of-match" key={jogo._id}>
                    <div className='teams-match'>
                    <div className="home-team">
                        {jogo.local === 'fora' ? (
                            <div className="away-team">
                                <img src={`http://localhost:3000/${jogo.photo}`} alt="" />
                                <h2>{jogo.adversario}</h2>
                            </div>
                        ): (
                            <div className="home-team">
                                <img src={logo} alt="" />
                                <h2>Beira Mar</h2>
                            </div>
                        )}
                    </div>
                    <div className="border-match"></div>
                    <div className="away-team">
                        {jogo.local === 'Fora' || jogo.local === 'fora' ? (
                            <div className="away-team">
                                <img src={logo} alt="" />
                                <h2>Beira Mar</h2>
                            </div>
                        ): (
                            <div className="home-team">
                                <img src={`http://localhost:3000/${jogo.photo}`} alt="" />
                                <h2>{jogo.adversario}</h2>
                            </div>
                        )}
                    </div>
                    </div>
                    <div className="countdown-match">
                    <div className="countdown">
                        <h2>{countdown.days}</h2>
                        <span>DIAS</span>
                    </div>
                    <div className="countdown">
                        <h2>{countdown.hours}</h2>
                        <span>HORAS</span>
                    </div>
                    <div className="countdown">
                        <h2>{countdown.minutes}</h2>
                        <span>MINUTOS</span>
                    </div>
                    <div className="countdown">
                        <h2>{countdown.seconds}</h2>
                        <span>SEGUNDOS</span>
                    </div>
                    </div>
                </div>
                ))}
                <div className="info-jogo-atual">
                    <h2>JOGO CONFIRMADO</h2>
                </div>
          <div className="all-next-matches">
        {/* Conteúdo para todos os próximos jogos */}
          <div className="all-of-matches">
                <div className="title-next-match-month">
                    <h1>JOGOS NA SEQUÊNCIA</h1>
                </div>

                {proximosJogos.length > 0 && (
                <div className="all-of-matches">
                    <div className="header-jogo-1">
                    <div className="info-jogo-1">
                        {proximosJogos.map((jogo) => (
                        <div className="header-info-jogo-1" key={jogo._id}>
                            <div className="top-of-matches">
                                <div className="left-header">
                                    <h2>{jogo.liga}</h2>
                                    <div className="calendar-local">
                                        <div className="day-match">
                                            <FaRegCalendarCheck className="pin" />
                                            <span className="date">
                                                {format(new Date(jogo.dataHora), 'dd/MM/yyyy', { locale: ptBR })}
                                            </span>
                                        </div>
                                        <div className="local-match">
                                            <CiMapPin className="pin" />
                                            <span className="date">{jogo.local}</span>
                                        </div>
                                    </div>
                                
                                </div>
                                <div className="logo-match">
                                        <img src={logo} alt="" />
                                </div>
                            </div>
                            <div className="create-games">
                                {jogo.local === 'Fora' || jogo.local === 'fora' ? (
                                    <div className="fora">
                                        <div className="away">
                                            <h2>{jogo.adversario}</h2>
                                        </div>
                                        <div className="middle-info">
                                            <div className="logo-match"><img src={`http://localhost:3000/${jogo.photo}`} alt="" /></div>
                                            <h4 className='hora-match'>{format(new Date(jogo.dataHora), 'HH:mm')}</h4>
                                            <div className="logo-match"><img src={logo} alt="" /></div>
                                        </div>
                                        <div className="home">
                                            <h2>Beira Mar</h2>
                                        </div>
                                    </div>
                                ): (
                                    <div className="home">
                                        <div className="away">
                                            <h2>Beira Mar</h2>
                                        </div>
                                        <div className="middle-info">
                                            <div className="logo-match"><img src={logo} alt="" /></div>
                                            <h4 className='hora-match'>{format(new Date(jogo.dataHora), 'HH:mm')}</h4>
                                            <div className="logo-match"><img src={`http://localhost:3000/${jogo.photo}`} alt="" /></div>
                                        </div>
                                        <div className="home">
                                            <h2>{jogo.adversario}</h2>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        ))}
                    </div>
                    </div>
                </div>
                )}

          </div>
      </div>
          </div>
        )}
        {selectedLink === 'resultados' && (
            <div className="resultador-container">
                <div className="all-of-matches">
                    <div className="title-next-match-month">
                        <h1>JOGOS PASSADOS</h1>
                    </div>

                {jogosPassados.length > 0 && (
                    <div className="all-of-matches">
                        <div className="header-jogo-1">
                            <div className="info-jogo-1">
                            {jogosPassados.map((jogo) => (
                                <div className="header-info-jogo-1" key={jogo._id}>
                                    <div className="top-of-matches">
                                        <div className="left-header">
                                            <h2>{jogo.liga}</h2>
                                            <div className="calendar-local">
                                                <div className="day-match">
                                                    <FaRegCalendarCheck className="pin" />
                                                    <span className="date">
                                                        {format(new Date(jogo.dataHora), 'dd/MM/yyyy', { locale: ptBR })}
                                                    </span>
                                                </div>
                                                <div className="local-match">
                                                    <CiMapPin className="pin" />
                                                    <span className="date">{jogo.local}</span>
                                                </div>
                                            </div>
                                        
                                        </div>
                                        <div className="logo-match">
                                                <img src={logo} alt="" />
                                        </div>
                                    </div>
                                    <div className="create-games">
                                        {jogo.local === 'fora' ? (
                                            <div className="fora">
                                                <div className="away">
                                                    <h2>{jogo.adversario}</h2>
                                                </div>
                                                <div className="middle-info-resultados">
                                                    <div className="logo-match"><img src={`http://localhost:3000/${jogo.photo}`} alt="" /></div>
                                                    <div className="placar">
                                                        <h3 className='placar-h2'>{jogo.placarAway}</h3>
                                                    </div>
                                                    <div className="placar">
                                                        <h3 className='placar-h2'>{jogo.placarHome}</h3>
                                                    </div>
                                                    <div className="logo-match"><img src={logo} alt="" /></div>
                                                </div>
                                                <div className="home">
                                                    <h2>Beira Mar</h2>
                                                </div>
                                            </div>
                                        ): (
                                            <div className="home">
                                                <div className="away">
                                                    <h2>Beira Mar</h2>
                                                </div>
                                                <div className="middle-info-resultados">
                                                    <div className="logo-match"><img src={logo} alt="" /></div>
                                                    <div className="container-placar">
                                                        <div className="placar">
                                                            <h3 className='placar-h2'>{jogo.placarHome}</h3>
                                                        </div>
                                                        <div className="placar">
                                                            <h3 className='placar-h2'>{jogo.placarAway}</h3>
                                                        </div>
                                                    </div>
                                                    <div className="logo-match"><img src={`http://localhost:3000/${jogo.photo}`} alt="" /></div>
                                                </div>
                                                <div className="home">
                                                    <h2>{jogo.adversario}</h2>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                        </div>
                    </div>
                )}

          </div>
            </div>
        )}
      </div>

    </div>
  );
};

export default Jogos;
