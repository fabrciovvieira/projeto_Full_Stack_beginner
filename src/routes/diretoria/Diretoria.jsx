import React, { useState, useEffect } from 'react'
import beiraMarFetch from '../../axios/config'
import './Diretoria.css'

const Diretoria = () => {
    const [diretor, setDiretor] = useState(null)

    useEffect(() => {
        const loadDiretores = async () => {
          const res = await beiraMarFetch.get('/diretores')
          console.log(`Jogo: ${res}`)
          setDiretor(res.data)
        }
        
        loadDiretores()
      }, [])
    
      if(!diretor) return <div className='loading'></div>
      console.log(diretor)
  return (
    <div className='container-diretoria'>
        <h1>Integrantes da Diretoria</h1>
        <div className="grid-members">
            {diretor.map((membro) => (
                <div className="membro">
                    <div className="foto-diretor">
                    <img src={`http://localhost:3000/${membro.photo}`} alt="" />
                    </div>
                    <div className="cargo">
                        <h2>{membro.nomeMembro}</h2> 
                        <h4>{membro.cargo}</h4>
                    </div>
                </div>
            ))}            
        </div>
    </div>
  )
}

export default Diretoria