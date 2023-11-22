import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { getProductsById } from "../productsMock"
import { GifLoading } from "../GifLoading/GifLoading"

export const ItemDetailContainer = () => {
    const { id } = useParams()
    const [item, setItem] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect( () => { 
      setIsLoading(true)
      getProductsById(id)
        .then(resp => {
          if(id){
            setItem(resp)
            setIsLoading(false)
          }
          setIsLoading(false)
        })
        .catch(error => console.log(error))
        
     }, [])
  return (
    <>
    {isLoading ? <h1 className="text-center p-5"><GifLoading/></h1> : item && <ItemDetail {...item} /> }
    </>
  )
}