import React, {useState, useEffect, useContext} from 'react'

import beiraMarFetch from '../../axios/config'
import { useNavigate } from 'react-router-dom'
import { formatDistanceToNow, format, min, isBefore } from 'date-fns'; 
import { ptBR } from 'date-fns/locale/pt-BR';
import './Cadastro.css'
import { FaRegCalendarCheck } from 'react-icons/fa';
import { CiMapPin } from 'react-icons/ci';
import logo from '../../../public/logo.png';


const Cadastro = () => {
    const [escolha, setEscolha] = useState('')
    const [diretor, setDiretor] = useState(null)
    const [noticias, setNoticias] = useState(null);
    const [eventos, setEventos] = useState([]);
    const [jogos, setJogos] = useState(null);   
    const [elenco, setElenco] = useState([])
    const [veterano, setVeterano] = useState([])
    const [beachSoccer, setBeachSoccer] = useState([])
    const [municipal, setMunicipal] = useState([])
    const [category, setCategory] = useState('veterano')
    const [categoryCadastro, setCategoryCadastro] = useState('veterano')
    const [criarMembro, setCriarMembro] = useState(false)
    const [criarPlayer, setCriarPlayer] = useState(false)
    const [criarNew, setCriarNew] = useState(false)
    const [criarEvent, setCriaEvent] = useState(false)
    const [criarMacth, setCriaMatch] = useState(false)
   
    // cadastro
    const [inputs, setInputs] = useState({});
    const [image, setImage] = useState(null);

    

    const handleChangeDiretor = (event) => {
        if (event.target.name === "image") {
          setImage(event.target.files[0]);

        }
        else {
          setInputs({...inputs, [event.target.name]: event.target.value});
    
        }
      }
    const handleChangeJogador = (event) => {
        if (event.target.name === "image") {
          setImage(event.target.files[0]);
    
        }
        else {
            setInputs({
                ...inputs,
                [event.target.name]: event.target.value, 
  
            });
            console.log(`inputs set: ${inputs}`)
      }
    }
    console.log(`jogador: ${inputs}`)
    console.log(`phptp: ${image}`)

    const handleSubmitDiretor = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("photo", image);
        formData.append("nomeMembro", inputs.nome);
        formData.append("cargo", inputs.cargo);

        try {
            
            const response = await beiraMarFetch.post("/diretores", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
            });
        setDiretor([...diretor, response.data]);
        setCriarMembro(false)
        setInputs({})
            console.log(`envio: ${response}`)
        } catch (error) {
            console.log(`Mensagem de erro: ${error}`)
        }
    }
    const criarDiretor = () => {
        console.log('teste')
        setCriarMembro(true)
    }
    const handleChangeNews = (event) => {
        if (event.target.name === "image") {
            setImage(event.target.files[0]);
            console.log(`a imagem: ${image}`)
            console.log('CHEGOU AQUI TBM')
          }
          else {
              setInputs({
                  ...inputs,
                  [event.target.name]: event.target.value, 
    
              });
              console.log(`inputs set: ${inputs}`)
        }
    }
    const handleSubmitNews = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("photo", image);
        formData.append("title", inputs.title);
        formData.append("descricao", inputs.descricao);
        formData.append("author", inputs.author);

        try {
            
            const response = await beiraMarFetch.post("/noticias", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
            });
        setNoticias([...noticias, response.data]);
        setCriarNew(false)
        setInputs({})
            console.log(`envio: ${response}`)
        } catch (error) {
            console.log(`Mensagem de erro: ${error}`)
        }
    }
    const handleChangeJogo = (event) => {
        if (event.target.name === "image") {
            setImage(event.target.files[0]);
            console.log(`a imagem: ${image}`)
            console.log('CHEGOU AQUI TBM')
          }
          else {
              setInputs({
                  ...inputs,
                  [event.target.name]: event.target.value, 
    
              });
              console.log(`inputs set: ${inputs}`)
        }
    }
    const handleSubmitJogo = async (e) => {
        e.preventDefault();
    
        console.log('CHEGOU AQUI')
        const formData = new FormData();
        formData.append("photo", image);
        formData.append("adversario", inputs.adversario);
        formData.append("local", inputs.local);
        formData.append("dataHora", inputs.dataHora);
        formData.append("placarHome", inputs.placarHome);
        formData.append("placarAway", inputs.placarAway);
        formData.append("liga", inputs.categoria);
        console.log(formData)
        console.log(`inputs: ${inputs}`)
        try {
         
          const response = await beiraMarFetch.post("/jogos", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
          });
        setJogos([...jogos, response.data]);
        setCriarPlayer(false)
        setInputs({})
        console.log(`enviando: ${response}`)
        } catch (error) {
          console.log(`Mensagem de erro: ${error}`)
          console.log(`Novo: ${formData}`)
        }
      }
    const criarJogo = () => {
        console.log('PONTO')
        setCriaMatch(true)
    }

    const criarNoticia = () => {
        console.log('News')
        setCriarNew(true)
    }

    const handleChangeEvento = (event) => {
        if (event.target.name === "image") {
            setImage(event.target.files[0]);
            console.log(`a imagem: ${image}`)
            console.log('CHEGOU AQUI TBM')
          }
          else {
              setInputs({
                  ...inputs,
                  [event.target.name]: event.target.value, 
    
              });
              console.log(`inputs set: ${inputs}`)
        }
    }
    const handleSubmitEvento = async (e) => {
        e.preventDefault();
        console.log('ta aqui')
        console.log(`1: ${image}`)
        console.log(`1: ${inputs.nome}`)
        console.log(`1: ${inputs.dataHora}`)
        console.log(`1: ${inputs.infoEvento}`)
        const formData = new FormData();
        formData.append("photo", image);
        formData.append("nome", inputs.nome);
        formData.append("dataHora", inputs.dataHora);
        formData.append("infoEvento", inputs.infoEvento);

        try {
            
            const response = await beiraMarFetch.post("/eventos", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
            });
        setEventos([...eventos, response.data]);
        setCriaEvent(false)
        setInputs({})
            console.log(`envio: ${response}`)
        } catch (error) {
            console.log(`Mensagem de erro essa: ${error}`)
        }
    }

    const criaEvento = () => {
        console.log('evento')
        setCriaEvent(true)
    }

    useEffect(() => {
        const loadElenco = async () => {
          const res = await beiraMarFetch.get('/elenco')
          console.log(`Jogo: ${res}`)
          setElenco(res.data)
        }
        
        loadElenco()
      }, [])
    


    useEffect(() => {
        const loadEventos = async () => {
          const res = await beiraMarFetch.get('/eventos')
          console.log(`eventos: ${res}`)
          setEventos(res.data)
        }
        
        loadEventos()
      }, [])



    const handleSubmitJogador = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append("photo", image);
        formData.append("nome", inputs.nome);
        formData.append("posicao", inputs.posicao);
        formData.append("numberShirt", inputs.numero);
        formData.append("categoria", categoryCadastro);
        console.log(formData)
        console.log(`inputs: ${inputs}`)
        try {
         
          const response = await beiraMarFetch.post("/elenco", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
          });
        setElenco([...elenco, response.data]);
        setCriarPlayer(false)
        setInputs({})
        console.log(`envio: ${response}`)
        } catch (error) {
          console.log(`Mensagem de erro: ${error}`)
          console.log(`Novo: ${formData}`)
        }
      }
    const criarJogador = () => {
        console.log('teste')
        setCriarPlayer(true)
    }



    useEffect(() => {
        const loadElenco = async () => {
          const res = await beiraMarFetch.get('/elenco')
          console.log(`Jogo: ${res}`)
          setElenco(res.data)
        }
        
        loadElenco()
      }, [])
    

      useEffect(() => {
        const praia = elenco.filter(jogo => (jogo.categoria === "beachSoccer"));
        const master = elenco.filter(jogo => (jogo.categoria === "veterano"));
        const campo = elenco.filter(jogo => (jogo.categoria === "municipalDeCampo"));

        setBeachSoccer(praia)
        setMunicipal(campo)
        setVeterano(master)
        
      }, [elenco])

      if(!elenco) return <div className='loading'></div>

    useEffect(() => {
        const loadHome = async () => {
          const res = await beiraMarFetch.get('/noticias')
          console.log(`Jogo: ${res}`)
          setNoticias(res.data)
        }
        const loadJogos = async () => {
          const res = await beiraMarFetch.get('/jogos')
          console.log(res)
          setJogos(res.data)
        }
        loadJogos()
        loadHome()
      }, [])

    useEffect(() => {
        const loadDiretores = async () => {
          const res = await beiraMarFetch.get('/diretores')
          setDiretor(res.data)
        }

        loadDiretores()
      }, [])

      if(!diretor) return <div className='loading'></div>
   
      console.log(diretor)
    const clickDiretor = () => {
        setEscolha('diretor')
        setCriarMembro(false)
    }
    const clickJogador = () => {
        setEscolha('jogador')
        setCriarPlayer(false)

    }
    const clickJogo = () => {
        setEscolha('jogo')
        setCriaMatch(false)
    }
    const clickNews = () => {
        setEscolha('news')
        setCriarNew(false)
    }
    const clickEvento = () => {
        setEscolha('evento')
        setCriaEvent(false)
    }

    const deletarDiretor = async (id) => {
        try {
            console.log(id)
            await beiraMarFetch.delete(`/diretores/${id}`);
            const updatedDiretores = diretor.filter(membro => membro._id !== id);
            setDiretor(updatedDiretores);
        } catch (error) {
            console.error('Error deleting member:', error);
        }
    };

    const deleteJogo = async (id) => {
        try {
            console.log(id)
            await beiraMarFetch.delete(`/jogos/${id}`);
            const updateJogos = jogos.filter(jogo => jogo._id !== id);
            setJogos(updateJogos);
        } catch (error) {
            console.error('Error deleting Macth:', error);
        }
    }
    const deleteEvento = async (id) => {
        try {
            console.log(id)
            await beiraMarFetch.delete(`/eventos/${id}`);
            const updateEventos = eventos.filter(evento => evento._id !== id);
            setEventos(updateEventos);
        } catch (error) {
            console.error('Error deleting Macth:', error);
        }
    }
    const deleteNews = async (id) => {
        try {
            await beiraMarFetch.delete(`/noticias/${id}`);
            const updateNews = noticias.filter(noticia => noticia._id !== id);
            setNoticias(updateNews);
        } catch (error) {
            console.error('Error deleting news:', error);
        }
    }
    const deletePlayer = async (id) => {

        try {
            console.log(id)
            await beiraMarFetch.delete(`/elenco/${id}`);
            const deletePlayer = elenco.filter(player => player._id !== id);
            setElenco(deletePlayer);
        } catch (error) {
            console.error('Error deleting player:', error);
        }
    }

    const renderCadastroElenco = () => {
        switch (categoryCadastro) {
          case 'veterano':
            return (
                <div className="content-data-admin" >
                    <div className="form-edit">
                        <form onSubmit={handleSubmitJogador} className='formulario-admin'>
                            <div className="dados-registro">
                                <label>
                                    NOME:
                                </label>
                                <input 
                                type="text" 
                                name='nome'
                                onChange={handleChangeJogador}
                                placeholder='NOME DO JOGADOR'/>
                            </div>
                            <div className="dados-registro">
                                <label>
                                    Posição:
                                </label>
                                <div className="select-posicion" >
                                    <select id="filtro" name='posicao' onChange={handleChangeJogador}>
                                        <option>Posição</option>
                                        <option value="goleiro">Goleiro</option>
                                        <option value="zagueiro">Zagueiro</option>
                                        <option value="volante">Volante</option>
                                        <option value="meia">Meio Campo</option>
                                        <option value="atacante">Atacante</option>
                                        <option value="coach">Treinador</option>
                                    </select>
                                </div>
                            </div>
                            <div className="dados-registro">
                                <label>
                                    NÚMERO DA CAMISA:
                                </label>
                                <input 
                                type="number" 
                                name='numero'
                                onChange={handleChangeJogador}
                                />
                            </div>
                            <div className="dados-registro">
                                <label>
                                    FOTO:
                                </label>
                                <input type='file' 
                                name="image"
                                onChange={handleChangeJogador}/>
                            </div>
                            <input className='btn-admin' type="submit" value="SALVAR" />
                        </form>
                    </div>
                </div>

            );
          case 'beachSoccer':
            return (
                <div className="content-data-admin" >
                <div className="form-edit">
                    <form onSubmit={handleSubmitJogador} className='formulario-admin'>
                        <div className="dados-registro">
                            <label>
                                NOME:
                            </label>
                            <input 
                            type="text" 
                            name='nome'
                            onChange={handleChangeJogador}
                            placeholder='NOME DO JOGADOR'/>
                        </div>
                        <div className="dados-registro">
                            <label>
                                Posição:
                            </label>
                            <div className="select-posicion" >
                                <select id="filtro" name='posicao' onChange={handleChangeJogador}>
                                    <option>Posição</option>
                                    <option value="goleiro">Goleiro</option>
                                    <option value="fixo">Fixo</option>
                                    <option value="ala">Ala</option>
                                    <option value="pivo">Pivô</option>
                                    <option value="coach">Treinador</option>
                                </select>
                            </div>
                        </div>
                        <div className="dados-registro">
                            <label>
                                NÚMERO DA CAMISA:
                            </label>
                            <input 
                            type="number" 
                            name='numero'
                            onChange={handleChangeJogador}
                            />
                        </div>
                        <div className="dados-registro">
                            <label>
                                FOTO:
                            </label>
                            <input type='file' 
                            name="image"
                            onChange={handleChangeJogador}/>
                        </div>
                        <input className='btn-admin' type="submit" value="SALVAR" />
                    </form>
                </div>
            </div>
              );
          case 'campo':
            return (
                <div className="content-data-admin" >
                <div className="form-edit">
                    <form onSubmit={handleSubmitJogador} className='formulario-admin'>
                        <div className="dados-registro">
                            <label>
                                NOME:
                            </label>
                            <input 
                            type="text" 
                            name='nome'
                            onChange={handleChangeJogador}
                            placeholder='NOME DO JOGADOR'/>
                        </div>
                        <div className="dados-registro">
                            <label>
                                Posição:
                            </label>
                            <div className="select-posicion" >
                                <select id="filtro" name='posicao' onChange={handleChangeJogador}>
                                    <option>Posição</option>
                                    <option value="goleiro">Goleiro</option>
                                    <option value="zagueiro">Zagueiro</option>
                                    <option value="volante">Volante</option>
                                    <option value="meia">Meio Campo</option>
                                    <option value="atacante">Atacante</option>
                                    <option value="coach">Treinador</option>
                                </select>
                            </div>
                        </div>
                        <div className="dados-registro">
                            <label>
                                NÚMERO DA CAMISA:
                            </label>
                            <input 
                            type="number" 
                            name='numero'
                            onChange={handleChangeJogador}
                            />
                        </div>
                        <div className="dados-registro">
                            <label>
                                FOTO:
                            </label>
                            <input type='file' 
                            name="image"
                            onChange={handleChangeJogador}/>
                        </div>
                        <input className='btn-admin' type="submit" value="SALVAR" />
                    </form>
                </div>
            </div>
            );
          default:
            return null;
        }
      };


    const handleChangeCategoria = (event) => {
        setCategory(event.target.value);
    };

    const handleChangeCategoriaCadastro = (event) => {
        setCategoryCadastro(event.target.value);
    };
    const renderConteudoCategoria = () => {
        switch (category) {
          case 'veterano':
            return (
            <div className='geral-elenco-admin'>
                <div className="title-elenco">
                    <h1>Time Veterano</h1>
                </div>
                <div className="content-data-admin-main">
                    {elenco.map((jogador) => (
                    <div className="content-data-admin" key={jogador._id}>
                        <div className="foto-diretor">
                            <img src={`http://localhost:3000/${jogador.photo}`} alt="" />
                        </div>
                        <div className="tela-info-diretor-admin">
                            <h2>{jogador.nome}</h2>
                            <h3>{jogador.numberShirt}</h3>
                            <h3>{jogador.posicao}</h3>
                            <button className='btn-admin'>editar</button>
                            <buton className='btn-admin' onClick={() => deletePlayer(jogador._id)}>excluir</buton>
                        </div>
                    
                    </div>
                    ))}
                </div>
            </div>

            );
          case 'beachSoccer':
            return (
                <div className='geral-elenco-admin'>
                  <div className="title-elenco">
                      <h1>Time Beach Soccer</h1>
                  </div>
                  {beachSoccer.map((jogador) => (
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
                            <button className='btn-admin'>editar</button>
                            <buton className='btn-admin' onClick={() => deletePlayer(jogador._id)}>excluir</buton>
                        </div>
                    </div>
                </div>
            </div>
                ))}
 
                </div>
 
              );
          case 'campo':
            return (
                <div className='geral-elenco-admin'>
                <div className="title-elenco">
                    <h1>Time Campo</h1>
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
                          <button className='btn-admin'>editar</button>
                          <buton className='btn-admin' onClick={() => deletePlayer(jogador._id)}>excluir</buton>
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


      
  return (
    <div className='container-admin'>
        <div className="menu-admin">
            <button className='btn-admin' onClick={clickDiretor}>TELA DIRETORES</button>
            <button className='btn-admin' onClick={clickJogador}>TELA JOGADORES</button>
            <button className='btn-admin' onClick={clickJogo}>TELA JOGOS</button>
            <button className='btn-admin' onClick={clickNews}>TELA NOTÍCIAS</button>
            <button className='btn-admin' onClick={clickEvento}>TELA EVENTOS</button>
        </div>
        
         {escolha === 'jogador' && (
            <div className="menu-grid">
                <button className='cadastro-btn' onClick={criarJogador}>CADASTRAR JOGADOR</button>
                {criarPlayer ? (
                    <div className="1">
                        <div className="header-elenco">
                            <select id="filtro" value={categoryCadastro} onChange={handleChangeCategoriaCadastro} name='categoria' >
                                <option value="veterano">Time Veterano</option>
                                <option value="beachSoccer">Time Beach Soccer</option>
                                {/* <option value="campo">Time Municipal de Campo</option> */}
                            </select>
                        </div>
                        <div>
                            {renderCadastroElenco()}          
                        </div>
                        
                    </div>
                                ) : (
                                    <div className="1">
                                    <div className="header-elenco">
                                        <select id="filtro" value={category} onChange={handleChangeCategoria}>
                                            <option value="veterano">Time Veterano</option>
                                            <option value="beachSoccer">Time Beach Soccer</option>
                                            {/* <option value="campo">Time Municipal de Campo</option> */}
                                        </select>
                                    </div>
                                    <div>
                                        {renderConteudoCategoria()}          
                                    </div>
                                    
                                </div>
                                )}
                {/* <div className="header-elenco">
                    <select id="filtro" value={category} onChange={handleChangeCategoria}>
                        <option value="veterano">Time Veterano</option>
                        <option value="beachSoccer">Time Beach Soccer</option>
                        <option value="campo">Time Municipal de Campo</option>
                    </select>
                </div>
                <div className="grid-members">
                    {renderConteudoCategoria()}          
                </div> */}


            </div>
        )}
        {escolha === 'diretor' && (
            <div className="menu-grid">
                <button className='cadastro-btn' onClick={criarDiretor}>CADASTRAR DIRETOR</button>
                {criarMembro ? (
                    <div className="content-data-admin">
                        <div className="form-edit">
                            <form onSubmit={handleSubmitDiretor} className='formulario-admin'>
                                <div className="dados-registro">
                                    <label>
                                        NOME:
                                    </label>
                                    <input 
                                    type="text" 
                                    name='nome'
                                    placeholder='NOME DO DIRETOR'
                                    onChange={handleChangeDiretor}/>
                                </div>
                                <div className="dados-registro">
                                    <label>
                                        CARGO:
                                    </label>
                                    <input 
                                    type="text" 
                                    name='cargo'
                                    placeholder='CARGO DO MEMBRO'
                                    onChange={handleChangeDiretor}/>
                                </div>
                                <div className="dados-registro">
                                    <label>
                                        FOTO:
                                    </label>
                                    <input type='file' 
                                    name="image"
                                    onChange={handleChangeDiretor}/>
                                </div>
                                <input className='btn-admin' type="submit" value="SALVAR" />
                            </form>
                        </div>
                    </div>
                                ): (
                    <div className="content-data-admin-main">
                    
                    {diretor.map((membro) => (
                        <div className="content-data-admin" key={membro._id}>
                            <div className="foto-diretor">
                            <img src={`http://localhost:3000/${membro.photo}`} alt="" />
                            </div>
                            <div className="tela-info-diretor-admin">
                                <h2>{membro.nomeMembro}</h2> 
                                <h4>{membro.cargo}</h4>
                                <button className='btn-admin' onClick={() => deletarDiretor(membro._id)}>DELETAR</button>
                            </div>
                            
                        </div>
                    ))}            
                </div>)}

            </div>
        )}
        {escolha === 'news' && (
            <div className="menu-grid">
                <button className='cadastro-btn' onClick={criarNoticia}>CRIAR NOTÍCIA</button>                    
                    {criarNew ? (
                        <div className="content-data-admin">
                        <div className="form-edit">
                            <form onSubmit={handleSubmitNews} className='formulario-admin'>
                                <div className="dados-registro">
                                    <label>
                                        TITULO DA NOTICIA:
                                    </label>
                                    <input 
                                    type="text" 
                                    name='title'
                                    placeholder='DEFINA UM TITULO PRA NOTICIA'
                                    onChange={handleChangeNews}/>
                                </div>
                                <div className="dados-registro">
                                    <label>
                                        AUTOR:
                                    </label>
                                    <input 
                                    type="text" 
                                    name='author'
                                    placeholder='QUEM É O AUTOR DA NOTÍCIA'
                                    onChange={handleChangeNews}/>
                                </div>
                                <div className="dados-registro">
                                    <label>
                                        MATÉRIA DA NOTÍCIA:
                                    </label>
                                    <textarea name="descricao" id="descricao"  placeholder='CONTEÚDO DA NOTÍCIA AQUI' onChange={handleChangeNews}></textarea>
                                </div>
                                <div className="dados-registro">
                                    <label>
                                        FOTO:
                                    </label>
                                    <input type='file' 
                                    name="image"
                                    onChange={handleChangeNews}/>
                                </div>
                                <input className='btn-admin' type="submit" value="SALVAR" />
                            </form>
                        </div>
                        </div>
                    ) : (
                        <div className="content-data-admin-main">
                            {noticias.map((news) => (
                                <div className="content-news-admin" key={news._id}>
                                    <div className="img-news-admin-tela">
                                        <img src={`http://localhost:3000/${news.photo}`} alt="" />
                                    </div>
                                    <div className="content-news-admin">
                                        <h2>{news.title}</h2>
                                        <h4>{news.descricao}</h4>

                                        <button className='btn-admin' onClick={() => deleteNews(news._id)}>excluir</button>
                                    </div>
                                </div>
                            ))}

                        </div>          
                    )}

            </div>
        )}
        {escolha === 'evento' && (
            <div className="menu-grid">
                <button className='cadastro-btn' onClick={criaEvento}>CRIAR EVENTO</button>
                {criarEvent ? (
                    <div className="content-data-admin">
                    <div className="form-edit">
                        <form onSubmit={handleSubmitEvento} className='formulario-admin'>
                            <div className="dados-registro">
                                <label>
                                    NOME PARA O EVENTO:
                                </label>
                                <input 
                                type="text" 
                                name='nome'
                                placeholder='NOME DO EVENTO'
                                onChange={handleChangeEvento}/>
                            </div>
                            <div className="dados-registro">
                                <label>
                                    DATA E HORA:
                                </label>
                                <input 
                                type="datetime-local" 
                                name='dataHora'
                                onChange={handleChangeEvento}/>
                            </div>
                            <div className="dados-registro">
                                <label>
                                    DETALHES DO EVENTO:
                                </label>
                                <textarea name="infoEvento" id="infoEvento" onChange={handleChangeEvento} placeholder='DESCREVA O EVENTO AQUI'></textarea>
                            </div>
                            <div className="dados-registro">
                                <label>
                                    BANNER DO EVENTO:
                                </label>
                                <input type='file' 
                                name="image"
                                onChange={handleChangeEvento}/>
                            </div>
                            <input className='btn-admin' type="submit" value="SALVAR" />
                        </form>
                    </div>
                    </div>
                ) : (
                    <div className="content-data-admin-main-evento">
                    {eventos.map((evento) => (
                        <div className="content-data-admin-evento" key={evento._id}>
                            <div className="foto-diretor">
                            <img src={`http://localhost:3000/${evento.photo}`} alt="" />
                            </div>
                            <div className="tela-info-diretor-admin-evento">
                                <h2>{evento.nome}</h2> 
                                <h4>{evento.infoEvento}</h4>
                                <h4>{evento.dataHora}</h4>
                                <button className='btn-admin' onClick={() => deleteEvento(evento._id)}>Excluir</button>
                            </div>
                            
                        </div>
                    ))}            
                </div>
                )}
            </div>
        )}
        {escolha === 'jogo' && (
            <div className="menu-grid">
                <button className='cadastro-btn' onClick={criarJogo}>CADASTRAR JOGO</button>
                {criarMacth ? (
                    <div className="content-data-admin">
                    <div className="form-edit">
                        <form onSubmit={handleSubmitJogo} className='formulario-admin'>
                            <div className="dados-registro">
                                <label>
                                    LIGA:
                                </label>
                                
                                <div className="local">
                                    <select id="filtro" onChange={handleChangeJogo} name='categoria'>
                                        <option value="veterano">Selecione a liga</option>
                                        <option value="veterano">Veterano</option>
                                        <option value="beachSoccer">Beach Soccer</option>
                                        {/* <option value="municipal">Municipal de Campo</option> */}
                                    </select>
                                </div>
                            </div>
                            <div className="dados-registro">
                                <label>
                                    DATA E LOCAL:
                                </label>
                                
                                <div className="local">
                                    <select id="filtro" onChange={handleChangeJogo} name='local'>
                                        <option value="local">Local</option>
                                        <option value="casa">Casa</option>
                                        <option value="fora">Fora</option>
                                    </select>
                                </div>
                                <div className="dataEhora">
                                    <input type="datetime-local" name="dataHora" id="dataHora" onChange={handleChangeJogo} />
                                </div>
                                    
                            </div>

                            <div className="dados-registro">
                                <label>
                                    NOME DO ADVERSÁRIO:
                                </label>
                                <input 
                                type="text" 
                                name='adversario'
                                
                                onChange={handleChangeJogo}/>
                            </div>
                            <div className="dados-registro">
                                <label>
                                    ESCUDO DO ADVERSÁRIO 'caso tenha':
                                </label>
                                <input type='file' 
                                name="image"
                                onChange={handleChangeJogo}/>
                            </div>
                            <div className="dados-registro">
                                <label>
                                    PLACARES:
                                </label>
                                <p>PLACAR DO BEIRA MAR</p>
                                <input type="number" name='placarHome' onChange={handleChangeJogo}/>
                                <p>PLACAR DO ADVERSÁRIO</p>
                                <input type="number" name='placarAway' onChange={handleChangeJogo}/>
                            </div>
                            <input className='btn-admin' type="submit" value="SALVAR" />
                        </form>
                    </div>
                </div>
                ) : (
                    <div className="container-edit-jogo">
                    {jogos.map((jogo) => (
                        <div className="edit-jogo-geral" key={jogo._id}>
                            <div className="liga-data-local">
                                <h2>Liga: {jogo.liga}</h2>
                                <h2>Dia e hora: {format(new Date(jogo.dataHora), 'dd/MM/yyyy HH:mm', { locale: ptBR })}</h2>
                                <h2>Local: {jogo.local}</h2>
                            </div>

                            <div className="os-time-admin-tela">
                                {jogo.local === 'casa' ? (
                                    <div className="os-time-admin-tela">
                                         <h2>Beira Mar: {jogo.placarHome}</h2>
                                         <img className='logo-admin-escudos' src={logo} alt="" />
                                         <h2>{jogo.adversario}: {jogo.placarAway}</h2>
                                         <img className='logo-admin-escudos' src={`http://localhost:3000/${jogo.photo}`} alt="" />
                                    </div> 
                                ) : (
                                    <div className="os-time-admin-tela">
                                         <h2>{jogo.adversario}: {jogo.placarAway}</h2>
                                         <img className='logo-admin-escudos' src={`http://localhost:3000/${jogo.photo}`} alt="" />
                                         <h2>Beira Mar</h2>
                                         <img className='logo-admin-escudos' src={logo} alt="" />
                                    </div> 
                                )}

                            </div>
                            <button className='btn-admin'>editar</button>
                                <button className='btn-admin' onClick={() => deleteJogo(jogo._id)}>excluir</button>
                        </div>
                    ))}
                </div>
                )}

            </div>
        )}
    </div>
  )
}
export default Cadastro
