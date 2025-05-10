import React from 'react'

const imagem = ({src, alt, imgStyle}) => {
  return (
    <div className={`${imgStyle} flex justify-content-center`}>
        <img src={src} alt={alt}></img>
    </div>
  )
}

export default imagem