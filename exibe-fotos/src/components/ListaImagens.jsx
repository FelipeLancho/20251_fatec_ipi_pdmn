import React from 'react'
import Imagem from './imagem'

const ListaImagens = ({photos}) => {
  return (
    photos.map((photo) => (
        <Imagem src={photo.src.small} alt={photo.alt}/>
    ))
  )
}

export default ListaImagens