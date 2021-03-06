import { useEffect, useState  } from 'react'
import { useParams } from 'react-router-dom';
import { query, collection, getDocs, getFirestore, where} from "firebase/firestore"
import Item from './Item';

function ItemList (){ 

const [cargando, setCargando] = useState (true)
const { categoriaId } = useParams ()
const [productos, setProductos] = useState ([])

useEffect (() => {
const querydb = getFirestore()
const queryCollection = collection(querydb, 'productos')
const queryFilter = categoriaId ? query (queryCollection, where('categoria', '==', categoriaId)) : queryCollection

getDocs(queryFilter)
.then(resp => setProductos(resp.docs.map(item => ({ id: item.id, ...item.data() }) ) ) )
.catch(err => console.log(err))
.finally(()=> setCargando (false))
},[categoriaId])

  return ( 
    <> 
 { cargando ? <h2 >Cargando productos...</h2> : 

<div className='contenedor'>
 {productos.map((prod) => {
            return (
                <Item  key={prod.id} 
                titulo={prod.titulo} 
                precio={prod.precio} 
                picUrl={prod.picUrl} 
                id={prod.id} 
                categoria={prod.categoria}
                productos={productos}/>  
            )
        }
        )
      }
</div>       
     }

    </>
  )
}

export default ItemList