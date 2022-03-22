import '../style.css'
import ItemCount from '../ItemCount';
import React from 'react'
import ItemList from '../ItemList';


function ItemListConteiner(props) {
    const {tituloProps, subProps} = props
  return (
    <div className="saludo">
<h1 className='tituloPag'> {tituloProps} </h1>
<h6 className='subPag'> {subProps} </h6>
<ItemList/>
<ItemCount />
    </div>
    
  );

}


export default  ItemListConteiner