import '../style.css'

import React from 'react'

function ItemListConteiner(props) {
    const {tituloProps, subProps} = props
  return (
    <div className="saludo">
<h1 className='tituloPag'> {tituloProps} </h1>
<h6 className='subPag'> {subProps} </h6>

    </div>
  )
}

export default  ItemListConteiner