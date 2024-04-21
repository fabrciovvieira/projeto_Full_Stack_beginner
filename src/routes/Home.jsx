import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import logo from '../../public/logo.png'
import beiraMarFetch from '../axios/config'
import { ptBR } from 'date-fns/locale/pt-BR';
import { formatDistanceToNow, format, min, isBefore } from 'date-fns';

const Home = () => {
  const [noticias, setNoticias] = useState(null);
  const [jogos, setJogos] = useState(null);
  const [proximosJogos, setProximosJogos] = useState([]);


  // loading home
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [noticiasRes, jogosRes] = await Promise.all([
          beiraMarFetch.get('/noticias'),
          beiraMarFetch.get('/jogos')
        ]);
  
        setNoticias(noticiasRes.data);
  
        // Classificar os jogos com base na dataHora
        const sortedJogos = jogosRes.data.sort((a, b) => {
          const dataHoraA = new Date(a.dataHora);
          const dataHoraB = new Date(b.dataHora);
  
          return dataHoraA - dataHoraB;
        });
        
        // Filtrar os jogos que são no futuro
        const now = new Date();
        const proximos = sortedJogos.filter(jogo => !isBefore(jogo.dataHora, now));
  
        setJogos(sortedJogos);
        setProximosJogos(proximos);
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      }
    };
  
    fetchData();
  }, []);
  
  
  
  
  console.log(`recent: ${proximosJogos}`)
  if(!noticias) return <div className='loading'></div>



  return (
    <div className='container-home' >
      <span className='info-head'>
        Notícias
      </span>
      <div className="container-info">
      {noticias && noticias.slice(0, 3).map((news) => (
          <div key={news._id} className="destaques">
            <img className='img-news' src={`http://localhost:3000/${news.photo}`} alt="foto time" />
            <p className="hour">{formatDistanceToNow(new Date(news.createdAt), { locale: ptBR })} atrás</p>
            
            <h2>{news.title}</h2> 
        </div>
          ))}
      </div>
      <div className='container-resume-fixtures'>
          <span className='info-head'>
            Próximos Jogos
          </span>
          <div className="container-matches">
          {proximosJogos && proximosJogos.slice(0, 3).map((jogo) => (
              <div key={jogo._id} className="destaques-matches">
              <div className="dayMatch-and-liga">
                <div className="info-day-macth">
                  {jogo.liga === 'veterano' && (
                    <h2 className='title-game'>Veterano</h2>
                  )}
                 
                  <span className="daymatch">
                  {format(new Date(jogo.dataHora), 'dd/MM/yyyy', { locale: ptBR })}
                  </span>
                </div>
                <div className="logo-match">
                <img src={logo} alt="logo do time" />
                </div>
              </div>
              <div className="times-match">
                <div className="time-home">
                  <img src={logo} alt="time da casa" />
                  <h2>Beira Mar</h2>
                </div>
                <div className="border"></div>
                <div className="time-away">
                  <img src={`http://localhost:3000/${jogo.photo}`} alt="time de fora" />
                  <h2>{jogo.adversario}</h2>
                </div>
              </div>
              </div>
            ))}


          </div>
        </div>
    </div>
  )
}

export default Home