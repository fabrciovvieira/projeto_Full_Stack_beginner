import React, { useState, useEffect } from 'react';
import beiraMarFetch from '../../axios/config';
import { useNavigate } from 'react-router-dom';
import './Admin.css';
import Cadastro from './Cadastro';

const Admin = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [connecting, setConnecting] = useState(false);
  const [done, setDone] = useState(false);
  

  console.log(user)
  useEffect(() => {
    const loadUser = async () => {
      try {
        const res = await beiraMarFetch.get('/admin');
        console.log(`login: ${res}`);
        // Ajuste para definir o usuário logado, se necessário
      } catch (error) {
        console.error('Erro ao carregar usuário:', error);
      }
    };

    loadUser();
  }, []);

  const submit = async () => {
    console.log('Clicou em conectar');
    setError('');
    setConnecting(true);
    console.log(`usuario: ${user}`)
    console.log(`pass: ${password}`)
  
    try {
      const loginData = {
        nome: user,
        password: password
      };
      const res = await beiraMarFetch.get('/admin', loginData);
      
      console.log(res)

      console.log(`user: ${res.data[0].nome}`)
      console.log(`pass: ${res.data[0].password}`)

      if(user === res.data[0].nome && res.data[0].password){
        alert('Login efetuado com sucesso');
        setUser('');
        setPassword('');
        setDone(true)
      }
      else{
        console.error('Erro ao fazer login:', error);
        setError(error.message);
        alert('ENTRE EM CONTATO COM O ADMIN');
      }
      
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setError(error.message);
      alert('ENTRE EM CONTATO COM O ADMIN');
    } finally {
      setConnecting(false);
    }
  };
  
  const handleUser = (e) => {
    setUser(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className='wrapper'>
      {done ? (<div className="wraper-cadastro">
        <Cadastro />
      </div>):(      <div className='login-form'>
        <h1>ACESSAR ADMIM-PAGE</h1>
        {error && <div className='errorMessage'>{error}</div>}
        <div className='row'>
          <label htmlFor='user'>User</label>
          <input id='user' type='text' autoComplete='off' value={user} onChange={handleUser} />
        </div>
        <div className='row'>
          <label htmlFor='password'>Password</label>
          <input id='password' type='password' value={password} onChange={handlePassword} />
        </div>

        <div className='button'>
          <button className='btn' onClick={submit} disabled={user === '' || password === '' || connecting}>
            Conectar
          </button>
        </div>
      </div>)}

    </div>
  );
};

export default Admin;
