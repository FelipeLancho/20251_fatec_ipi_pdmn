import React from 'react'
import Imagem from './imagem'

const ListaImagens = ({photos, imgStyle}) => {
  return (
    photos.map((photo) => (
        <Imagem imgStyle={imgStyle} src={photo.src.small} alt={photo.alt}/>
    ))
  )
}

export default ListaImagens