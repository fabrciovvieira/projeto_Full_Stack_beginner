import React, { createContext, useContext, useState } from 'react';
import beiraMarFetch from '../../../axios/config';

export const NoticiasContext = createContext();

export const NoticiasProvider = ({ children }) => {
  const [noticias, setNoticias] = useState([]);

  const editarNoticia = async (id, novaNoticia) => {
    console.log(`id: ${id}`)
    console.log(`resto: ${novaNoticia}`)
    try {
      const response = await beiraMarFetch.put(`/noticias/${id}`, novaNoticia);
      console.log('Notícia editada:', response.data);

      setNoticias([...noticias.filter(noticia => noticia.id !== id), response.data]);
    } catch (error) {
      console.error('Erro ao editar notícia:', error);
    }
  };

  return (
    <NoticiasContext.Provider value={{ noticias, editarNoticia }}>
      {children}
    </NoticiasContext.Provider>
  );
};
