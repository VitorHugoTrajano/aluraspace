import React from 'react'
import open from './open.png'
import favorito from './favorito.png'
import style from '../../Galeria/Galeria.module.scss'

export default function Cards( {itens, styles} ) {
  return (
    <ul className={styles.galeria__cards} >
          {itens.map((item) => {
            return (
              <li className={style.galeria__card}>
              <img
                className={style.galeria__imagem}
                src={item.imagem}
                alt={item.titulo}
              />
              <p className={style.galeria__descricao}>{item.titulo}</p>
              <div>
                <p>{item.creditos}</p>
                <span>
                  <img src={open} alt="icone de expandir" />
                  <img src={favorito} alt="ícone de coração ou favoritar" />
                </span>
              </div>
              </li>
          )})}
    </ul>
  )
}
